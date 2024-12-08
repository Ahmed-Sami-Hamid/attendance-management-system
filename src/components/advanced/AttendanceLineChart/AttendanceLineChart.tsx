import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Style
import Style from "./AttendanceLineChart.module.css";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const AttendanceLineChart: React.FC = () => {
  // Attendance data over the month
  const data = {
    labels: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th",
    ], // Days of the month
    datasets: [
      {
        label: "Present Days",
        data: [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1], // 1 = Present, 0 = Absent
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill under line
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Data points
      },
      {
        label: "Absent Days",
        data: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], // 1 = Absent, 0 = Present
        borderColor: "rgba(255, 99, 132, 1)", // Line color
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Fill under line
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Data points
      },
      {
        label: "Leave Days",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Leave on 12th
        borderColor: "rgba(255, 206, 86, 1)", // Line color
        backgroundColor: "rgba(255, 206, 86, 0.2)", // Fill under line
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "rgba(255, 206, 86, 1)", // Data points
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Legend on top
      },
      title: {
        display: true,
        text: "Attendance Trends for John Doe (December)",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        title: {
          display: true,
          text: "Days of the Month",
        },
      },
      y: {
        beginAtZero: true, // Start at 0
        title: {
          display: true,
          text: "Attendance Status (1 = Present, 0 = Absent)",
        },
        ticks: {
          stepSize: 1, // Ensure values are 0 or 1
        },
      },
    },
  };

  return (
    <div className={Style.wrapper}>
      <Line data={data} options={options} />
    </div>
  );
};
