import * as React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Footer from '../components/Footer';
import TenantDisplay from '../components/TenantDisplay';
import Navbar from '../components/Navbar';

const Display = styled.div`
	padding: 3% 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	${mobile({ flex: 2, justifyContent: 'center' })}
`;

const Tenant = () => {
	if (localStorage.getItem('token') === '123')
		return (
			<div>
				<Navbar />
				<Display>
					<TenantDisplay />
				</Display>
				<Footer />
			</div>
		);
	else{
        window.location = "/user/login";
    }
};

export default Tenant;
