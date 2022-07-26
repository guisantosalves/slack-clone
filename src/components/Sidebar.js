import React from "react";
import styled from "styled-components";

const SideBar = () => {
    return(
        <SideBarContainer>
            {/* side bar header */}
            <h1>i am the side bar</h1>
        </SideBarContainer>
    )
}

export default SideBar;

const SideBarContainer = styled.div`
        background-color: var(--slack-color);
`;