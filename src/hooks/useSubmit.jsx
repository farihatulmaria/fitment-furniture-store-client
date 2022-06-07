import axios from "axios";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase";
const useSubmit = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({});
    const [email ,setEmail] = useState('');

    const Login = async data => {
        const email = data.Email;
        setEmail(email);
        const password = data.Password;
        if(email && password){
           await signInWithEmailAndPassword(auth,email,password)
            .then((result) => setUser(result.user))
            .catch((error) => {
                setErrorMessage(error.message);
             });
             
             const {data} = await axios.post('https://fitment-furniture-store.herokuapp.com/login', {email});
             localStorage.setItem('accessToken', data.accessToken);
             navigate('/');
        }
    
    };
    
    const SignedUp = async data => {
        const name = data.Name;
        const email = data.Email;
        setEmail(email);
        const password = data.Password;

        if(email && password){
            createUserWithEmailAndPassword(auth,email,password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                emailVerification();
                updateUserProfile(name);
                console.log(user);
                
            }).catch((error) => {
                setErrorMessage(error.message);
            });

            const {data} = await axios.post('https://fitment-furniture-store.herokuapp.com/login', {email});
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/');
        }
    };

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
        navigate('/');
    }

    const resetPassword = (email) =>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('email sented to reset password');
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const emailVerification = ()=>{
        sendEmailVerification(auth.currentUser)
            .then(result =>{
                console.log('email sented');
            })
    }
    const updateUserProfile = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
              console.log('updated profile');
          }).catch((error) => {
              console.log(error);
          });
    }

    
    return {
        email,
        resetPassword,
        user,
        errorMessage,
        Login,
        SignedUp,
        signInWithGoogle
    }
}

export default useSubmit;