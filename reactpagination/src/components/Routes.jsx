import { Route, Routes } from "react-router-dom"
import Add from "./Add"
import Login from "./Login"
import Register from "./Registeration"

const AllRoutes=()=>{
    return(
        <Routes>
             <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/add" element={<Add/>}/>
        </Routes>
    )
}
export default AllRoutes