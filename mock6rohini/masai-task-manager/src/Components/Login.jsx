import { useContext } from "react";
import { nanoid } from 'nanoid'
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addLoginData, getUser } from "../api/api";
import { AuthContext } from "../Context/AuthContext";
import styles from "./styles/Login.module.css";
export const Login = () => {
    const [loginForm, setLoginForm] = useState({
        userName: "",
        password: "",
    })
    const [open, setOpen] = useState(false);
    const [registerData, setRegisterData] = useState([]);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    // const { loginUser } = useContext(AuthContext);

    useEffect(() => {
        handlegetUser()
    }, [])

    const handlegetUser = async () => {
        return await getUser()
            .then((res) => {
                console.log(res);
                setRegisterData(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let loginObj = {
            userName: loginForm.userName,
            password: loginForm.password,
        }
        let count = 0;
        registerData?.map((el) => {
            if (loginObj.userName == el.userName && loginObj.password == el.password) {
                setOpen(false);
                count++;
                addLoginData(loginObj)
                    .then((res) => {
                        console.log("user added", res.id);
                        navigate(`/addtask/${res.id}`)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                // loginUser();
                alert("you are login successfully");
            }
        })
        if (count == 0) {
            setOpen(true);
            alert("user not registered ! please signup")
        }
        setLoginForm({
            userName: "",
            password: "",
        })
    }

    return (
        <div className={styles.signup}>
            <p>Welcome !</p>
            <h2>Sign in to</h2>
            <p className={styles.lorem}>Lorem Ipsum is simply</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>User name</label>
                <input type="name" placeholder="Enter your user name" name="userName" value={loginForm.userName} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" placeholder="Enter your Password" name="password" value={loginForm.password} onChange={handleChange} required autoComplete="" />
                <div className={styles.flexing}>
                    <span className={styles.check}>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </span>
                    <div>Forgot Password ?</div>
                </div>
                {open ? <label className={styles.error}>user not registered</label> : null}
                <input type="submit" value="Login" onChange={handleSubmit} />
                <p className={styles.already}>Do you have an Account ?<Link to="/signup"><b> Register</b></Link></p>
            </form>
        </div>
    )
}