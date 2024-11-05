import React from 'react'
import'./Card.scss'


const Card = ({name = "🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️", image= "/soon1.gif"}) => {
  return (
<>
      <div className="card">
         <img src={image} alt="" />
         <h1>{name}</h1>
         <p>69 отзывов</p>
         <button>Купить</button>    
   </div>
</>



  )
}

export default Card