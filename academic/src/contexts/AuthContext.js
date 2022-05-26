import { onAuthStateChanged, signInWithPopup } from "firebase/auth"
import React, { useContext, useEffect, useState } from "react"
import { auth, provider } from "../services/firebase-config"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider ({children}) {
    const [user, setUser] = useState()

    async function signup() {
        const result = await signInWithPopup(auth, provider)
        if(result.user) {
            const {displayName, photoURL, uid, email} = result.user
            
            if(!displayName && !photoURL) {
                throw new Error("Faltando informações da conta no Google")
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
                email: email
            })
        }
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user) {
                const {displayName, photoURL, uid, email} = user

                if(!displayName && !photoURL) {
                    throw new Error("Faltando informações da conta no Google")
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL,
                    email: email
                })
            }
            
            
        })
        
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={{user, signup}}>
            {children}
        </AuthContext.Provider>
    )
}