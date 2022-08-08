import React, { useRef, useState } from "react";
import styled from "styled-components";

// material ui
import { Button } from "@mui/material";

//firebase
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import db from "../firebase";

const ChatInput = ({channelName, channelId}) => {

    // mudar o estado nao causa renderização quando mudamos o estado
    // const inputRef = useRef(null)
    
    const [input, setInput] = useState('')

    console.log(channelId)

    const sendMessage = (e) => {
        e.preventDefault() //p revents refresh the page

        if(!channelId){
            return false
        }

        addDoc(collection(db, `rooms/${channelId}/messages`), {
            message: input,
            Timestamp: serverTimestamp(),
            user: 'guilherme',
            userImage: 'https://64.media.tumblr.com/138e16d905afb26dbd8b65f418acf570/646539a0699d1a68-01/s1280x1920/a0ecb7a7624567f265a570c5284cb673ba621759.jpg'
        })

        setInput('')
    }

    return(
        <ChatInputContainer>
            <form>
                <input 
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder={`Message to ${channelName} chat`}
                />
                <Button hidden type="submit" onClick={(e)=>sendMessage(e)}>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`

    border-radius: 20px;

    >form{
        position: relative;
        display: flex;
        justify-content: center;
    }

    >form>input{
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    /* just click enter and boooom send the message */
    >form>button {
        display: none !important;
    }
`;