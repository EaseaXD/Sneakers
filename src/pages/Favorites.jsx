import Card from "../components/Card"
const Favorites = ({favorites, AddtoFavorit}) =>{
    
    return(
        <div className='content'>

          <div className='contentHeader'>
          <h1 className='title'>Мои закладки</h1>
            

          </div>
          
          <div className='sneakers'>
          {
            
             favorites.map((item)=><Card 
              id={item.id}
              title={item.title}
              price={item.price} 
              imageUrl={item.imageUrl}
              favorited= {true}
              onFavorite={AddtoFavorit}
              
               />)
           }
          </div>
         
         
        </div>
    )
}

export default Favorites