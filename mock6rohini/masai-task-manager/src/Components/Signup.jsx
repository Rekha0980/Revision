import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { postUserData } from "../api/api";
import styles from "./styles/Signup.module.css";

export const Signup = () => {
    const [signForm, setSignForm] = useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
        loggedIn:false
    })
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSignForm({ ...signForm, [e.target.name]: e.target.value });
        console.log(signForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let signupObj = {
            email: signForm.email,
            userName: signForm.userName,
            password: signForm.password,
            confirmPassword: signForm.confirmPassword,
            loggedIn : false
        }
        console.log(signupObj)
        if (signupObj.password === signupObj.confirmPassword) {
            setOpen(false);
            postUserData(signupObj)
                .then((res) => {
                    console.log(res);
                    navigate("/");
                    alert("you are registered successfully")
                })
                .catch((err) => {
                    console.log(err);
                })
            setSignForm({
                email: "",
                userName: "",
                password: "",
                confirmPassword: "",
                loggedIn:false
            })
        } else {
            setOpen(true);
        }

    }

    return (
        <div className={styles.signup}>
            <p>Welcome !</p>
            <h2>Sign up to</h2>
            <p className={styles.lorem}>Lorem Ipsum is simply</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" name="email" value={signForm.email} onChange={handleChange} />
                <label>User name</label>
                <input type="name" placeholder="Enter your user name" name="userName" value={signForm.userName} onChange={handleChange} />
                <label>Password</label>
                <input type="password" placeholder="Enter your Password" name="password" value={signForm.password} onChange={handleChange} />
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your Password" name="confirmPassword" value={signForm.confirmPassword} onChange={handleChange} />
                {open ? <label className={styles.error}>confirm password does not match with password</label> : null}
                <input type="submit" value="Register" onChange={handleSubmit} />
                <p className={styles.already}><Link to="/">Already have an Account ?</Link><b> Register</b></p>
            </form>
        </div>
    )
}