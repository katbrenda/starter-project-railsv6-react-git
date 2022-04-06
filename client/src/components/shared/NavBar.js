import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const NavBar =()=>{
    const auth = useContext(AuthContext)


    const renderRightNav = ()=>{
        if(auth.user){
            return <Link to='/'>Logout'TODO'</Link>
        }
        return<>
         <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </>
    }
     return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
        <Link to='/'>Home</Link>
        <Link to='/'>HomeClass</Link>
        </div>
        <div>
            {renderRightNav()}
        </div>
       
    </div>
    )
}

export default NavBar