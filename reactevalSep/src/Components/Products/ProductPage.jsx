import React, { useEffect, useState } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

function ProductPage() {
const [products,setProducts]=useState([])
const[totalPages,setTotalPages]=useState(0)
const[page,setPage]=useState(1)
const[sortBy,setSortBy]=useState("asc")
const[limit,setLimit]=useState(5)
const[error,setError]=useState(false)
useEffect(()=>{
  getProducts({
    page,sortBy,limit
  })
  .then(res=>{
    setProducts(res.data)
    setTotalPages(res.totalPages)
  })
  .catch(err=>{
    setError(true)
  })
},[page,sortBy,limit])

  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button data-testid="low-to-high" disabled={sortBy==="asc"} onClick={()=>setSortBy("asc")}>Sort low to high</button>
      <button data-testid="high-to-low" disabled={sortBy==="desc"} onClick={()=>setSortBy("desc")}>Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select"
        value={limit}
        onChange={e=>setLimit(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>

        </select>
      </div>
      <Pagination current={page} totalPage={totalPages} onChange={page=>setPage(page)} />
      {/* map products */}
      <ProductList products={products}/>
    </div>
  );
}

export default ProductPage;
