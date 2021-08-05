import React, {useState, useEffect} from 'react'
import axios from '../../utils/axios/BaseUrl'
import {useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap';
import {CSVLink} from 'react-csv'
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

      let headers = [];
      let data = [];
      if(details.length>0){
        let row ={};
        Object.keys(details[0]).map(key=>{
            return row[key] = details[0][key];
        })
        data = [
            {row}]
        headers = [
            { label: "hfhudcode", key: "row.hfhudcode" },
            { label: "Facility", key: "row.cf_name" },
            { label: "Added Date", key: "row." },
            { label: "Region", key: "row." },
            { label: "Region PSGC", key: "row." },
            { label: "Provice", key: "row." },
            { label: "Province PSGC", key: "row." },
            { label: "City/Municipality", key: "row." },
            { label: "City/Municipality PSGC", key: "row." },
            { label: "Vacant ICU", key: "row." },
            { label: "Occupied ICU", key: "row." },
            { label: "Vacant Isolation Bed", key: "row." },
            { label: "Vacant Beds Ward", key: "row." },
            { label: "Occupied Beds Ward", key: "row." },
            { label: "Vacant Mechanical Ventilators", key: "row." },
            { label: "Occupied Mechanical Ventilators", key: "row." },
            { label: "Vacant Neonatal ICU (Non-Covid)", key: "row." },
            { label: "Occupied Neonatal ICU (Non-Covid)", key: "row." },
            { label: "Vacant Mechanical Ventilators (Non-Covid)", key: "row." },
            { label: "Occupied Mechanical Ventilators (Non-Covid)", key: "row." },
            { label: "Quarantine Nurse", key: "row." },
            { label: "Qurantine Doctor", key: "row." },
            { label: "Nurse Admitted", key: "row." },
            { label: "Doctor Admitted", key: "row." },
            { label: "", key: "row." },
            { label: "", key: "row." },
            { label: "", key: "row." },
            { label: "", key: "row." },
            { label: "", key: "row." },
            { label: "", key: "row." },
            { label: "", key: "row." },
          ];
          console.log(data)
      }
     

    return (
        <div className="mb-5">
            
            {details.length>0 ? 
            (
                <div>  
                    <CSVLink data={data} headers={headers}   filename={details[0].cf_name.toUpperCase()+ ".csv"}
                        className="btn btn-primary m-3 shadow-none">
                        Export CSV
                    </CSVLink>              
                    <div className="m-3">
                    <ul className="list-group">
                        <li className="list-group-item"><b>hfhudcode: </b>{hfhudcode}</li>
                        <li className="list-group-item"><b>Facility:  </b>{details[0].cf_name.toUpperCase()}</li>
                        <li className="list-group-item"><b>Update Date:  </b>{details[0].updated_date}</li>
                        <li className="list-group-item"><b>Added Date:  </b>{details[0].added_date}</li>
                        <li className="list-group-item"><b>Region:  </b>{details[0].region.toUpperCase()}</li>
                        <li className="list-group-item"><b>Region PSGC:  </b>{details[0].region_psgc}</li>
                        <li className="list-group-item"><b>Provice:  </b>{details[0].province.toUpperCase()}</li>
                        <li className="list-group-item"><b>Province PSGC:  </b>{details[0].province_psgc}</li>
                        <li className="list-group-item"><b>City/Municipality:  </b>{details[0].city_mun.toUpperCase()}</li>
                        <li className="list-group-item"><b>City/Municipality PSGC:  </b>{details[0].city_mun_psgc}</li>
                    </ul>
                    <ul className="list-group mt-3">
                        <li className="list-group-item"><b>Vacant ICU:  </b>{details[0].icu_v}</li>
                        <li className="list-group-item"><b>Occupied ICU:  </b>{details[0].icu_o}</li>
                        <li className="list-group-item"><b>Vacant Isolation Bed:  </b>{details[0].isolbed_v}</li>
                        <li className="list-group-item"><b>Occupied Isolation Bed:  </b>{details[0].isolbed_v}</li>
                        <li className="list-group-item"><b>Vacant Beds Ward:  </b>{details[0].beds_ward_v}</li>    
                        <li className="list-group-item"><b>Occupied Beds Ward:  </b>{details[0].beds_ward_o}</li>
                    </ul>
              
                    </div>
                    
                    <div className="d-flex m-3">

                    <ul className="list-group flex-fill me-1">
                        
                        <li className="list-group-item"><b>Vacant Mechanical Ventilators: </b>{details[0].mechvent_v}</li>
                        <li className="list-group-item"><b>Occupied Mechanical Ventilators: </b>{details[0].mechvent_o}</li>
                        <li className="list-group-item"><b>Vacant Neonatal ICU (Non-Covid):  </b>{details[0].nonicu_v_nc}</li>
                        <li className="list-group-item"><b>Occupied Neonatal ICU (Non-Covid):  </b>{details[0].nonicu_o_nc}</li>
                        <li className="list-group-item"><b>Vacant Mechanical Ventilators (Non-Covid):  </b>{details[0].mechvent_v_nc}</li>
                        <li className="list-group-item"><b>Occupied Mechanical Ventilators (Non-Covid):  </b>{details[0].mechvent_o_nc}</li>
                        <li className="list-group-item"><b>Quarantine Nurse:  </b>{details[0].q_nurse}</li>
                        <li className="list-group-item"><b>Qurantine Doctor:  </b>{details[0].q_doctor}</li>
                        <li className="list-group-item"><b>Nurse Admitted:  </b>{details[0].nurse_adm}</li>
                        <li className="list-group-item"><b>Doctor Admitted:  </b>{details[0].doctor_adm}</li>


                    </ul>
                    <ul className="list-group flex-fill me-1">
                        <li className="list-group-item"><b>Prob Asymptomatic: </b>{details[0].prob_asym}</li>
                        <li className="list-group-item"><b>Prob Mild:  </b>{details[0].prob_mild}</li>
                        <li className="list-group-item"><b>Prob Severe:  </b>{details[0].prob_severe}</li>
                        <li className="list-group-item"><b>Prob Critical:  </b>{details[0].prob_crit}</li>
                        <li className="list-group-item"><b>Prob Died:  </b>{details[0].prob_died}</li>
                        <li className="list-group-item"><b>Suspected Asymptomatic: </b>{details[0].susp_asym}</li>
                        <li className="list-group-item"><b>Suspected Mild: </b>{details[0].susp_mild}</li>
                        <li className="list-group-item"><b>Suspected Severe:  </b>{details[0].susp_severe}</li>
                        <li className="list-group-item"><b>Suspected Critical:  </b>{details[0].susp_crit}</li>
                        <li className="list-group-item"><b>Suspected Died:  </b>{details[0].susp_died}</li>
                    </ul>
                    <ul className="list-group flex-fill">
                        <li className="list-group-item"><b>Confirmed Asymptomatic:  </b>{details[0].conf_asym}</li>
                        <li className="list-group-item"><b>Confirmed Mild:  </b>{details[0].conf_mild}</li>
                        <li className="list-group-item"><b>Confirmed Severe:  </b>{details[0].conf_severe}</li>
                        <li className="list-group-item"><b>Confirmed Critical:  </b>{details[0].conf_crit}</li>
                        <li className="list-group-item"><b>Confirmed Died: </b>{details[0].conf_died}</li>
                        <li className="list-group-item"><b>Total Patient Admitted: </b>{details[0].t_patient_adm}</li>
                        <li className="list-group-item"><b>Total Patient in ER:  </b>{details[0].t_patient_er}</li>
                        <li className="list-group-item"><b>Total Patient in ICU:  </b>{details[0].t_patient_icu}</li>
                        <li className="list-group-item"><b>Trans ttmf:  </b>{details[0].trans_ttmf}</li>
                        <li className="list-group-item"><b>Discharged:  </b>{details[0].discharged}</li>

                    </ul>
                    </div>
                </div>
            ):'Facility not found'
            }
                           
        </div>
    )
}

export default FacilitiesDetails
