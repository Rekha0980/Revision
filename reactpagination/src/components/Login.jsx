import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    //console.log(email)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let i = 0;
        try {
            let res = await fetch("https://lazy-gold-newt-slip.cyclic.app/users")
            let data = await res.json()
            console.log(data)
            data.map((el) => {
                //console.log(el.password)
                if (el.email === email && el.password === password) {
                    alert("login successful")
                }
                else {
                    i++
                }
            })
            if (i == data.length) {
                alert("User not register")
            }

        }
        catch (err) {
            console.log(err)
            alert("login failed")
        }



    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="password" value={password} name="password" onChange={(e) => setPass(e.target.avlue)} />
                <div>{error}</div>
                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login