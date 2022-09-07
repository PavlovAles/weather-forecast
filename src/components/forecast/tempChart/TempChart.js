import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

function TempChart({ forecast }) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: 'Температура, °С'
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const tempArray = forecast.map(day => day.main.temp);
  const tempLabels = forecast.map(day => {
    let date = new Date(day.dt * 1000);
    return date.toLocaleString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  });

  const data = {
    labels: tempLabels,
    datasets: [
      {
        data: tempArray,
        borderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default TempChart;