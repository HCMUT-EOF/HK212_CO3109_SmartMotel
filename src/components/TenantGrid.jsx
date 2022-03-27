import * as React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import TenantDisplay from "./TenantDisplay";

const Container = styled.div`
    display: flex;
`;

const Display = styled.div`
    flex: 3;
    margin-left: 30px;
    margin-right: 50px;
    border: 0.1px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const SideBox = styled.span`
    border: 1px solid black;
    border-radius: 20px;
    padding: 40px;
    height: 60px;
    margin: 20px;
    position: flex;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const TenantGrid = ({value}) => {
    const showTenantList = (
        <Container>
            <Display>    
                <TenantDisplay value = {value}/>
            </Display>
        </Container>
    );

    return (
        <Container>
            {showTenantList}
            <SideBox style={{backgroundColor:"#7D34DB", color:"#FFFFFF"}}>
                Washing Machine page
            </SideBox>
            <SideBox style={{backgroundColor:"#7C6699", color:"#FFFFFF"}}>
                All camera page
            </SideBox>
        </Container>
    );
};

export default TenantGrid;
