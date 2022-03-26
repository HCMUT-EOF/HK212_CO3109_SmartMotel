import styled from "styled-components";
import Product from "./ProductCard";
import { all, roomStatus } from "../data";
import { useState, useEffect } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = ({value}) => { 
  // var a = all;
  // var b = roomStatus;
  // var c = a.map(function(e, i){
  //   return [e, b[i]];
  // });
  
  const [filter, setFilter] = useState([]);
  
  const checkFilter = (value) => {
    return all.filter((eachTenant) => eachTenant["Name"].toLowerCase().includes(value.toLowerCase()));
  }

  useEffect(() => { 
    setFilter(checkFilter(value));
  }, [value]);

  var b = roomStatus;
  var c = all.map(function(e, i){
    return [e, b[i]];
  });
  
  const valueList = (
    c? (<Container>
      {c.map((item) => (
          <Product item = {item}/>
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

export default Products;
