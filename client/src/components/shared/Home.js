import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Home = ()=>{
    let auth = useContext(AuthContext)
    if(!auth.user){
        return <p>Should not be able to come here. Redirect to log in</p>
    }
    return (
        <div>
            <h1>Home</h1>
            <p>Hello {auth.user.email}</p>
            <p>{JSON.stringify(auth)}</p>
        </div>
    )
}

export default Home