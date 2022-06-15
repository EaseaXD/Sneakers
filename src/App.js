import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';


function App() {
  const [cartOpened,setCartOpened] = React.useState(false);
  const[cartItems,setCartItems] =React.useState([]);
  const [sneakers,setSneakers] =React.useState([]);
  const [favorites,setFavorites] = React.useState([]);
  const [searchValue,setSearchValue] = React.useState("");
  const [sumCartheader,setSumCartHeader] = React.useState('');
  React.useEffect(() =>{
    axios.get("https://629f4eb7461f8173e4e69697.mockapi.io/items")
    .then((res)=>{
      
      setSneakers(res.data)
    })

    axios.get("https://629f4eb7461f8173e4e69697.mockapi.io/cart")
    .then((res)=>{
      setCartItems(res.data)
      
    })
    
    axios.get("https://629f4eb7461f8173e4e69697.mockapi.io/favorites")
    .then((res)=>{
      setFavorites(res.data)
      
    })

  },[]);

  const onAddToCart = (obj) =>{
    if(obj.isAdded === false){
      console.log(obj.isAdded)
    axios.post("https://629f4eb7461f8173e4e69697.mockapi.io/cart", obj)

    setCartItems(prev=> [...prev, obj])
    }else{
      setCartItems(prev =>[...prev])
    }
    
  };

  const onRemoveItem = (id) =>{
    axios.delete(`https://629f4eb7461f8173e4e69697.mockapi.io/cart/${id}`)
    setCartItems((prev)=>  prev.filter(item => item.id !== id))
    
  }

 
  
  const AddtoFavorit = async (obj) =>{
   console.log("App",obj.id)
   try{
    if(favorites.find(favObj => favObj.id === obj.id)){
      axios.delete(`https://629f4eb7461f8173e4e69697.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev)=>  prev.filter(item => item.id !== obj.id))

    }else if(favorites.some(item => item.id === obj.id) === false) {
      const {data} = await axios.post("https://629f4eb7461f8173e4e69697.mockapi.io/favorites", obj,{
        
      })
      console.log("add",obj)
      setFavorites(prev=> [...prev, data])
    }
   }catch(error){
    alert("не удалось добавить фаворитов ");
   }
    
    
    
    
  }

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  }

  const sumCart = (sum) =>{
    setSumCartHeader(sum)
  }
  return (
    <div className="wrapper">
       {cartOpened? <Drawer items={cartItems} onClose={() => setCartOpened(!cartOpened)} onRemove={onRemoveItem} sumCart={sumCart}  />: null}
        <Header onClickCart={() => setCartOpened(!cartOpened)} sumCartheader={sumCartheader} />

        <Routes>
          <Route path="/" element={
            <Home 
            searchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput}
            sneakers={sneakers}
            AddtoFavorit={AddtoFavorit}
            onAddToCart={onAddToCart}
            setSearchValue={setSearchValue}
            />
          } />
           
          <Route path='favorites' element={<Favorites favorites={favorites} AddtoFavorit={AddtoFavorit} />} />
        </Routes>
        
    </div>
  );
}

export default App;
