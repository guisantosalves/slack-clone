import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

// firebase
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

// redux
import { useDispatch } from "react-redux";
import { login } from "../features/appSlice"

const Login = () => {

    const dispatch = useDispatch();
    
    // login with google account
    const signIn = (e) => {
        e.preventDefault()
        
        signInWithPopup(auth, provider).then((result) => {
            console.log("everything ok")

            console.log(result)
            if(result){
                //doing the dispatch from the google user
                dispatch(login({
                    user: result.user
                }))
            }   

        }).catch((err)=>{
            alert(err.message)
            alert("you need to enter with the google account")
        })
    }

    return(
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://img.icons8.com/color/344/slack-new.png" alt="slack icon"/>
                <h1>Sign in to the slack clone</h1>
                <p>guilh.dev.com</p>
                <Button 
                    onClick={(e) => signIn(e)} 
                    style={{marginTop: 10}}
                >
                    Sign in with google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #f8f8f8;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    >button {
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;