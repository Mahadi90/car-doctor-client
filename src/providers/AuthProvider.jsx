import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const craeteUSer = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
         return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            console.log('From onAuthstatechaged', currentuser)
            setLoading(false)
            if(currentuser && currentuser.email){

                const loggedUser = {
                    email : currentuser.email,
                  }
                
        fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(loggedUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            localStorage.setItem('car-access-token', data.token)
          })
            }else{
                localStorage.removeItem('car-access-token')
            }
        });
        return () => {
            return unsubscribe;
        }
    },[])

   const authInfo = {
     user,
     loading,
     craeteUSer,
     googleSignIn,
     logIn,
     logOut
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;