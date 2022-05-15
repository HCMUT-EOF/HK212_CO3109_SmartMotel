import styled from "styled-components";
import Log from "./Log";
import { useState, useEffect } from "react";
import { db } from "../firebase";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
`;

const LogList = () => { 
    const [log, setLog] = useState([]);

    useEffect(() => {
        db.collection("doorLog").orderBy("time", "desc").get().then((queryLog) => {
            const current = [];
            queryLog.forEach(element => {
                var data = element.data();
                current.push(data);
            })
            setLog(current);
        })
    }, [log]);

    const valueList = (
        log? (<Container>
        {log.map((item) => (
            <Log item = {item}/>
        ))}
        </Container>) : 'Loading'
    );

    return (
        <div>
            {valueList}
        </div>
    );
};

export default LogList;
