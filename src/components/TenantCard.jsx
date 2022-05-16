import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.13);
	backdrop-filter: blur(15px);
	box-shadow: 0 3px 15px hsl(229, 6%, 85%);
	display: flex;
	align-items: center;
	padding: 2%;
`;
const Container = styled.div`
	width: 95%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
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

const TenantCard = ({ item }) => {
	return (
		<Container>
			<Link
				style={{
					textDecoration: 'none',
					color: 'black',
					width: '100%',
				}}
				to={'/tenantInfo/' + item.RoomID}>
				<InfoWrapper>
					<InfoStack>
						<InfoStatus>
							<Text>Room</Text>
							<NormalText>{item.RoomID} </NormalText>
						</InfoStatus>
						<InfoStatus style={{ flex: '1' }}>
							<Text>Tenant</Text>
							<NormalText>{item.name}</NormalText>
						</InfoStatus>
					</InfoStack>
				</InfoWrapper>
			</Link>
		</Container>
	);
};

export default TenantCard;
