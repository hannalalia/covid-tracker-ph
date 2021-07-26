import React from 'react'; 
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {
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
            skipNull: true
          }
        ],
      };
      
    const options ={  
      // responsive:true,
      // maintainAspectRatio: false, 
      plugins: {
        // title: {
        //     display: true,
        //     text: props.title
        // },
        legend:{
          display:false,
        },
        tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      }
      },
      
      indexAxis: 'y'
    }
   
    return ( 
        <div className="chart w-75 m-auto">
            <Bar data={data}  options={options}></Bar>
        </div>
     );
}
 
export default BarChart;
