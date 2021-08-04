import React, {useMemo, useState, useEffect} from 'react'
import FacilitiesTable from '../../utils/tables/FacilitiesTable';
import axios from '../../utils/axios/BaseUrl'
import {Button} from 'react-bootstrap';
function Facilities() {    

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('/api/facilities');
            console.log(response);
            const formattedData = response.data.data.map((field,index) => {
                return {"#":index+1,cf_name: field.cf_name, city_mun:field.city_mun, 
                province:field.province, region:field.region,t_patient_adm:field.t_patient_adm,
                t_patient_er:field.t_patient_er,t_patient_icu: field.t_patient_icu,"button":field.hfhudcode}
            })

            setFetchedData(formattedData);    
        }
        fetchData(); 
        
    }, [])

    const [fetchedData, setFetchedData] = useState([]);
   
    const columns = useMemo(
        () => [
            {
                Header: '#',
                accessor: '#', // accessor is the "key" in the data
                disableGlobalFilter: true
            },
            {
                Header: 'Facility Name',
                accessor: 'cf_name', // accessor is the "key" in the data
            },
            {
                Header: 'City/Municipality',
                accessor: 'city_mun',
            },
            {
                Header: 'Province',
                accessor: 'province',
            },   
            {
                Header: 'Region',
                accessor: 'region',
            }, 
            {
                Header: 'Patient Admitted',
                accessor: 't_patient_adm',
                disableGlobalFilter: true
            },
            {
                Header: 'Patient in ER',
                accessor: 't_patient_er',
                disableGlobalFilter: true
            },
            {
                Header: 'Patient in ICU',
                accessor: 't_patient_icu',
                disableGlobalFilter: true
            },
            { 
                Header: '',
                accessor:'button',
                Cell:({value})=>{   
                   return  (
                   <a href={"/facilities/" + value}>
                        <Button variant="secondary shadow-none mx-2" size="sm" >View</Button>      
                    </a>)
                }
            }
          ],
          []
      )
    
      const data = useMemo(
        () => 
        fetchedData,
        [fetchedData]
      )
    return (
        <div className="mb-5">
            <FacilitiesTable columns={columns} data={data} >
            </FacilitiesTable>
        </div>
    )
}

export default Facilities
