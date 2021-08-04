import React, {useState, useEffect} from 'react'
import axios from '../../utils/axios/BaseUrl'
import {useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap';
function FacilitiesDetails() {    
    const {hfhudcode} = useParams();
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('/api/facilities');
            const details = response.data.data.filter(data=> data.hfhudcode === hfhudcode)
            setDetails(details);   
        }
        fetchData(); 

    }, [])

    const [details, setDetails] = useState([]);
    console.log(details)
  
    return (
        <div className="mb-5">
            {details.length>0 ? 
            (<ul class="list-group list-group-flush">
            {Object.keys(details[0]).map((key)=>{
                     return (<li key={key} class="list-group-item"><b>{key +": "}</b>{details[0][key]}</li>)
                })}
            </ul>):'Facility not found'
            }
                           
        </div>
    )
}

export default FacilitiesDetails
