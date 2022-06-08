
import React from "react";
const Card = ({onClickFavorite,imageUrl,title,price,onPlus,id}) =>{
 

const [isAdded,setIsAdded] = React.useState(false);
const handleOnClick = () =>{
  setIsAdded(!isAdded)
  onPlus({title,imageUrl,price,id});
  console.log()
}
    return(
        <div className='card'>
              <div onClick={onClickFavorite}>
                <img className='img-heart' src='/img/heartUnlike.svg' alt='heart' />
              </div>

              <img width={133} height={112}  src={imageUrl} alt='sneaker' />
              <h5>{title}</h5>
              <div className='cardBottom'>
                <div className='cardInfo'>
                  <span>Цена:</span>

                  <b>{price}<span> руб</span></b>
                  </div>
                  
                    <img className="img-button" width={11} height={11} src={isAdded?"/img/checked.svg" : "/img/plus.svg"} alt='plus' onClick={handleOnClick} />
                
              </div>
              </div>
    )
}
export default Card