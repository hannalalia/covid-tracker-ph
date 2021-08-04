import React, {useState, useEffect} from 'react'
import axios from '../../utils/axios/BaseUrl'
import {useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap';
function FacilitiesDetails() {    
    const {hfhudcode} = useParams();
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('/api/facilities');
            setRawData(response.data.data);
   
        }
        fetchData(); 
        
    }, [])

    const [rawData, setRawData] = useState([]);


    let details = rawData.filter((data)=>
        data.hfhudcode === hfhudcode
    )
    
    console.log(details)
    
    return (
        <div className="mb-5">
            <ul class="list-group list-group-flush">
                {Object.keys(details[0]).map((key)=>{
                     return <li key={key} class="list-group-item"><b>{key +": "}</b>{details[0][key]}</li>
                })}
            </ul>                
        </div>
    )
}

export default FacilitiesDetails
