





import React from 'react'


export const AuthContext = React.createContext()


export const AuthConsumer = AuthContext.Consumer


const AuthProvider = ({children})=>{
    return (
        <AuthContext.Provider value={{user:{email:'test@test.com'}}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider