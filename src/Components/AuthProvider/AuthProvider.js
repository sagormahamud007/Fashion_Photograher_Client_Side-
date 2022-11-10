import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(app)
const auth = getAuth()
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update user
    const handleUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //signIn-User
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logOut-user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //Google-sign 
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // sideEffect
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])


    const AuthInfo = {
        user,
        loading,
        createUser,
        handleUpdate,
        logInUser,
        logOut,
        googleSignIn,
    }

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;