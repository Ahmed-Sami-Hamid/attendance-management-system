import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Styles
import Style from "./AttendanceChart.module.css";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const AttendanceChart: React.FC = () => {
  // Attendance Data for One Employee
  const data = {
    labels: ["Present", "Absent", "Leave"], // Categories
    datasets: [
      {
        label: "Days",
        data: [20, 5, 5], // Number of days for each category
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Present: Green
          "rgba(255, 99, 132, 0.6)", // Absent: Red
          "rgba(255, 206, 86, 0.6)", // Leave: Yellow
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend as it's self-explanatory
      },
      title: {
        display: true,
        text: "Attendance Breakdown for Employee: Ahmed Sami",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Days",
        },
      },
    },
  };

  return (
    <div className={Style.wrapper}>
      <Bar data={data} options={options} />
    </div>
  );
};
