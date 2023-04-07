import Child from "./child";
import "./styles.css";
import { useMemo, useState } from "react";


export default function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  // when we are not using memo in child then when add value 
  // change then internal components is also re render 
  // so to aviod this we wrap that component with memo 
  // so when prop change then  only it re-render
 
  return (
    <div className="App">
      <h1>Usememo</h1>
      <Child sub={sub}/>
      <button onClick={() => setAdd(add + 1)}>add</button>
      <span>{add}</span><br/>
      <button onClick={() => setSub(sub -1)}>sub</button>
     
    </div>
  );
}