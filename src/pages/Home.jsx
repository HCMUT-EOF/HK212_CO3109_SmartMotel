import * as React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Footer from '../components/Footer';
import Door from '../components/Door';
import LogList from '../components/LogList';
import TenantDisplay from '../components/TenantDisplay';
import Navbar from '../components/Navbar';

const Display = styled.div`
	padding: 2% 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	${mobile({ flex: 2, justifyContent: 'center' })}
`;
const Container = styled.div`
	width: 100vw;
`;

const Tenant = () => {
	return (
		<Container>
			<Navbar />
			<Display>
				<Door />
			</Display>
			<Display>
				<LogList />
			</Display>
			<Footer />
		</Container>
	);
};

export default Tenant;
