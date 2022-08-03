import React from "react";
import styled from "styled-components";

const Chat = () => {
    return (
        <ChatContainer>
            <h2>I am the chat</h2>
            <h2>I am the chat</h2>
            <h2>I am the chat</h2>
            <h2>I am the chat</h2>
            <h2>I am the chat</h2>
            <h2>I am the chat</h2>
        </ChatContainer>
    )
}

export default Chat;

// The flex-grow property specifies how much the item will 
// grow relative to the rest of the flexible items inside the same container.
const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
`;