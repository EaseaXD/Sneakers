import CartItem from "./CartItem"
import React from "react"
const Drawer = ({onClose,onRemove,items=[],sumCart }) =>{

const [sum,setSum] = React.useState( 0)



  
  React.useEffect(() =>{
  

  },[]);
  


 


  
 
    return(
        <div className='overlay'>

        <div className='drawer'>
        {
          items.length === 0 ?
          <>
          <div className='cartTop'>
          <h2>Корзина</h2>
          <svg onClick={onClose} width="18" height="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div className="drawerNull">
              <img width={120} height={120} src="/img/Box.jpg" alt="drawer" />
              <h2 className="drawerNullTitle" >Корзина пустая</h2>
              <p className="drawerNullSub">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            
          </div>
          </> : <>
          <div className='cartTop'>
          <h2>Корзина</h2>
          <svg onClick={onClose} width="18" height="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          
          <div className='items'>
            {
              items.map((obj)=>(
                <CartItem 
                onRemove={onRemove}
                id={obj.id}
                imageUrl={obj.imageUrl}
                title={obj.title}
                price={obj.price}
                 />
              ))
              
            }

          

          
          </div>

        <div className='cartBottom'>
          <ul >
            <li className='cartBottomPrice'>
              <span>Сумма заказа:</span>
              
              <b>{sum } руб</b>
              
            </li>
            
          </ul>
          <button className='greenButton'>Оформить заказ</button>
        </div></>
        }
          

        </div>
      </div>
    )
}
export default Drawer