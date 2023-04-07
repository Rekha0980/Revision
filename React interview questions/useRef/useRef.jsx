// import { useRef } from 'react';

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

import { useRef, useState } from "react"

 export const UseRef=()=>{

const [num,setNum]=useState(0)

const inputone=useRef()
const inputtwo=useRef()

const getNum=()=>{
  console.log("hello")
   inputtwo.current.style.width = "200px";
}
const getText=()=>{
  console.log("hello")
}
  return(
    <div>
      <input type="text" value={num} ref={inputone} onChange={(e)=>setNum(e.target.value)}/>
      <input type="number"  style={{ width: "120px" }} value={num} ref={inputtwo} onChange={(e)=>setNum(e.target.value)}/>
      <button onClick={()=>getNum()}>rupee</button>
      <button onClick={()=>getText()}>dollar</button>
    </div>
  )
}