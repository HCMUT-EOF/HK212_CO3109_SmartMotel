import * as React from 'react';
import styled from 'styled-components';
import InUseWashingMachine from '../components/InUseWashingMachine';
import IdleWashingMachine from '../components/IdleWashingMachine';
import { useState, useEffect } from 'react';
import { rtdb } from '../firebase';

import Navbar from '../components/Navbar';
const Wrapper = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
    gap: 10px;
`;

const WashingPage = () => {
	const [status, setStatus] = useState("NA");
	const [user, setUser] = useState("NA")

	useEffect(() => {
        rtdb.ref("/washingMachineStat/washingMachine1").on('value', (snapshot) => {
			setStatus(snapshot.val().status);
			setUser(snapshot.val().rfid)
		});	
    }, []);
	
	if (localStorage.getItem('token') === '123'){
		if (status === 'BUSY')
			return (
				<div>
					<Navbar />
					<Wrapper>
						<InUseWashingMachine item = {user}/>
					</Wrapper>
				</div>
			);
		else
			return (
				<div>
					<Navbar />
					<Wrapper>
						<IdleWashingMachine/>
					</Wrapper>
				</div>
			);	
	}
	else{
        window.location = "/user/login";
    }
};

export default WashingPage;
