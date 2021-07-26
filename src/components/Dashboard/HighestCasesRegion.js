import React, { useState, useEffect, Fragment } from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import axios from '../../utils/axios/BaseUrl';
import BarChart from '../../utils/charts/top_regions/BarChart';
import LineChart from '../../utils/charts/top_regions/LineChart';
import DoughnutChart from '../../utils/charts/top_regions/DoughnutChart';

function HighestCasesRegion() {

  useEffect(()=>{
    async function fetchData(){
    const result = await axios.get('/api/top-regions');
    const data = result.data.data.splice(0,10);
    const regionNames = [];
    const cases = [];
    data.forEach(region => {
      regionNames.push(region.region.toUpperCase())
      cases.push(region.cases)
    });

    setRegionNames(regionNames);
    setCovideCases({label: '# of Covid Cases', data: cases});

    }
    fetchData();    
  },[])

  const [regionNames,setRegionNames] = useState([]);
  const [covidCases,setCovideCases] = useState([])
  const [chartType,setChartType] =useState({type: 'Bar Graph'})
  function displayChart(e){
    setChartType({type: e.target.value})
  }

  return (
    <Fragment> 
    <Row className="justify-content-around align-items-center">
        <Col xs={10} md={7}>
            <h2 className="h2 pt-2" style={{color:'rgba(55,71,79,1)'}}>Highest Covid Cases (Region)</h2>
        </Col>

        <Col xs={10} md={3}>
            <Form.Control as="select" className="shadow-none" onChange={(e)=>displayChart(e)}>
                <option>Bar Graph</option>
                <option>Line Chart</option>
                <option>Doughnut</option>
            </Form.Control>
        </Col>
    </Row>     
    {chartType.type==="Bar Graph"? 
    <BarChart datasets={covidCases} labels={regionNames} title='Top 10 Covid Cases per Region'></BarChart>:
    chartType.type==="Line Chart"?  
    <LineChart datasets={covidCases} labels={regionNames} title='Top 10 Covid Cases per Region'></LineChart>:
    //else 
    <DoughnutChart  datasets={covidCases} labels={regionNames} title='Top 10 Covid Cases per Region'></DoughnutChart>
    }
              
    </Fragment>
  );
}

export default HighestCasesRegion;
