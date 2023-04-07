import "./styles.css";
import {useEffect,useState} from "react"
import axios from "axios"

export default function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
     .then((r) => setData(r.data));
  }, []);
  return (
    <div className="App">
        {data.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    
    </div>
  );
}