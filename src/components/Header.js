import React from "react";
import styled from "styled-components";

//material icons
import { Avatar } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { HelpOutline } from "@mui/icons-material";

//redux
import { useSelector } from "react-redux";

const Header = () =>{

    const userFromStore = useSelector((state) => state.counter.user)
    
    return(
        <HeaderContainer>
            {/* the header is separeted in 3 parts, left/search/right */}
            <HeaderLeft>
                {/* // set photo from react store */}
                <Avatar src={userFromStore.photoURL} referrerPolicy="no-referrer"/>
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>
                <Search />
                <input type="text" placeholder="search anything"/>
            </HeaderSearch>

            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    /* it will be fixed at the top of the page */
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    /* inherint from the father */
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root{
        /* fill everything */
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`

    cursor: pointer;
    
    :hover{
        opacity: 0.8;
    }

`;

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    border: 1px solid gray;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }

`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;  