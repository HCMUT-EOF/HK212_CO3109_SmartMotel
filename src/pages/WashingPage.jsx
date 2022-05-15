import * as React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import WashingMachine from '../components/WashingMachine';

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
	return (
		<div>
			<Navbar />
			<Wrapper>
				<WashingMachine />
			</Wrapper>
		</div>
	);
};

export default WashingPage;
