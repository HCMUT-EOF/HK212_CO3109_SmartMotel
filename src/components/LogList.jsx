import styled from "styled-components";
import Log from "./Log";
import { useState, useEffect,  } from "react";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
`;


const LogList = () => { 
    const [log, setLog] = useState([]);

    const queryData = () => {
        db.collection("doorLog").orderBy("time", "desc").get().then((queryLog) => {
            queryLog.forEach(element => {
                var data = element.data();
                setLog(arr => [...arr, data]);
            })
        })
    };

    const valueList = (
        log? (<Container>
        {log.map((item) => (
            <Log item = {item}/>
        ))}
        </Container>) : 'Loading'
    );

    useEffect(() => {
        queryData();
    }, []);


    return (
        <div>
            {valueList}
        </div>
    );
};

export default LogList;
