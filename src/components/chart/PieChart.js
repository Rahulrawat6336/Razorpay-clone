import Chart from 'react-apexcharts'
import React from 'react';
import { useState } from 'react';
import { PieChart } from '@mui/icons-material';
import ReactApexChart from 'react-apexcharts';


export default function PieChart1() {

  const [state, setState] = useState({


    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      title: {
        text: ''
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },

  })

  return (
    <div style={{  boxShadow: '25px 25px 25px whitesmoke',height:450}}>
       <div style={{fontSize:20,fontWeight:'bold'}}>Current download</div>
       <div style={{fontSize:15,marginTop:15,fontWeight:'lighter'}}>Current download
       Downloaded by operating system</div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}







