import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Register = ()=>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    // const[confirmPassword, setconfirmPassword] = useState('')
    const auth = useContext(AuthContext)

   
    const handleSubmit = (e)=>{
        e.preventDefault()


        
        auth.handleRegister({email, password})
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <p>email</p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p>password</p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register