import styled from "styled-components";

const Info = styled.div`
  flex: 3;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: green;
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
  border-color: green;
  z-index: 4;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 3;
  margin: 15px;
  min-width: 800px;
  height: 50px;
  display: flex;
  border-color: green;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const ProductCard = ({ item }) => {
  if (item[1].Status === "In room"){
    return (
      <Container> 
        <TenantInfo style={{"background-color": "#63AA6F"}}>
            Room 0{item[0].RoomID} - Current Status: {item[1].Status}
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
        <TenantInfo style={{"background-color": "#FB9393"}}>
            Room 0{item[0].RoomID} - Current Status: {item[1].Status}
          <Name>
            {item[0].Name}
          </Name> 
        </TenantInfo>  
      </Container>
    );
  }
  
};

export default ProductCard;
