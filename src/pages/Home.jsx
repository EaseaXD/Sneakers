import Card from "../components/Card"
const Home = ({searchValue,onChangeSearchInput,AddtoFavorit,onAddToCart,sneakers,setSearchValue}) =>{
    
    return(
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
              onFavorite={(obj) =>AddtoFavorit(obj)}
              onPlus={(obj)=>onAddToCart(obj)}
               />)
           }
            
             

             

            </div>
         
        </div>
    )
}

export default Home