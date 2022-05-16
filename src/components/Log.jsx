import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const InfoStatus = styled.div`
	border: 0;
	text-decoration: none;
	font-size: 17px;
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 12px;
	font-weight: bold;
	border-radius: 10px;
	background-color: hsl(212, 86%, 95%);
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	width: 150px;
`;

const InfoWrapper = styled.div`
	width: 95%;
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.13);
	backdrop-filter: blur(15px);
	box-shadow: 0 3px 15px hsl(229, 6%, 85%);
	display: flex;
	align-items: center;
	padding: 2%;
`;

const InfoStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	gap: 20px;
`;

const Text = styled.h2`
	font-size: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: hsl(212, 86%, 64%);
	text-align: center;
`;
const NormalText = styled.h4`
	font-size: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-align: center;
`;

const Log = ({ item }) => {
	const getCurrentTime = (sec) => {
		var date = new Date(null);

		// specify value for SECONDS here
		// Convert from GMT +0800 to GMT +0700 for some reason
		date.setSeconds(sec - 3600); 
		return date.toString();
	};

	const displayPos = () => {
		return item.openFrom === 'IN' ? 'Inside' : 'Outside';
	};

	const displayTime = () => {
		var time = getCurrentTime(item.time.seconds); 
		return time
			.replace('GMT+0700 (Indochina Time)', '')
			.replace('GMT+0700 (+07)', '');
	};

	return (
		<InfoWrapper>
			<InfoStack>
				<InfoStatus>
					<Text>User</Text>
					<NormalText>{item.user} </NormalText>
				</InfoStatus>
				<InfoStatus>
					<Text>From</Text>
					<NormalText>{displayPos()}</NormalText>
				</InfoStatus>
				<InfoStatus style={{ flex: '1.5' }}>
					<Text>At</Text>
					<NormalText>{displayTime()}</NormalText>
				</InfoStatus>
			</InfoStack>
		</InfoWrapper>
	);
};

export default Log;
