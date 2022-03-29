import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Home = ()=>{
    let auth = useContext(AuthContext)
    return (
        <div>
            <h1>HomeClass</h1>
            <p>Hello {auth.user.email}</p>
            <p>{JSON.stringify(auth)}</p>
        </div>
    )
}

export default Home