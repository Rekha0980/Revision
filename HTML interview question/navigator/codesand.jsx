// import "./styles.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// export default function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => setData(res.data));
//   }, []);
//   return (
//     <div className="App">
//       {data.map((el) => (
//         <div key={el.id}>{el.title}</div>
//       ))}
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
