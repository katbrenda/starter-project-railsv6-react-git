import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

class HomeClass extends React.Component {
    // auth = useContext(AuthContext)
    render(){
       return (
       <div>
           <h1>Home</h1>
           {/* <p>hello {this.auth.user.email}</p>
           <p>{JSON.stringify(auth)}</p> */}
       </div>
       );
    }
    
}

export default HomeClass