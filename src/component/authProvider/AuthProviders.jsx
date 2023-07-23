import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebse.config';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();
const githubAuth = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = async (name, image_url) => {
        if (!auth.currentUser) {
            throw new Error('User not authenticated.');
        }

        try {
         
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image_url,
            });

            
            const db = getFirestore(app);
            const userDocRef = doc(db, 'users', auth.currentUser.uid);
            await updateDoc(userDocRef, {
                name: name,
                email: auth.currentUser.email
            });

            console.log('Profile updated successfully.');
        } catch (error) {
            console.error('Error updating profile:', error.message);
            throw error;
        }
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuth);
    }
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubAuth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setLoading(false);
            setUser(loggedUser);
        });

        return () => {
            return unsubscribe;
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        googleSignIn,
        githubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
