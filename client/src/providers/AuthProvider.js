import React, { useState } from 'react'




import axios from 'axios'

import { useNavigate } from 'react-router-dom'



export const AuthContext = React.createContext()


export const AuthConsumer = AuthContext.Consumer


const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    
    
    const [user, setUser] = useState(null)

   
   
    const handleRegister = async (user)=>{
        try{
            let res = await axios.post('/api/auth',user)
            setUser(res.data.data)
            navigate('/')

        }catch(err){
            alert('error')
            console.log(err)
        }
    }




    return (
        <AuthContext.Provider value={{user, handleRegister}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider