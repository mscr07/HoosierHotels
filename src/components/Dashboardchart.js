import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April'];

const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: [250, 600, 900, 850],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Expenses',
      data: [300, 450, 800, 950],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export function Dbchart() {
  return <Bar data={data} options={options} />;
}
