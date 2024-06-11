import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);
const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.1
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
                text: 'Line Chart Example',
            },
        },
    };

    return <Line data={data} options={options} />;
};


export default LineChart;