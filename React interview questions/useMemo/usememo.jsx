import "./styles.css";
import { useMemo, useState } from "react";

export default function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);
  // it  is rendering when add and sub
  //  chnages but we want only when add changes
  // const multiply=()=>{
  //   console.log("method")
  //   return add*10

  // }
  const multiply = useMemo(
    function mult() {
      console.log("usememo");
      return add * 10;
    },
    [add]
  );
  return (
    <div className="App">
      <h1>Usememo</h1>
      <h3>{multiply}</h3>
      <button onClick={() => setAdd(add + 1)}>add</button>
      <span>{add}</span>
      <br /> <button onClick={() => setSub(sub - 1)}>sub</button>
      <span>{sub}</span>
    </div>
  );
}
