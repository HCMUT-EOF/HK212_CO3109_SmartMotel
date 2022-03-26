import styled from "styled-components";

const Info = styled.div`
  flex: 3;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const TenantInfo = styled.div`
  opacity: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 3;
  margin: 10px;
  min-width: 800px;
  height: 50px;
  display: flex;
  position: relative;
  border: 0.5px solid black;
  transition: all 0.5s ease;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Room = styled.div`
  font-size: 16px;
  margin-left: 15px;
`

const Name = styled.div`
  font-size: 22px;
  margin-left: 15px;
  font-weight: bold;
`

const TenantCard = ({ item }) => {
  if (item[1].Status === "In room"){
    return (
      <Container> 
        <Info/>
        <TenantInfo style={{"background-color": "#63AA6F"}}>
          <Room>
            Room 0{item[0].RoomID} - Current Status: {item[1].Status}
          </Room>
          <Name>
            {item[0].Name}
          </Name> 
        </TenantInfo>  
      </Container>
    );
  }
  else{
    return (
      <Container> 
        <Info/>
        <TenantInfo style={{"background-color": "#FB9393"}}>
          <Room>
            Room 0{item[0].RoomID} - Current Status: {item[1].Status}
          </Room>
          <Name>
            {item[0].Name}
          </Name> 
        </TenantInfo>  
      </Container>
    );
  }
  
};

export default TenantCard;
