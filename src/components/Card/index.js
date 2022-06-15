
import React from "react";
const Card = ({imageUrl,title,price,onPlus,id,onFavorite,favorited =false}) =>{
 

const [isAdded,setIsAdded] = React.useState(false);
const [isFavorite,setIsFavorite] =React.useState(favorited)
const handleOnClick = () =>{
  setIsAdded(!isAdded)
  onPlus({title,imageUrl,price,id,isAdded});
  console.log()
}
const onClickFavorite = () =>{
  setIsFavorite(!isFavorite);
  onFavorite({title,imageUrl,price,id})
  console.log("favorite", id)
}


    return(
        <div className='card'>
              <div onClick={onClickFavorite }>
                <img className='img-heart' src={isFavorite? "/img/heart.svg": '/img/heartUnlike.svg'} alt='heart' />
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