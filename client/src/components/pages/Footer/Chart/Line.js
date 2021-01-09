import { Line } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: 'Growth Rate',
      data: [0, 20, 80, 120, 180, 400],
      backgroundColor: 'rgba(255, 255, 255, 0.185)',
      borderColor: 'rgba(255, 255, 255, 0.767)',
      borderWidth: 1,    
    },
  ],
}

const options = {
  legend: {
    labels: {
      fontColor: 'rgba(255, 255, 255, 0.767)'
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontColor: "rgba(255, 255, 255, 0.767)"
        },
      }],
    xAxes: [
      {
        ticks: {
          fontColor: 'rgba(255, 255, 255, 0.767)'
        },
      }]
  },
}

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'></h1>
      <div className='links'>

      </div>
    </div>
    <Line data={data} options={options}/>
  </>
)

export default LineChart