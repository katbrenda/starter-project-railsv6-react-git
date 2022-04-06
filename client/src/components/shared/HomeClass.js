import React, { useContext } from "react"
import { AuthConsumer, AuthContext } from "../../providers/AuthProvider";

class HomeClass extends React.Component {
    render(){
       return (
       <div>
           <h1>Home Class</h1>
           <p>hello {this.props.user.email}</p>
           <p>{JSON.stringify(this.props)}</p>
       </div>
       );
    }
}

const ConnectedHomeClass = ()=>{
    return(
        <AuthConsumer>
        { value => <HomeClass {...value} />}
        </AuthConsumer>
    )

}
export default ConnectedHomeClass