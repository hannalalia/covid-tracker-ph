import React from 'react'; 
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = (props) => {
    const data = {
        labels: [...props.labels],
        datasets: [
          {
            label: props.datasets.label,
            data: props.datasets.data,
            fill: true,
            backgroundColor: [
                '#00c853','#ff5252','#40c4ff',
                '#ffeb3b','#aa00ff','#ff9800',
                '#ff4081', '#1de9b6','#b2ff59',
                '#536dfe'  
            ],
            borderColor:'transparent',
            hoverOffset:7,
            skipNull: true,
          }
        ],
      };
      
      const options ={  
        plugins: {
        //   title: {
        //       display: true,
        //       text: props.title,
            
        //   },
          legend:{
            display:true,
            position:'right'
          },
        },

      }
    return ( 
        <div className="chart w-50 m-auto">
            <Doughnut data={data}  options={options}></Doughnut>
        </div>
     );
}
 
export default DoughnutChart;
