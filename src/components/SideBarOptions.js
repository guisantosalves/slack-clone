import React from "react";
import styled from "styled-components";

// using redux
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

// firebase
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../firebase"
import { useCollection } from 'react-firebase-hooks/firestore';

const SideBarOption = ({Icon, title, addChannelOption, id}) => {

    const dispatch = useDispatch();

    const addChannel = async () => {
        const channelName = prompt('Please enter your channel name: ')
        
        if(channelName){
            try{
                await addDoc(collection(db, 'rooms'), {
                    name: channelName,
                    created: Timestamp.now()
                })
            }catch(err){
                alert(err)
            }
        }
    }

    // dispatch is like a gun which allows us to send data to data layer (global store)
    const selectChannel = () => {
        if(id){
            // doing a dispatch in roomId through the action enterRoom
            dispatch(enterRoom({
                // throw to the state in my store
                roomId: id
            }))
        }
    }

    return(
        <SideBarOptionContainer 
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{padding: "10px"}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SideBarOptionChannels>
                    <span>#</span>
                    <h3>{title}</h3>
                </SideBarOptionChannels>
            )}
        </SideBarOptionContainer>
    )
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3{
        font-weight: 500;
    }

    > span {
        padding: 15px;
    }
`;

const SideBarOptionChannels = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    padding-left: 2px;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    > span {
        padding: 15px;
    }
`;