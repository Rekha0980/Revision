import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import RecipeCard from './Search.jsx/RecipeCart';
import Searchar from './Search.jsx/Searchar';


const apiuRL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {

  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [recipe, setRecipe] = useState([])

  const serachquery = async () => {
    setLoading(true)
    const url = apiuRL + query
    const res = await fetch(url)
    const data = await res.json();
    //console.log(data)
    setRecipe(data.meals)
    setLoading(false)
  }
  //console.log(recipe)
  useEffect(() => {
    serachquery()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    serachquery()
  }
  //console.log("jkl",query)
  return (
    <div className="App">
   
      <Searchar value={query} onChnage={e => setQuery(e.target.value)} handleSubmit={handleSubmit} />
      {recipe ? recipe.map((el) => (
        <RecipeCard key={el.idMeal} recipe={el} />
      )) : "no recipe"}

    </div>
  );
}

export default App;
