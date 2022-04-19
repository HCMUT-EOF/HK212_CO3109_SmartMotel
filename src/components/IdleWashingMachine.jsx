import styled, { keyframes } from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
	width: 45%;
	height: 50%;
	padding: 1.5%;
	border-radius: 10px;
	box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
	box-size: border-box;
	border-top: 5px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const WashingImage = styled.img`
	width: 30%;
`;
const WashingInfo = styled.div`
	width: 50%;
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	gap: 10px;
`;
const Status = styled.div`
	border: 0;
	text-decoration: none;
	font-size: 17px;
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 16px;
	font-weight: bold;
	border-radius: 50px;
	background-color: hsl(229, 6%, 95%);
	color: hsl(229, 6%, 50%);
	margin-bottom: 15px;
`;
const Title = styled.h2`
	font-size: 25px;
	font-weight: 700;
	letter-spacing: 1.5px;
	text-transform: uppercase;
`;

const IdleMachine = () => {
	return (
		<Wrapper>
			<WashingImage src="https://svgur.com/i/gLe.svg"></WashingImage>
			<WashingInfo>
				<Title>Washing Machine 1</Title>
				<Status>Status: Idle</Status>
			</WashingInfo>
		</Wrapper>
	);
};
export default IdleMachine;
