import styled from 'styled-components';
import { db, rtdb } from '../firebase';
import { useState, useEffect } from 'react';

const Container = styled.div`
	width: 100%;
	margin-top: 2%;
`;

const UnlockedStatus = styled.div`
	box-shadow: 0 7px 30px hsl(229, 6%, 85%);
	border: 0;
	text-decoration: none;
	font-size: 22px;
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 25px;
	font-weight: 700;
	background-color: rgba(0, 154, 23, 0.1);
	color: rgba(0, 154, 23, 1);
	text-align: center;
	border-radius: 10px;
`;
const LockedStatus = styled.div`
	border-radius: 10px;
	border: 0;
	text-decoration: none;
	font-size: 22px;
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 25px;
	font-weight: 700;
	text-align: center;
	background-color: rgba(255, 0, 0, 0.1);
	color: rgba(255, 0, 0, 1);
	box-shadow: 0 7px 30px hsl(229, 6%, 85%);
`;
const Door = () => {
	const [status, setStatus] = useState('CLOSE');
	const [openPos, setOpenPos] = useState('N/A');
	const [rfidIn, setRfidIn] = useState('N/A');
	const [rfidOut, setRfidOut] = useState('N/A');

	const doorInteract = (inp) => {
		// Receive and save log
		const d = new Date();
		d.getDate();

		db.collection('doorLog')
			.add({
				status: status,
				time: d,
				user: inp,
				openFrom: openPos,
			})
			.then((docRef) => {
				console.log('Added successfully');
				window.location.reload();
			})
			.catch((error) => {
				console.log('error adding :', error);
			});
	};

	useEffect(() => {
		rtdb.ref('/doorStat/status').on('value', (snapshot) => {
			const data = snapshot.val();
			setStatus(data);
		});

		rtdb.ref('/doorStat/openFrom').on('value', (snapshot) => {
			const openFrom = snapshot.val();
			setOpenPos(openFrom);
		});

		rtdb.ref('doorStat/rfidIN').on('value', (snapshot) => {
			const rfIn = snapshot.val();
			setRfidIn(rfIn);
		});

		rtdb.ref('doorStat/rfidOUT').on('value', (snapshot) => {
			const rfOut = snapshot.val();
			setRfidOut(rfOut);
		});

		if (status === 'OPEN' && rfidIn !== 'N/A' && rfidOut !== 'N/A') {
			if (openPos === 'IN') doorInteract(rfidIn);
			else if (openPos === 'OUT') doorInteract(rfidOut);
		}
	}, [status]);

	if (status === 'OPEN')
		return (
			<Container>
				<UnlockedStatus
					style={{
						'border-top': '5px solid rgba(0, 154, 23, 1)',
					}}>
					Door status: {status}
				</UnlockedStatus>
			</Container>
		);
	else
		return (
			<Container>
				<LockedStatus
					style={{
						'border-top': '5px solid rgba(255, 0, 0, 1)',
					}}>
					Door status: {status}
				</LockedStatus>
			</Container>
		);
};

export default Door;
