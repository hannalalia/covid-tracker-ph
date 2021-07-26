import React,  { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import axios from '../../utils/axios/BaseUrl';
import Box from './Box'

function Summary() {
    useEffect(()=>{
        async function fetchData(){
        const result = await axios.get('/api/summary');
        const data = result.data.data;  
        setData(data);    
        }
        fetchData();    
      },[])
    
      const [data,setData] = useState([]);

    return (
        <Row xs={1} md={3} lg={3} className="justify-content-center align-content-stretch">
            <Col className="px-0">
                <Box title="Total Cases" iconName ="IoBriefcaseSharp" subtitle={data.total} boxStyle="bg-primary p-3 m-3 text-white d-flex align-items-center h-75"></Box>
            </Col>
            <Col className="px-0">
                <Box title="Total Active Cases" iconName="VscFolderActive" subtitle={data.active_cases} boxStyle="bg-danger p-3 m-3 text-white d-flex align-items-center h-75"></Box>
            </Col>
            <Col className="px-0">
                <Box title="Total Recoveries" iconName="RiHealthBookFill" subtitle={data.recoveries} boxStyle="bg-warning p-3 m-3 text-white d-flex align-items-center h-75"></Box>  
            </Col>
            <Col className="px-0">
                <Box title="Total Deaths" iconName="FaSkullCrossbones" subtitle={data.deaths} boxStyle="bg-success p-3 m-3 text-white d-flex align-items-center h-75"></Box>  
            </Col>
            <Col className="px-0">
                <Box title="Fatality Rate" iconName="AiFillWarning" subtitle={data.fatality_rate} boxStyle="bg-secondary p-3 m-3 text-white d-flex align-items-center h-75"></Box>
            </Col>
            <Col className="px-0">
                <Box title="Recovery Rate" subtitle={data.recovery_rate} boxStyle="bg-info p-3 m-3 text-white d-flex align-items-center h-75"></Box>
            </Col>
        </Row>
    )
}

export default Summary
