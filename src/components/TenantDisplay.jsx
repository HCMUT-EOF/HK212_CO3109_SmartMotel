import styled from "styled-components";
import TenantCard from "./TenantCard";
import { all, roomStatus } from "../data";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
`;

const TenantDisplay = () => { 
  var tenantList = all.map(function(e, i){
    return [e, roomStatus[i]];
  });

  const valueList = (
    tenantList? (<Container>
      {tenantList.map((item) => (
          <TenantCard item = {item}/>
      ))}
    </Container>)
    : 'Tenant info is loading'
  );

  return (
    <div>
      {valueList}
    </div>
  );
};

export default TenantDisplay;
