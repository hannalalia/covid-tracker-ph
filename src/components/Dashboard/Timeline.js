import React,{useState,useEffect, Fragment} from 'react'
import axios from '../../utils/axios/BaseUrl'
import LineChart from '../../utils/charts/top_regions/LineChart';
function Timeline() {
    const [timeline,setTimeline] = useState([])
    const [dates,setDates] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const res = await axios.get('api/timeline');
            const formattedTimeline = res.data.data.map(data=>data.cases).slice(res.data.data.length-10,res.data.data.length);

            const dateArr = res.data.data.map(data=>data.date).slice(res.data.data.length-10,res.data.data.length);

            setDates(dateArr)
            setTimeline({label:"# of Covid Cases",data:formattedTimeline});
            
        }
        fetchData();
    },[])

    console.log(timeline)
    console.log(dates)
    return (
        <div>
            <h2 className="h2 pt-2 text-center text-md-start" style={{color:'rgba(55,71,79,1)'}}>Covid Cases Timeline</h2>
            <LineChart labels={dates} datasets={timeline}></LineChart>
        </div>
    )
}

export default Timeline
