// import React, {useMemo, useState, useEffect} from 'react'
// import CasesTable from '../../utils/tables/FacilitiesTable';
// import axios from '../../utils/axios/BaseUrl'
// function RawData() {

//     const [fetchedData, setFetchedData] = useState([]);

//     useEffect(() => {
//         async function fetchData(){
//             const response = await axios.get('/api/get?age=22&removal_type=recovered&sex=female');
//             const data = response.data;  
//             setFetchedData(data);    
//             }
//             fetchData(); 
        
//     }, [])

//     console.log(fetchedData)
//     const columns = useMemo(
//         () => [
//             {
//                 Header: 'Case Code',
//                 accessor: 'col1', // accessor is the "key" in the data
//             },
//             {
//                 Header: 'Age',
//                 accessor: 'col2',
//             },
//             {
//                 Header: 'Sex',
//                 accessor: 'col3',
//             },
//             {
//                 Header: 'Result Released',
//                 accessor: 'col4',
//             },
//             {
//                 Header: 'Region',
//                 accessor: 'col5',
//             },
//             {
//                 Header: 'Province',
//                 accessor: 'col6',
//             },
//             {
//                 Header: 'City/Municipality',
//                 accessor: 'col7',
//             },
//             {
//                 Header: 'Health Status',
//                 accessor: 'col8',
//             },
//             {
//                 Header: 'Quarantined',
//                 accessor: 'col9',
//             },
//             {
//                 Header: 'Admitted',
//                 accessor: 'col10',
//             },
            

//           ],
//           []
//       )
    
//       const data = useMemo(
//         () => [
//           {
//             col1: 'Hello',
//             col2: 'World',
//           },
//           {
//             col1: 'react-table',
//             col2: 'rocks',
//           },
//           {
//             col1: 'whatever',
//             col2: 'you want',
//           },
//         ],
//         []
//       )
//     return (
//         <div>
//             <CasesTable columns={columns} data={data}>
//             </CasesTable>
//         </div>
//     )
// }

// export default RawData
