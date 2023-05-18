import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    const updateProfileNamePhoto = (user, name, photo) =>{
        return updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            // console.log(loggedUser);
            setUser(loggedUser);
        })

        return () => {
            return unsubscribe
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        signInGoogle,
        updateProfileNamePhoto,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;