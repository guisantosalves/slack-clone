import React, { useRef, useState } from "react";
import styled from "styled-components";

// material ui
import { Button } from "@mui/material";

//firebase
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import db from "../firebase";

// redux
import { useSelector } from "react-redux";

const ChatInput = ({channelName, channelId, chatRef}) => {

    const userFromStore = useSelector((state)=>state.counter.user)

    // mudar o estado nao causa renderização quando mudamos o estado
    // const inputRef = useRef(null)
    
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault() //p revents refresh the page

        if(!channelId){
            return false
        }

        await addDoc(collection(db, `rooms/${channelId}/messages`), {
            message: input,
            Timestamp: serverTimestamp(),
            user: userFromStore.displayName,
            userImage: userFromStore.photoURL
        })

        setInput('')

        // quando envia mensagem ativa esse evento referenciado no component chat
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
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