import React from "react";
import styled from "styled-components";

const SideBarOption = ({Icon, title}) => {
    return(
        <SideBarOptionContainer>
            <Icon />
            <p>{title}</p>
        </SideBarOptionContainer>
    )
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`

`;