
import React from "react";
const CartItem = ({imageUrl,title,price,id,onRemove}) =>{
    return(
      <div className='cartItem'>
      <div className="cartContent">
        <img className='cartSneaker'  src={imageUrl} alt='sneaker' />
        <div className='cartInfo'>
          <p>{title}</p>
          <b>{price} руб</b>
        </div>
      </div>
    <img onClick={()=> onRemove(id)} className='cartDelete' width={32} height={32} src='/img/delete.svg' alt='delete' />
    </div>
    )
}
export default CartItem;