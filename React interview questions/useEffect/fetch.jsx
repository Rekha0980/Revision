import { useEffect, useState } from "react";

function ProductPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=> res.json())
    .then((res)=>setData(res))
    }, []);
 
  return (
    <div>
      <h1>Products</h1>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>More details</th>
        </tr>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
              
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default ProductPage;