import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { db } from '../firebase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import Footer from '../components/Footer';

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
	justify-content: flex-end;
	width: 100%;
`;

const Wrapper = styled.div`
	width: 50%;
	padding: 3% 4%;
	border-radius: 10px;
	box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
	box-size: border-box;
	border-top: 5px solid hsl(212, 86%, 64%);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	gap: 60px;
	border-top: 5px solid hsl(212, 86%, 64%);
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
	border-top: 5px solid hsl(212, 86%, 64%);
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
	background-color: rgba(0, 154, 23, 0.15);
	color: rgba(0, 154, 23, 1);
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
	background-color: rgba(255, 0, 0, 0.15);
	color: rgba(255, 0, 0, 1);
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

const Display = styled.div`
	flex: 3;
	margin: 25px;
	border: 0.05px solid black;
	border-radius: 1px;
	display: flex;
	align-items: center;
	justify-content: center;
	${mobile({ flex: 2, justifyContent: 'center' })}
`;

const LoadingGif = styled.img`
	width: 180px;
	height: 180px;
	border-radius: 50%;
`;

const TenantInfo = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const [room, setRoom] = useState([]);

	// map data and room array into 1 array
	let tList = data.map((e) => {
		for (let element of room) {
			if (e.RoomID == element.RoomID) Object.assign(e, element);
		}
		return e;
	});

	// Sort tList based on RoomID
	tList.sort(function (a, b) {
		return parseInt(a.RoomID) - parseInt(b.RoomID);
	});

	const fetchData = () => {
		db.collection('roomStatus')
			.get()
			.then((queryRoom) => {
				queryRoom.forEach((element) => {
					var data = element.data();
					setRoom((arr) => [...arr, data]);
				});
			});

		db.collection('tenant')
			.get()
			.then((queryTenant) => {
				queryTenant.forEach((element) => {
					var data = element.data();
					setData((arr) => [...arr, data]);
				});
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	let obj = tList.find((x) => x.RoomID === id);

	if (localStorage.getItem('token') === '123'){
		if (obj != null)
			return (
				<>
					<Navbar></Navbar>
					<Container>
						<Wrapper>
							<HStack>
								<IconWrapper>
									<Link
										to="/Tenants"
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
											<NormalText>{obj.name}</NormalText>
										</Info>
										<Info>
											<Text>Gender: &nbsp; </Text>
											<NormalText>Male</NormalText>
										</Info>
										<Info>
											<Text>Date of Birth: &nbsp; </Text>
											<NormalText>
												{obj.bday
													.toDate()
													.toDateString()
													.slice(4)
													.replace(/ /g, '-')}
											</NormalText>
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
										<NormalText>
											{obj.rentCost
												.toString()
												.replace(
													/(\d)(?=(\d\d\d)+(?!\d))/g,
													'$1.'
												)}{' '}
											VND
										</NormalText>
									</InfoStatus>
								</InfoStack>
							</InfoWrapper>
						</Wrapper>
					</Container>
					<Footer />
				</>
			);
	else
		return (
			<div className="tenant-info">
				<Navbar />
				<Display>
					<LoadingGif
						src={'../resource/loading.gif'}
						alt={'Loading'}
					/>
				</Display>
			</div>
		);
	}
	else{
		window.location = "/user/login";
	}
};

export default TenantInfo;
