import Chart from 'react-apexcharts'
import React from 'react';
import { useState } from 'react';
import { PieChart } from '@mui/icons-material';
import ReactApexChart from 'react-apexcharts';


export default function ColumnChart() {

  const [state, setState] = useState({


    series: [{
      name: 'PRODUCT A',
      data: [4, 5, 4, 6, 2, 4, 2, 4,9,4,11,25]
    }, {
      name: 'PRODUCT B',
      data: [1, 23, 20, 8, 13, 27, 33, 12,9,5,12,25]
    }, {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14, 15, 13,3,5,7,9]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 950,
        stacked: true,
        stackType: 100,
      },
      responsive: [{
        breakpoint: 280,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      xaxis: {
        categories: ['Jan', 'Fer', 'March', 'Apr', 'May', 'Jun',
          'Jul', 'Aug','Sep','Oct','Nov','Dec'
        ],
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
      },
    },
  
  
  

  })

  return (
    <div style={{  boxShadow: '5px 5px 8px whitesmoke',marginLeft:15}}>
      <div style={{fontSize:20,fontWeight:'bold'}}>Area installed</div>
      <div style={{fontSize:15,marginTop:15,fontWeight:'lighter'}}>(+43%) than last year</div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}








