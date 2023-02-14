import {Routes, Route} from "react-router-dom";
import { AddTask } from "../Components/AddTask";
import { Login } from "../Components/Login";
import PrivateRoutes from "../Components/PrivateRoutes";
import { Signup } from "../Components/Signup";
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/addtask/:loggeduser_id" element={<AddTask/>}/>
        </Routes>
    )
}