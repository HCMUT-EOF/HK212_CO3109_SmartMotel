import { Button } from "@material-ui/core";
import {
    MailOutline,
    Phone,
    Room
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 10px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
  return (
      <Container>
          <Left>
                <Logo>Smart Motel</Logo>
                <Desc>
                    Made by team EOF - HCMUT K19
                </Desc>
                <Button onClick = {() => {window.scrollTo(0, 0);}}>
                    Back to Top page
                </Button>
          </Left>
          <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 268 Ly Thuong Kiet,
                    District 10, Ho Chi Minh City
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +123456789
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />{" "}
                    viet.trana4@hcmut.edu.vn
                </ContactItem>
          </Right>
      </Container>
  );
};

export default Footer;