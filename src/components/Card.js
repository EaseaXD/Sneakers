const Card = () =>{
    return(
        <div className='card'>
              <div>
                <img className='img-heart' src='/img/heartUnlike.svg' alt='heart' />
              </div>

              <img width={133} height={112}  src='img/sneakers/1.jpg' alt='sneaker' />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className='cardBottom'>
                <div className='cardInfo'>
                  <span>Цена:</span>

                  <b>12312<span> руб</span></b>
                  </div>
                  <button className='button'>
                    <img width={11} height={11} src='/img/vector.svg' alt='plus' />
                  </button>
              </div>
              </div>
    )
}
export default Card