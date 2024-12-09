import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Style
import Style from "./AttendancePieChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const AttendancePieChart: React.FC = () => {
  // Attendance data
  const data = {
    labels: ["Present", "Absent", "Leave"], // Categories
    datasets: [
      {
        label: "Attendance Distribution",
        data: [20, 5, 2], // Replace with actual data
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Present: Green
          "rgba(255, 99, 132, 0.6)", // Absent: Red
          "rgba(255, 206, 86, 0.6)", // Leave: Yellow
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // Present border
          "rgba(255, 99, 132, 1)", // Absent border
          "rgba(255, 206, 86, 1)", // Leave border
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Legend position
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const label = data.labels[tooltipItem.dataIndex];
            const value = data.datasets[0].data[tooltipItem.dataIndex];
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className={Style.wrapper}>
      <div className={Style.pieWrapper}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};
