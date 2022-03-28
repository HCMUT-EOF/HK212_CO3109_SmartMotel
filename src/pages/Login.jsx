import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
		url('https://svgur.com/i/fbf.svg') center;
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
	box-sizing: border-box;
`;

const LogoContainer = styled.div`
	position: absolute;
	top: 8%;
	right: 5%;
	color: white;
	cursor: pointer;
`;
const HomeIcon = styled.img`
	width: 45px;
`;
const Wrapper = styled.div`
	width: 23%;
	padding: 3%;
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.13);
	backdrop-filter: blur(15px);
	border: 3px solid rgba(255, 255, 255, 0.05);
	box-shadow: 0 0 150px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	position: absolute;
	top: 50%;
	right: 5%;
	transform: translateY(-50%);
	box-size: border-box;
`;

const Title = styled.h2`
	font-size: 32px;
	font-weight: 700;
	margin-bottom: 8%;
	color: white;
	letter-spacing: 2px;
	margin-top: 40px;
`;

const HomeLabel = styled.h6`
	color: white;
	font-size: 21px;
	font-weight: bold;
	letter-spacing: 1.5px;
`;

const Label = styled.h6`
	color: white;
	font-size: 17px;
	font-weight: 500;
	pointer-events: none;
	display: block;
	font-weight: 600;
`;
const FormWrapper = styled.div`
	width: 100%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	width: 100%;
	margin-top: 10px;
	border: none;
	outline: none;
	font-size: 16px;
	color: white;
	background: 0;
	padding: 0px;
`;

const InputContainer = styled.div`
	margin: 20px 0px;
	min-width: 40%;
	width: 100%;
`;

const Button = styled.button`
	width: 100%;
	border: 0;
	text-decoration: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 17px;
	letter-spacing: 1.5px;
	cursor: pointer;
	text-transform: uppercase;
	padding: 15px;
	margin-bottom: 40px;
	margin-top: 15px;
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
	box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.4);
	&:hover {
		background-position: right center;
		color: #fff;
		text-decoration: none;
		box-shadow: 0 0px 30px 0 rgba(65, 132, 234, 1);
	box-sizing: border-box;
`;
const ForgotPassword = styled.a`
	font-size: 15px;
	text-decoration: none;
	cursor: pointer;
	color: white;
	font-weight: bold;
	display: block;
	float: right;
	margin-top: 5px;
`;

const Login = () => {
	return (
		<>
			<Container>
				<LogoContainer>
					<Link
						style={{
							textDecoration: 'none',
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
						to="/">
						<HomeIcon src="https://i.ibb.co/MSLMYGg/home-4-512.png"></HomeIcon>
						<HomeLabel>
							SMART <br></br> MOTEL
						</HomeLabel>
					</Link>
				</LogoContainer>
				<Wrapper>
					<FormWrapper>
						<Title>SIGN IN</Title>
						<Form>
							<InputContainer>
								<Label>Email address</Label>
								<Input
									type="email"
									placeholder="Enter email"
									autoFocus
								/>
							</InputContainer>
							<InputContainer>
								<Label>Password</Label>
								<Input
									type="password"
									placeholder="Enter password"
								/>
								<ForgotPassword>
									Forgot password?
								</ForgotPassword>
							</InputContainer>
							<Link to="/">
								<Button>Sign in</Button>
							</Link>
						</Form>
					</FormWrapper>
				</Wrapper>
			</Container>
		</>
	);
};

export default Login;
