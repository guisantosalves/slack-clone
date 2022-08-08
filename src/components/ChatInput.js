import { Button } from "@mui/material";
import React, { useRef } from "react";
import styled from "styled-components";

const ChatInput = ({channelName, channelId}) => {

    // mudar o estado nao causa renderização quando mudamos o estado
    const inputRef = useRef(null)

    const sendMessage = (e) => {
        e.preventDefault() //prevents refresh the page

        if(channelId){
            
        }
        console.log("sending...")
    }

    return(
        <ChatInputContainer>
            <form>
                <input placeholder={`Message to ${channelName} chat`}/>
                <Button hidden type="submit" onClick={sendMessage}>
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