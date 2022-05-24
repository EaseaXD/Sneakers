const Drawer = () =>{
    return(
        <div style={{display: "none"}} className='overlay'>
        <div className='drawer'>
          <div className='cartTop'>
          <h2>Корзина</h2>
          <svg width="18" height="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          
          <div className='items'>
            <div className='cartItem'>
            <img className='cartSneaker'  src='/img/sneakers/1.jpg' alt='sneaker' />
            <div className='cartInfo'>
              <p>Мужские Кроссовки Nike Ait Max 270</p>
              <b>12 999 руб</b>
            </div>
          <img className='cartDelete' width={32} height={32} src='/img/delete.svg' alt='delete' />
          </div>

          <div className='cartItem'>
            <img className='cartSneaker'   src='/img/sneakers/1.jpg' alt='sneaker' />
            <div className='cartInfo'>
              <p>Мужские Кроссовки Nike Ait Max 270</p>
              <b>12 999 руб</b>
            </div>
          <img className='cartDelete' width={32} height={32} src='/img/delete.svg' alt='delete' />
          </div>

          <div className='cartItem'>
            <img className='cartSneaker'   src='/img/sneakers/1.jpg' alt='sneaker' />
            <div className='cartInfo'>
              <p>Мужские Кроссовки Nike Ait Max 270</p>
              <b>12 999 руб</b>
            </div>
          <img className='cartDelete' width={32} height={32} src='/img/delete.svg' alt='delete' />
          </div>

          
          </div>

        <div className='cartBottom'>
          <ul >
            <li className='cartBottomPrice'>
              <span>Итого:</span>
              
              <b>21 000 руб</b>
              
            </li>
            <li className='cartBottomTax' >
              <span>Налог 5%:</span>
              
              <b>1074 руб</b>
            </li>
          </ul>
          <button className='greenButton'>Оформить заказ</button>
        </div>

        </div>
      </div>
    )
}
export default Drawer