import styled from "styled-components";
import { db, rtdb } from "../firebase";
import { useState, useEffect } from "react";

const Info = styled.div`
	flex: 3;
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 5;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const TenantInfo = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5px;
`;

const Container = styled.div`
	flex: 3;
	margin: 10px;
	min-height: 60px;
	min-width: 800px;
	height: 50px;
	display: flex;
	position: relative;
	border: 0.5px solid black;
	border-radius: 5px;
	&:hover ${Info} {
		opacity: 0.6;
		background-position: right center;
		color: #fff;
		text-decoration: none;
		box-shadow: 0 0px 20px rgba(220, 80, 57, 1);
	}
`;

const Name = styled.div`
	font-size: 22px;
	margin-left: 15px;
	letter-spacing: 0.3px;
	font-weight: bold;
	float: left;
`;
const Icon = styled.img`
	float: right;
	width: 58px;
	height: 58px;
`;

const Door = () => { 
    const [status, setStatus] = useState("CLOSE");
	const [openPos, setOpenPos] = useState("N/A");
	const [rfidIn, setRfidIn] = useState("N/A");
	const [rfidOut, setRfidOut] = useState("N/A");

	const doorInteract = (inp) => {
		// Receive and save log
		const d = new Date();
		d.getDate();

		db.collection("doorLog").add({
			status: status,		
			time: d,
			user: inp,
			openFrom: openPos
		})
		.then((docRef) => {
			console.log("Added successfully");
			window.location.reload();
		})
		.catch((error) => {
			console.log("error adding :", error);
		})
	};

	useEffect(() => {
        rtdb.ref("/doorStat/status").on('value', (snapshot) => {
			const data = snapshot.val();
			setStatus(data);
		});

		rtdb.ref("/doorStat/openFrom").on('value', (snapshot) => {
			const openFrom = snapshot.val();
			setOpenPos(openFrom);
		});

		rtdb.ref("doorStat/rfidIN").on('value', (snapshot) => {
			const rfIn = snapshot.val();
			setRfidIn(rfIn);
		});

		rtdb.ref("doorStat/rfidOUT").on('value', (snapshot) => {
			const rfOut = snapshot.val();
			setRfidOut(rfOut);
		});

		if (status === 'OPEN' && rfidIn !== "N/A" && rfidOut !== "N/A"){
			if (openPos === "IN")
				doorInteract(rfidIn);
			else if (openPos === "OUT")
				doorInteract(rfidOut);
		}
    }, [status]);

	if (status === 'OPEN')
		return (
			<Container>
				<TenantInfo
					style={{'background-image': 'linear-gradient(to right,#44C16F 0%,#50D665 51%,#4AD4CC 100%)'}}
					>
						<Info />
						<Icon src="https://static.thenounproject.com/png/1378886-200.png" />
						<Name>{status}</Name>
				</TenantInfo>
			</Container> 
		)
	else
		return (
			<Container>
				<TenantInfo
					style={{
						'background-image': 'linear-gradient(to right,#FB9393 0%,#FBB993 51%,#FD4646 100%)',
					}}>
						<Info />
						<Icon src="https://static.thenounproject.com/png/3549086-200.png" />
						<Name>{status}</Name>
				</TenantInfo>
			</Container>
		)
};

export default Door
