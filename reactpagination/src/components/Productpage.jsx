import { useEffect, useState } from "react";

const getProducts = ({ page = 1,limit = 5, sortBy = "asc"}) => {
    return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&orderBy=${sortBy}&limit=${limit}`)
        .then(res => (res.json()))
};


const Products = () => {
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [sortBy, setSortBy] = useState("asc")
    const [limit, setLimit] = useState(5)
    useEffect(() => {
        getProducts({
            page, sortBy, limit
        })
            .then(res => {
                setProducts(res.data)
                setTotalPages(res.totalPages)
            })
            .catch(err => {
                console.log(err)
            })
    }, [page, sortBy, limit])
    return (
        <div>
             <button disabled={sortBy==="asc"} onClick={()=>setSortBy("asc")}>Sort low to high</button>
      <button  disabled={sortBy==="desc"} onClick={()=>setSortBy("desc")}>Sort high to low</button>


      <label>Per page</label>
        <select 
        value={limit}
        onChange={e=>setLimit(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>PREV</button>
            <button>{page}</button>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>NEXT</button>
            <div>Total Pages:  <b >{totalPages}</b></div>;
            <div>
                    {products.map(el => {
                        return <div key={el.id} >
                        <img src={el.image} />
                        <h3 >{el.title}</h3>
                        <p>{"₹"+el.price}</p>
                    </div>
                    })}
                </div>
           
        </div>
    )
}

export default Products