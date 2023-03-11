import { useEffect, useState } from "react"

 export const Timer=()=>{
    const[count,setCount]=useState(0)
    useEffect(()=>{
const id=setInterval(()=>{
    setCount(count+1)
},1000)
return ()=>clearInterval(id)
    },[count])
    return(
        <h1>Timer :{count}</h1>
    )
}