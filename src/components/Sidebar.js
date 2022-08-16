import React from "react";
import styled from "styled-components";
import SideBarOption from "./SideBarOptions";

// material UI icons
import { Create } from "@mui/icons-material";
import { FiberManualRecord } from "@mui/icons-material";
import { InsertComment } from "@mui/icons-material";
import { Inbox } from "@mui/icons-material";
import { Drafts } from "@mui/icons-material";
import { BookmarkBorder } from "@mui/icons-material";
import { PeopleAlt } from "@mui/icons-material";
import { Apps } from "@mui/icons-material";
import { FileCopy } from "@mui/icons-material";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

//firebase
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../firebase"
import { useCollection } from 'react-firebase-hooks/firestore';

// redux
import { useSelector } from "react-redux";

const SideBar = () => {
    const [snapshot, loading, error] = useCollection(collection(db, 'rooms'),
    {
        snapshotListenOptions: {includeMetadataChanges: true}
    });

    const userFromStore = useSelector((state)=>state.counter.user)

    return(
        <SideBarContainer>
            {/* side bar header */}
            <SideBarHeader>
                <SideBarInfo>
                    <h2>{userFromStore.displayName}</h2>
                    <h3>
                        <FiberManualRecord/>
                        {userFromStore.email}
                    </h3>
                </SideBarInfo>
                <Create />
            </SideBarHeader>

            {/* sidebar options */}
            <SideBarOption Icon={InsertComment} title="Threads"/>
            <SideBarOption Icon={Inbox} title="Mentions & reactions"/>
            <SideBarOption Icon={Drafts} title="Saved Items"/>
            <SideBarOption Icon={BookmarkBorder} title="Channel browser"/>
            <SideBarOption Icon={PeopleAlt} title="People & user groups"/>
            <SideBarOption Icon={Apps} title="Apps"/>
            <SideBarOption Icon={FileCopy} title="File Browser"/>
            <SideBarOption Icon={ExpandLess} title="Show less"/>

            {/* channels */}
            <hr/>
            <SideBarOption Icon={ExpandMore} title="Channels"/>
            <hr/>

            {/* add */}
            <SideBarOption Icon={Add} title="Add Channels" addChannelOption={true}/>

            {/* redering rooms */}
            {snapshot?.docs.map((item, index) => (
                <SideBarOption 
                    key={item.id}
                    id={item.id}
                    addChannelOption={false}
                    title={item.data().name}
                />    
            ))}
            
        </SideBarContainer>
    )
}

export default SideBar;

const SideBarContainer = styled.div`
    flex: 0.3;
    background-color: var(--slack-color);
    color: white;
    /* amount of width the side-bar will use. */
    max-width: 260px;
    margin-top: 60px;
    border: 1px solid #49274b;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SideBarHeader = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SideBarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;