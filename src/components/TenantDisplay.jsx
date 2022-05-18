import styled from 'styled-components';
import TenantCard from './TenantCard';
import { db } from '../firebase';
import { useState, useEffect } from 'react';

const Title = styled.h2`
	font-size: 26px;
	font-weight: 700;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: hsl(212, 86%, 30%);
	margin-bottom: 20px;
`;
const Wrapper = styled.div`
	width: 100%;
	padding: 3% 4%;
	border-radius: 10px;
	box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
	box-size: border-box;
	border-top: 5px solid hsl(212, 86%, 64%);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	border-top: 5px solid hsl(212, 86%, 64%);
	margin-bottom: 2%;
`;

const LoadingGif = styled.img`
	width: 180px;
	height: 180px;
	border-radius: 50%;
`;

const TenantDisplay = () => {
	const [data, setData] = useState([]);
	const [room, setRoom] = useState([]);

	// map data and room array into 1 array
	// let tList = data.map((item, i) => Object.assign({}, item, room[i]));

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

	const valueList = tList ? (
		<>
			{tList.map((item) => (
				<TenantCard item={item} />
			))}
		</>
	) : (
		'Loading'
	);

	if (tList)
		return (
			<Wrapper>
				<Title>Tenants infomation</Title>
				{valueList}
			</Wrapper>
		);
	else
		return (
			<Wrapper>
				<LoadingGif src={'../resource/loading.gif'} alt={'Loading'} />
			</Wrapper>
		);
};

export default TenantDisplay;
