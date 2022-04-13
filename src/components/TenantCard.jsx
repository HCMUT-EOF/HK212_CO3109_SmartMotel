import styled from "styled-components";
import { Link } from 'react-router-dom';

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
  &:hover ${Info}{
    opacity: 0.6;
    background-position: right center;
		color: #fff;
		text-decoration: none;
		box-shadow: 0 0px 20px rgba(220, 80, 57, 1);
  }
`;

const Room = styled.div`
  font-size: 16px;
  margin-left: 15px;
  margin-top: 5px;
  letter-spacing: 0.5px;
`

const Name = styled.div`
  font-size: 22px;
  margin-left: 15px;
  letter-spacing: 0.3px;
  font-weight: bold;
  float: left;
`
const Icon = styled.img`
  float: right;
  width: 58px;
	height: 58px;
`

const TenantCard = ({ item }) => {
  // status:
  // false: not in room
  // true: in room
  if (item.status === true){
    return (
      <Container> 
        <TenantInfo style={{"backgroundImage": "linear-gradient(to right,#44C16F 0%,#50D665 51%,#4AD4CC 100%)"}}>
          <Link style={{ textDecoration: "none", color: "black"}} to = {"/tenantInfo/" + item.RoomID}>
          <Info/>
            <Icon src="https://static.thenounproject.com/png/3549086-200.png"/>
            <Room>
              Room 0{item.RoomID} - Current Status: <b> {"Locked"} </b> 
            </Room>
            <Name>
              {item.name}
            </Name> 
          </Link>    
        </TenantInfo>     
      </Container>
    );
  }
  else{
    return (
      <Container>
          <TenantInfo style={{"backgroundImage": "linear-gradient(to right,#FB9393 0%,#FBB993 51%,#FD4646 100%)"}}>
            <Link style={{ textDecoration: "none", color: "black"}} to = {"/tenantInfo/" + item.RoomID}>
            <Info/>
              <Icon src="https://static.thenounproject.com/png/1378886-200.png"/>
              <Room>
                Room 0{item.RoomID} - Current Status: <b> {"Unlocked"} </b>
              </Room>
              <Name>
                {item.name}
              </Name> 
            </Link>  
          </TenantInfo>
      </Container>
    );
  }
};

export default TenantCard;
