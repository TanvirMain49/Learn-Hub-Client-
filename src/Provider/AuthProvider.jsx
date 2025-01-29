import {
    createUserWithEmailAndPassword,
    deleteUser,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
  import { app } from "../FireBase/Firebase.init";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";
//   import useAxiosPublic from "../Hooks/useAxiosPublic";
//   import axios from "axios";
  
  export const AuthContext = createContext();
  const auth = getAuth(app);
  const AuthProvider = ({ children }) => {
    // State to hold the current authenticated user
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [forgetEmail, setForgetEmail] = useState(null);
    const [watchList, setWatchList] = useState(null);
    const [dark, setDark] = useState(false);
    const axiosPublic = useAxiosPublic();
    // const axiosPublic = useAxiosPublic()
  
    // function to create user
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    // function to logIn with the help of google account
    const googleProvider = new GoogleAuthProvider();
  
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
  
    // update user profile
    const updatePfp = (updateUserProfile) => {
      return updateProfile(auth.currentUser, updateUserProfile);
    };
  
    // function to sign in user
    const logIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser?.email) {
          setUser(currentUser);
          const userInfo = { email: currentUser.email }
          
          axiosPublic.post('/jwt', userInfo)
          .then(res=>{
            if(res.data?.token){
              localStorage.setItem('access-token', res.data.token);
              setLoader(false);
            }
          })
          
        } else {
          setUser(currentUser);
          localStorage.removeItem('access-token');
          setLoader(false);
        }
       
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    // function to log out user
    const signOutUser = () => {
      return signOut(auth);
    };
  
    // forget password
    const forgetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
    };

    // delete user
    const userDelete = (user) =>{
      return deleteUser(user);
    }
    const authInfo = {
      createUser,
      signOutUser,
      updatePfp,
      logIn,
      signInWithGoogle,
      setUser,
      setForgetEmail,
      forgetEmail,
      forgetPassword,
      user,
      loader,
      setWatchList,
      watchList,
      dark,
      setDark,
      setLoader,
      userDelete
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;