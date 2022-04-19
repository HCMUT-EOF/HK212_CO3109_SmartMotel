import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { all, roomStatus } from '../data';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;
const HStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const Wrapper = styled.div`
	width: 50%;
	padding: 3% 4%;
	border-radius: 10px;
	box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
	box-size: border-box;
	border-top: 5px solid rgba(0, 154, 23, 1);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	gap: 60px;
	border-top: 5px solid rgba(255, 0, 0, 1);
`;
const NotInRoomWrapper = styled.div`
	width: 50%;
	padding: 3% 4%;
	border-radius: 10px;
	box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
	box-size: border-box;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	gap: 60px;
	border-top: 5px solid rgba(0, 154, 23, 1);
`;
const LockedStatus = styled.div`
	border: 0;
	text-decoration: none;
	font-size: 17px;
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 16px;
	font-weight: bold;
	border-radius: 50px;
	background-color: rgba(255, 0, 0, 0.15);
	color: rgba(255, 0, 0, 1);
	text-align: center;
`;
const InfoStatus = styled.div`
	border: 0;
	text-decoration: none;
	font-size: 17px;
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 15px;
	font-weight: bold;
	border-radius: 5px;
	background-color: hsl(212, 86%, 95%);
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	width: 220px;
	gap: 8px;
`;
const UnLockedStatus = styled.div`
	border: 0;
	text-decoration: none;
	font-size: 17px;
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 16px;
	font-weight: bold;
	border-radius: 50px;

	text-align: center;
	background-color: rgba(0, 154, 23, 0.15);
	color: rgba(0, 154, 23, 1);
`;
const InviLabel = styled.div`
	font-size: 17px;
	letter-spacing: 1px;
	text-transform: uppercase;
	font-weight: bold;
	display: none;
`;
const IconWrapper = styled.div`
	display: flex;
	gap: 40px;
`;
const HistoryIcon = styled.div`
	width: 35px;
	height: 35px;
	background: url('https://img.icons8.com/ios-filled/100/000000/activity-history.png');
	background-size: cover;
	background-repeat: no-repeat;
`;
const EditIcon = styled.div`
	width: 32px;
	height: 32px;
	background: url('https://img.icons8.com/ios-filled/500/000000/edit--v1.png');
	background-size: cover;
	background-repeat: no-repeat;
`;
const BackIcon = styled.div`
	width: 35px;
	height: 35px;
	background: url('https://img.icons8.com/ios-filled/100/000000/undo.png');
	background-size: cover;
	background-repeat: no-repeat;
`;
const WrapIcon = styled.div`
	width: 40px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
	text-align: center;
	overflow: hidden;
	transition: all 0.2s ease-in-out;
	white-space: nowrap;
	&:hover ${InviLabel} {
		display: block;
		color: white;
	}
	&:hover {
		width: 180px;
		background-color: rgba(0, 0, 0, 0.9);
		border-radius: 50px;
	}
	&:hover ${HistoryIcon} {
		background: url('https://i.ibb.co/yWYZD7z/icons8-activity-history-100.png');
		background-size: cover;
		width: 35px;
		height: 35px;
	}
	&:hover ${EditIcon} {
		background: url('https://i.ibb.co/HDf7pD6/icons8-edit-100.png');
		background-size: cover;
		width: 32px;
		height: 32px;
	}
	&:hover ${BackIcon} {
		background: url('https://i.ibb.co/2dTJX6x/icons8-undo-100.png');
		background-size: cover;
		width: 35px;
		height: 35px;
	}
`;
const InfoWrapper = styled.div`
	width: 100%;
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.13);
	backdrop-filter: blur(15px);
	box-shadow: 0 0 50px hsl(229, 6%, 85%);
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 4% 0%;
`;
const Title = styled.h2`
	font-size: 26px;
	font-weight: 700;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: hsl(212, 86%, 30%);
	margin-bottom: 40px;
`;
const Wrapper1 = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const InfoStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	flex-wrap: wrap;
`;
const Avatar = styled.img`
	width: 30%;
	background-size: cover;
`;
const InfoContainer = styled.div`
	width: 50%;
`;
const Info = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin: 20px 0px;
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
const TenantInfo = () => {
	const { id } = useParams();
	console.log(all[id - 1]);

	if (roomStatus[id - 1]['Status'] === 'In room')
		return (
			<>
				<Navbar></Navbar>
				<Container>
					<Wrapper>
						<HStack>
							<LockedStatus>Door status: Locked</LockedStatus>
							<IconWrapper>
								<Link
									to="/control/door"
									style={{
										color: 'inherit',
										textDecoration: 'inherit',
									}}>
									<WrapIcon>
										<HistoryIcon></HistoryIcon>
										<InviLabel>History</InviLabel>
									</WrapIcon>
								</Link>
								<Link
									to="/control/door"
									style={{
										color: 'inherit',
										textDecoration: 'inherit',
									}}>
									<WrapIcon>
										<EditIcon></EditIcon>
										<InviLabel>Edit info</InviLabel>
									</WrapIcon>
								</Link>
								<Link
									to="/tenantsList"
									style={{
										color: 'inherit',
										textDecoration: 'inherit',
									}}>
									<WrapIcon>
										<BackIcon></BackIcon>
										<InviLabel>Back</InviLabel>
									</WrapIcon>
								</Link>
							</IconWrapper>
						</HStack>
						<InfoWrapper>
							<Title>Tenant's information</Title>
							<Wrapper1>
								<Avatar src="https://svgur.com/i/gMR.svg"></Avatar>
								<InfoContainer>
									<Info>
										<Text>Name: &nbsp; </Text>
										<NormalText>
											Nguyen Duc Thanh
										</NormalText>
									</Info>
									<Info>
										<Text>Gender: &nbsp; </Text>
										<NormalText>Male</NormalText>
									</Info>
									<Info>
										<Text>Date of Birth: &nbsp; </Text>
										<NormalText>19/12/2001</NormalText>
									</Info>
									<Info>
										<Text>National ID: &nbsp; </Text>
										<NormalText>312482081</NormalText>
									</Info>
								</InfoContainer>
							</Wrapper1>
							<InfoStack>
								<InfoStatus>
									<Text>Water consumed </Text>
									<NormalText>100 litres</NormalText>
								</InfoStatus>
								<InfoStatus>
									<Text>Laundry used </Text>
									<NormalText>50 times</NormalText>
								</InfoStatus>
							</InfoStack>
							<InfoStack>
								<InfoStatus>
									<Text>Door interacting</Text>
									<NormalText>50 times</NormalText>
								</InfoStatus>
								<InfoStatus>
									<Text>Payment</Text>
									<NormalText>5.000.000 VND</NormalText>
								</InfoStatus>
							</InfoStack>
						</InfoWrapper>
					</Wrapper>
				</Container>
			</>
		);
	else
		return (
			<>
				<Navbar></Navbar>
				<Container>
					<NotInRoomWrapper>
						<HStack>
							<UnLockedStatus>
								Door status: Unlocked
							</UnLockedStatus>
							<IconWrapper>
								<Link
									to="/control/door"
									style={{
										color: 'inherit',
										textDecoration: 'inherit',
									}}>
									<WrapIcon>
										<HistoryIcon></HistoryIcon>
										<InviLabel>History</InviLabel>
									</WrapIcon>
								</Link>
								<Link
									to="/control/door"
									style={{
										color: 'inherit',
										textDecoration: 'inherit',
									}}>
									<WrapIcon>
										<EditIcon></EditIcon>
										<InviLabel>Edit info</InviLabel>
									</WrapIcon>
								</Link>
								<Link
									to="/tenantsList"
									style={{
										color: 'inherit',
										textDecoration: 'inherit',
									}}>
									<WrapIcon>
										<BackIcon></BackIcon>
										<InviLabel>Back</InviLabel>
									</WrapIcon>
								</Link>
							</IconWrapper>
						</HStack>
						<InfoWrapper>
							<Title>Tenant's information</Title>
							<Wrapper1>
								<Avatar src="https://svgur.com/i/gMR.svg"></Avatar>
								<InfoContainer>
									<Info>
										<Text>Name: &nbsp; </Text>
										<NormalText>
											Nguyen Duc Thanh
										</NormalText>
									</Info>
									<Info>
										<Text>Gender: &nbsp; </Text>
										<NormalText>Male</NormalText>
									</Info>
									<Info>
										<Text>Date of Birth: &nbsp; </Text>
										<NormalText>19/12/2001</NormalText>
									</Info>
									<Info>
										<Text>National ID: &nbsp; </Text>
										<NormalText>312482081</NormalText>
									</Info>
								</InfoContainer>
							</Wrapper1>
							<InfoStack>
								<InfoStatus>
									<Text>Water consumed </Text>
									<NormalText>100 litres</NormalText>
								</InfoStatus>
								<InfoStatus>
									<Text>Laundry used </Text>
									<NormalText>50 times</NormalText>
								</InfoStatus>
							</InfoStack>
							<InfoStack>
								<InfoStatus>
									<Text>Door interacting</Text>
									<NormalText>50 times</NormalText>
								</InfoStatus>
								<InfoStatus>
									<Text>Payment</Text>
									<NormalText>5.000.000 VND</NormalText>
								</InfoStatus>
							</InfoStack>
						</InfoWrapper>
					</NotInRoomWrapper>
				</Container>
			</>
		);
};

export default TenantInfo;
