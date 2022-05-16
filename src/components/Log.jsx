import styled from 'styled-components';

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

const Log = ({ item }) => {
    const getCurrentTime = (sec) => {
        var date = new Date(null);
        date.setSeconds(sec); // specify value for SECONDS here
        return date.toString();
    }

	const displayPos = (pos) => {return pos === "IN" ? "Inside" : "Outside";}

	const displayTime = () => {
		var time = getCurrentTime(item.time.seconds);
		return time.replace("GMT+0700 (Indochina Time)", "");
	}
    
	return (
		<Container>
			<TenantInfo
				style={{
					'background-image':
						'linear-gradient(to right,#44C16F 0%,#50D665 51%,#4AD4CC 100%)',
				}}>
				<Info />
				<Name>OPENED by RFID {item.user} - from {displayPos(item.openFrom)} - at {displayTime()}</Name>
			</TenantInfo>
		</Container>
	);
};

export default Log;
