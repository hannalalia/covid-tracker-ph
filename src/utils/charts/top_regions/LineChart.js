import React from 'react'; 
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
    const data = {
        labels: [...props.labels],
        datasets: [
          {
            label: props.datasets.label,
            data: props.datasets.data,
            fill: false,
            backgroundColor: [
                '#00c853','#ff5252','#40c4ff',
                '#ffeb3b','#aa00ff','#ff9800',
                '#ff4081', '#1de9b6','#b2ff59',
                '#536dfe'              
            ],
            borderColor: '#b0bec5',
            skipNull: true
          }
        ],
      };
      
      const options ={  
        plugins: {
        //   title: {
        //       display: true,
        //       text: props.title
        //   },
          legend:{
            display:false
          },
        },
      }
    return ( 
        <div className="chart w-75 m-auto">
            <Line data={data}  options={options}></Line>
        </div>
     );
}
 
export default LineChart;
