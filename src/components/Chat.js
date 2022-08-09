import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

// material UI
import { StarBorderOutlined } from "@mui/icons-material";
import { InfoOutlined } from "@mui/icons-material";

// using redux
import { useSelector } from "react-redux";

// firebase
import {
  onSnapshot,
  query,
  collection,
  orderBy,
  getDoc,
  doc
} from "firebase/firestore";
import db from "../firebase";

const Chat = () => {
  // To get data from redux store,
  // you need to use useSelector -> pass an callback function like bellow
  const idFromStore = useSelector((state) => state.counter.roomId);
  const [nameRoom, setNameRoom] = useState('')
  const [messages, setMessages] = useState([])
  const chatRef = useRef(null)

  // requesting the data from database
  useEffect(() => {
    if (idFromStore) {

      // GETTING A ROOM DOC BY ID
      //to use getDoc is necessary needed be in an async function
      const getDocById = async () => {

        const docSnapshot = await getDoc(doc(db, "rooms", `${idFromStore}`))

        if (docSnapshot.exists()) {

          setNameRoom(docSnapshot.data().name)

        } else {
          console.log("anything went wrong")
        }

      }

      getDocById()

      // get the rooms messages
      const getAllMessages = async () => {
        const q = query(collection(db, `rooms/${idFromStore}/messages`), orderBy("Timestamp", "asc"))
          onSnapshot(q, (queryResult) => {
            setMessages(queryResult.docs.map((item, index) => ({
              id: item.id,
              data: item.data()
            })))
          })
      }

      getAllMessages()
    } else {
      console.log("escolhe alguma sala")
    }

  }, [idFromStore])

  // scroll all the messages
  useEffect(()=>{
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  }, [messages, idFromStore])

  return (
    <ChatContainer>
      {idFromStore && messages && (
          <>
          {/* Header chat */}
          <Header>
            <HeaderLeft>
              <h4>
                <strong>{`#${nameRoom}`}</strong>
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
            {messages.map((item, index) => (
                <Messages
                  message={item?.data.message}
                  timestamp={item?.data.Timestamp}
                  user={item?.data.user}
                  userImage={item?.data.userImage}
                />
            ))}
            <ChatBotom ref={chatRef}/>
          </ChatMessages>

          {/* input to chats */}
          <ChatInput 
            channelId={idFromStore} 
            channelName={nameRoom}
            chatRef={chatRef}
          />
        </>
      )}
    </ChatContainer>
  );
};

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
  align-items: center;

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

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div``;

const ChatBotom = styled.div`
  padding-bottom: 200px;
`;