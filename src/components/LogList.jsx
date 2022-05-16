import styled from 'styled-components';
import Log from './Log';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
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

const LogList = () => {
	const [log, setLog] = useState([]);

	useEffect(() => {
		db.collection('doorLog')
			.orderBy('time', 'desc')
			.get()
			.then((queryLog) => {
				queryLog.forEach((element) => {
					var data = element.data();
					setLog((arr) => [...arr, data]);
				});
			});
	}, []);

	const valueList = log ? (
		<>
			{log.map((item) => (
				<Log item={item} />
			))}
		</>
	) : (
		'Loading'
	);

	return (
		<Wrapper>
			<Title>Log List</Title> {valueList}
		</Wrapper>
	);
};

export default LogList;
