import { MailOutline, Phone, Room } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Image = styled.img`
	width: 50px;
`;
const Button = styled.button`
	width: 150%;
	border: 0;
	text-decoration: none;
	border-radius: 10px;
	cursor: pointer;
	font-size: 17px;
	letter-spacing: 1.5px;
	cursor: pointer;
	text-transform: uppercase;
	padding: 15px;
	font-weight: bold;
	background-size: 300% 100%;
	transition: 0.5s ease-in-out;
	background-size: 200% auto;
	color: white;
	background-image: linear-gradient(
		to right,
		#000046 0%,
		#1cb5e0 51%,
		#000046 100%
	);
	box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.4);
	&:hover {
		background-position: right center;
		color: #fff;
		text-decoration: none;
		box-shadow: 0 0px 30px 0 rgba(65, 132, 234, 1);
	}
	box-sizing: border-box;
`;

const Label = styled.h6`
	font-size: 20px;
	font-weight: bold;
	color: white;
`;

const Container = styled.div`
	text-transform: uppercase;
	display: flex;
	background-color: black;
	color: white;
	padding: 4% 8%;
	justify-content: space-between;
	align-items: center;
	letter-spacing: 1.5px;
	${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

const Desc = styled.p`
	font-size: 17px;
	letter-spacing: 1px;
`;

const Title = styled.h3`
	font-size: 23px;
	font-weight: bold;
	margin-bottom: 15px;
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	justify-content: center;
	align-items: flex-end;
	${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	letter-spacing: 1px;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Link
					style={{
						textDecoration: 'none',
						display: 'flex',
						alignItems: 'center',
						gap: '15px',
					}}
					to="/">
					<Image src="https://i.ibb.co/MSLMYGg/home-4-512.png"></Image>
					<Label>
						SMART <br></br> MOTEL
					</Label>
				</Link>
				<Desc>Made by team EOF - HCMUT K19</Desc>
				<Link to="/about">
					<Button>about us</Button>
				</Link>
			</Left>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: '15px' }} /> 268 Ly Thuong Kiet,
					District 10, Ho Chi Minh City
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: '15px' }} /> +123456789
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '15px' }} />{' '}
					viet.trana4@hcmut.edu.vn
				</ContactItem>
			</Right>
		</Container>
	);
};

export default Footer;
