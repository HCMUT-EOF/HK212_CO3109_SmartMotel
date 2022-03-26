import * as React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Products from "./Products";

const Container = styled.div`
    height: 80%;
    width: 95%;
    display: flex;
    flex-direction: row;
    padding: 40px;
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

const ProductDisplay = ({value}) => {
    const showProductList = (
        <Container>
            <Display>    
                <Products value = {value}/>
            </Display>
        </Container>
    );

    return (
        <div>
            {showProductList}
        </div>
    );
};

export default ProductDisplay;
