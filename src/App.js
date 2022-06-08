import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';


function App() {
  const [cartOpened,setCartOpened] = React.useState(false);
  const[cartItems,setCartItems] =React.useState([]);
  const [sneakers,setSneakers] =React.useState([]);
  const [searchValue,setSearchValue] = React.useState("");

  React.useEffect(() =>{
    axios.get("https://629f4eb7461f8173e4e69697.mockapi.io/items")
    .then((res)=>{
      
      setSneakers(res.data)
    })
  },[]);

  const onAddToCart = (obj) =>{
    setCartItems(prev=> [...prev, obj])
  };
  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  }
  return (
    <div className="wrapper">
       {cartOpened? <Drawer items={cartItems} onClose={() => setCartOpened(!cartOpened)}  />: null}
        <Header onClickCart={() => setCartOpened(!cartOpened)} />

        <div className='content'>

          <div className='contentHeader'>
          <h1 className='title'>{searchValue ? `Поиск по запросу: "${searchValue}"`: "Все кроссовки" }</h1>
            <div className='search-block'>
              <img src='/img/search.svg' alt='Search' />
              <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />

            </div>

          </div>
          

          <div className='sneakers'>
           {
             sneakers.filter(item =>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item)=><Card 
              id={item.id}
              title={item.title}
              price={item.price} 
              imageUrl={item.imageUrl}
              onClickFavorite={()=>alert('Добавили в закладки ')}
              onPlus={(obj)=>onAddToCart(obj)}
               />)
           }
            
             

             

            </div>
         
        </div>
    </div>
  );
}

export default App;
