import "./styles.css";
import {useEffect, useState} from"react"

import axios from "axios"

export default function App() {
 
  const [post, setD] = useState([]);

  useEffect(() => {
    const getData=async()=>{
      try{
        let data=await axios.get("https://fakestoreapi.com/products")
        setD(data.data)
 }
      catch(err){
console.log(err)
      }
    }
    getData()
 
    }, []);
    console.log(post)
  return (
    <div className="App">
      {
        post.map((el)=>(
          <div>
            <p>{el.title}</p>
            </div>
        ))
      }
    </div>
  );
}
