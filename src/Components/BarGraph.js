import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    Title,
    Legend
} from 'chart.js';

import {Bar} from 'react-chartjs-2';

ChartJS.register({
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Legend
})


const BarGraph = () => {

  const data ={
    labels:["Monday", "Tuesday", "Wednesday"],
    datasets: [
      {
        label: "dataset1",
        data:[5,7,3],
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "dataset2",
        data:[6,8,2],
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  }

  const options ={
    responsive: "true",
    plugins:{
      legend:{
        position: "bottom"
      },
      title:{
        display: "true",
        text: "Vertical Bar Graph"
      }
    }
  }

  return (
    <>
        <h4>A Basic Bargraph</h4>
        <div className='container' style={{height: "300px", width: '500px', margin: 'auto'}}>
            <Bar data={data} options={options} style={{}}/>
        </div>    
    </>
    
  )
}

export default BarGraph