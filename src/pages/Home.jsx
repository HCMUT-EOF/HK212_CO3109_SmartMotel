import * as React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import TenantDisplay from "../components/TenantDisplay";
import Navbar from "../components/Navbar"

const Display = styled.div`
    flex: 3;
    margin: 25px;
    border: 0.1px solid black;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Tenant = () => {
    return (
        <div>
            <Navbar/>
                <Display>    
                <TenantDisplay/>
                </Display>
            <Footer/>
        </div> 
    );
};

export default Tenant;
