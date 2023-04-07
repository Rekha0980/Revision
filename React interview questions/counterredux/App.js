import "./styles.css";
import {useDispatch, useSelector } from"react-redux"
import { decrement,increment } from "./Redux/action";

export default function App() {
  const count=useSelector((state)=>state.count)
  console.log(count)
  const disptach=useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>disptach(increment())}>add</button>
      <button onClick={()=>disptach(decrement())}>sub</button>
    </div>
  );
}
