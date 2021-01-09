import { Radar } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['Photography', 'Fashion', 'Stylism', 'Makeup', 'Modeling'],
  datasets: [
    {
      label: 'Occupation',
      data: [130, 185, 90, 120, 90],
      backgroundColor: 'rgba(255, 255, 255, 0.185)',
      borderColor: 'rgba(255, 255, 255, 0.767)',
      borderWidth: 1,
    },
  ],
}

const options = {
  legend: {
    labels: {
      fontColor: 'rgba(255, 255, 255, 0.767)',
    }
  },
  scale: {
    ticks: {
      beginAtZero: true,      
      backdropColor: 'rgba(255, 255, 255, 0.185)',
      fontColor: "#446a679a"
    },
    pointLabels: {
      fontColor: "rgba(255, 255, 255, 0.767)",
    },
    gridLines: {
        color: '#446a677c'
    }
  },
}

const RadarChart = () => (
  <>
    <div className='header'>
      <h1 className='title'></h1>
      <div className='links'>

      </div>
    </div>
    <Radar data={data} options={options} width="400px" height="350px" />
  </>
)

export default RadarChart