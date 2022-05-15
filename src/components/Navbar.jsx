import styled, { keyframes } from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
	height: 100%;
	${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
	background-color: black;
	padding: 15px 5%;
	display: flex;
	letter-spacing: 1.5px;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '10px 0px' })}
`;
const InviLabel = styled.div`
	color: white;
	letter-spacing: 1.5px;
	font-size: 15px;
	font-weight: bold;
	display: none;
`;
const Left = styled.div`
	width: auto;
	cursor: pointer;
`;

const Label = styled.h6`
	color: white;
	font-size: 18px;
	font-weight: bold;
`;

const Image = styled.img`
	width: 40px;
`;

const NotiIcon = styled.div`
	width: 30px;
	height: 30px;
	background: url('https://i.ibb.co/NCZbhL1/icons8-notification-100.png');
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
	box-sizing: border-box;
`;

const DomeIcon = styled.div`
	width: 35px;
	height: 35px;
	background: url('https://i.ibb.co/s3Bfwtd/icons8-dome-camera-100.png');
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
	box-sizing: border-box;
`;
const PeopleIcon = styled.div`
	width: 40px;
	height: 40px;
	background: url('https://i.ibb.co/hLmXpnn/icons8-queue-100.png');
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
	box-sizing: border-box;
`;

const DoorIcon = styled.div`
	width: 30px;
	height: 30px;
	background: url('https://i.ibb.co/bKmJ0pk/icons8-door-90.png');
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
`;
const WashingIcon = styled.div`
	width: 35px;
	height: 35px;
	background: url('https://i.ibb.co/mqbY5Yw/icons8-washing-machine-100.png');
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
`;
const WrapIcon = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
	text-align: center;
	overflow: hidden;
	transition: all 0.3s ease-in-out;
	white-space: nowrap;
	&:hover {
		background: white;
		width: 230px;
		border-radius: 50px;
	}
	&:hover ${NotiIcon} {
		background: url('https://media0.giphy.com/media/Dc4lbpaJiHoyYbWoU5/giphy.gif?cid=790b76117f7bbccc77dbe054e6a46dcc9b5f0657d4ffbfec&rid=giphy.gif&ct=g');
		background-size: cover;
		width: 30px;
		height: 30px;
	}
	&:hover ${InviLabel} {
		color: black;
		display: block;
	}
	&:hover ${DomeIcon} {
		background: url('https://img.icons8.com/ios-filled/100/000000/dome-camera.png');
		background-size: cover;
	}
	&:hover ${DoorIcon} {
		background: url('https://img.icons8.com/ios-filled/100/000000/door.png');
		background-size: cover;
	}
	&:hover ${PeopleIcon} {
		background: url('https://img.icons8.com/ios-filled/100/000000/queue.png');
		background-size: cover;
	}
	&:hover ${WashingIcon} {
		background: url('https://img.icons8.com/ios-filled/50/000000/washing-machine.png');
		background-size: cover;
	}
`;
const SignInButton = styled.button`
	width: 100%;
	border: 0;
	text-decoration: none;
	border-radius: 5px;
	font-size: 15px;
	letter-spacing: 1.5px;
	cursor: pointer;
	text-transform: uppercase;
	padding: 12px;
	font-weight: bold;
	background-size: 300% 100%;
	border-radius: 50px;
	transition: 0.5s ease-in-out;
	background-size: 200% auto;
	color: white;
	background-image: linear-gradient(
		to right,
		#000046 0%,
		#1cb5e0 51%,
		#000046 100%
	);
	&:hover {
		background-position: right center;
		color: #fff;
		text-decoration: none;
		box-shadow: 0 0px 20px 0 rgba(65, 132, 234, 1);
	}
	box-sizing: border-box;
`;
const SignOutButton = styled.button`
	width: 100%;
	border: 0;
	text-decoration: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 15px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	padding: 12px;
	font-weight: bold;
	background-size: 300% 100%;
	border-radius: 50px;
	transition: 0.5s ease-in-out;
	background-size: 200% auto;
	color: white;
	background-image: linear-gradient(
		to right,
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

const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	color: white;
	font-size: 15px;
	cursor: pointer;
	margin-left: 50px;
	font-weight: bold;

	${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Banner = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Link
						style={{
							textDecoration: 'none',
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
						to="/">
						<Image src="https://i.ibb.co/MSLMYGg/home-4-512.png"></Image>
						<Label>
							SMART <br></br> MOTEL
						</Label>
					</Link>
				</Left>

				<Right>
					<MenuItem>WELCOME BACK, THANH</MenuItem>
					<Link
						to="/Tenants"
						style={{ color: 'inherit', textDecoration: 'inherit' }}>
						<MenuItem>
							<WrapIcon>
								<PeopleIcon></PeopleIcon>
								<InviLabel>TENANTS INFO</InviLabel>
							</WrapIcon>
						</MenuItem>
					</Link>
					<Link
						to="/control/washing"
						style={{ color: 'inherit', textDecoration: 'inherit' }}>
						<MenuItem>
							<WrapIcon>
								<WashingIcon></WashingIcon>
								<InviLabel>WASHING CONTROL</InviLabel>
							</WrapIcon>
						</MenuItem>
					</Link>
					<Link to="/user/login">
						<MenuItem>
							<SignOutButton>SIGN OUT</SignOutButton>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Banner;
