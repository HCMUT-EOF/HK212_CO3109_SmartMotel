import styled from "styled-components";
import TenantCard from "./TenantCard";
import { db } from "../firebase";
import { useState, useEffect } from "react";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
`;

const LoadingGif = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
`

const TenantDisplay = () => { 
  const [data, setData] = useState([]);
  const [room, setRoom] = useState([]);

  // map data and room array into 1 array
  // let tList = data.map((item, i) => Object.assign({}, item, room[i]));

  let tList = data.map((e) => {
    for (let element of room){
      if (e.RoomID == element.RoomID) Object.assign(e, element);
    }
    return e
  })

  // Sort tList based on RoomID
  tList.sort(function(a, b){
    return parseInt(a.RoomID) - parseInt(b.RoomID)
  });

  const fetchData = () => {
    db.collection("roomStatus").get().then((queryRoom) => {
      queryRoom.forEach(element => {
        var data = element.data();
        setRoom(arr => [...arr, data]);
      })
    })

    db.collection("tenant").get().then((queryTenant) => {
      queryTenant.forEach(element => {
        var data = element.data();
        setData(arr => [...arr , data]);
      });
    })
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log("tList = ", tList);

  const valueList = (
    tList? (<Container>
      {tList.map((item) => (
          <TenantCard item = {item}/>
      ))}
    </Container>) : 'Loading'
  );

  
  if(tList)
    return (
      <div>
        {valueList}
      </div>
    );
  else
    return (
      <div>
        <LoadingGif src = {"../resource/loading.gif"} alt = {"Loading"}/>
      </div>
    )
};

export default TenantDisplay;
