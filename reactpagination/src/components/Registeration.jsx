import { useState } from "react"
import {useNavigate} from"react-router-dom"

const Register=()=>{
    const[error,setError]=useState("")

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({...user,[name]:value})
        }
        //console.log(user)

        const Checkvalidation=(e)=>{
            const confpass=e.target.value
            if(user.password!=confpass){
                setError("conform password should be mach")
            }
            else{
                setError("")
            }
            console.log(confpass)

        }

    const handleSubmit=(e)=>{
        e.preventDefault()

        fetch("https://lazy-gold-newt-slip.cyclic.app/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("data posted", res)
            })
            .catch((err) => console.log(err))

       
      }
    return(
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" value={user.email} name="email" onChange={handleChange}/>
            <input type="text" placeholder="username" value={user.username} name="username" onChange={handleChange}/>
            <input type="text" placeholder="password"value={user.password} name="password" onChange={handleChange}/>
            <input type="text" placeholder="conform password"  onChange={(e)=>Checkvalidation(e)}/>
           <div>{error}</div>
            <button type="submit">Register</button>
            </form>
           
        </div>
    )
}

export default Register