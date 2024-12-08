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
  // Sample Data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Legend position
      },
      title: {
        display: true,
        text: "Monthly Sales Data", // Chart title
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable gridlines on X-axis
        },
      },
      y: {
        beginAtZero: true, // Start Y-axis at 0
      },
    },
  };

  return <Bar data={data} options={options} />;
};
