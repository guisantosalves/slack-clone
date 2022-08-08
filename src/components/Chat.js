import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";

// material UI
import { StarBorderOutlined } from "@mui/icons-material";
import { InfoOutlined } from "@mui/icons-material";
import { style } from "@mui/system";

// using redux
// import { useSelector } from "react-redux";
// import { selectRoomId } from "../features/appSlice";

const Chat = () => {

    // const roomId = useSelector(selectRoomId)
    return (
        <ChatContainer>
            <>
            {/* Header chat */}
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#Room name</strong>
                        </h4>
                        <StarBorderOutlined />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlined />
                            Details
                        </p>
                    </HeaderRight>
                </Header>

                {/* chats */}
                <ChatMessages>
                
                </ChatMessages>

                {/* input to chats */}
                <ChatInput roomId={2} channelName={"guizaodozap"}/>
            </>
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
    margin-top: 60px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    display: flex;

    > h4 {
        display: flex;
        text-transform: lowercase;
    }

    > .MuiSvgIcon-root {
        margin-left: 10px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div``;