import React from "react";
import styled from "styled-components";

const SideBarOption = ({Icon, title, addChannelOption}) => {
    
    const addChannel = () => {
        
    }

    const selectChannel = () => {
        
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
    padding: 15px;
    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    > span {
        margin-right: 2px;
    }
`;