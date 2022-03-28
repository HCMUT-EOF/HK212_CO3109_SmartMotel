import {
    MailOutline,
    Phone,
    Room
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Label = styled.h6`
	color: black;
	font-size: 20px;
	font-weight: bold;
`;

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

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 30px;
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

const MenuItem = styled.div`
	color: white;
	font-size: 15px;
	cursor: pointer;
	margin-left: 50px;
	font-weight: bold;

	${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const AboutButton = styled.button`
	width: 100%;
	border: 0;
	text-decoration: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 15px;
	letter-spacing: 2px;
	padding: 12px;
	font-weight: bold;
	background-size: 300% 100%;
	border-radius: 50px;
	transition: 0.6s ease-in-out;
	background-size: 200% auto;
	color: white;
	background-image: linear-gradient(
		to left,
		#ff512f 0%,
		#dd2476 51%,
		#ff512f 100%
	);
	&:hover {
		background-position: right center;
		color: #fff;
		text-decoration: none;
		box-shadow: 0 0px 20px rgba(220, 80, 57, 1);
	}
	box-sizing: border-box;
`;

const Footer = () => {
  return (
      <Container>
          <Left>
                <Label>
                    SMART MOTEL
                </Label>
                <Desc>
                    Made by team EOF - HCMUT K19
                </Desc>
                <Link to="/about">
                    <MenuItem>
                        <AboutButton>About Us</AboutButton>
                    </MenuItem>
                </Link>
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