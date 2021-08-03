import React, {useMemo, useState, useEffect} from 'react'
import FacilitiesTable from '../../utils/tables/FacilitiesTable';
import axios from '../../utils/axios/BaseUrl'
function Facilities() {    

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('/api/facilities');
            const formattedData = response.data.data.map((field,index) => {
             
                return {"#":index+1,cf_name: field.cf_name, city_mun:field.city_mun, province:field.province, region:field.region,t_patient_adm:field.t_patient_adm,t_patient_er:field.t_patient_er,t_patient_icu: field.t_patient_icu}
            })

            setFetchedData(formattedData);    
        }
        fetchData(); 
        
    }, [])

    const [fetchedData, setFetchedData] = useState([]);

    console.log(fetchedData)
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
                Header: 'Total Patient Admitted',
                accessor: 't_patient_adm',
                disableGlobalFilter: true
            },
            {
                Header: 'Total Patient in ER',
                accessor: 't_patient_er',
                disableGlobalFilter: true
            },
            {
                Header: 'Total Patient in ICU',
                accessor: 't_patient_icu',
                disableGlobalFilter: true
            }
          ],
          []
      )
    
      const data = useMemo(
        () => 
        // [
        //   {
        //     col1: 'Hello',
        //     col2: 'World',
        //   },
        //   {
        //     col1: 'react-table',
        //     col2: 'rocks',
        //   },
        //   {
        //     col1: 'whatever',
        //     col2: 'you want',
        //   },
        // ],
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
