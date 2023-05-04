import React from 'react'

const RecipeCard= ({recipe}) => {
    const {idMeal,strMeal,strCategory,strMealThumb}=recipe
  return (
    <div className='card'>
        <img  className='img' style={{width:"20%",height:"100px",margin:"auto"}} src={strMealThumb}/>
        <div className='card-body'>
            <span>{strCategory}</span>
            <h3>{strMeal}</h3>
            <a href={'https://www.themealdb.com/meal/'+idMeal} target='_blank'>Ingridient</a>
        </div>
    </div>
  )
}

export default RecipeCard