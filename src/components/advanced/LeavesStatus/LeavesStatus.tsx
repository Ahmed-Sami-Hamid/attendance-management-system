// Types
import { StatusDataType } from "../../../data/statusData";

// Style
import Style from "./LeavesStatus.module.css";

export const LeavesStatus: React.FC<StatusDataType> = ({
  icon,
  status,
  number,
}) => {
  // Helper function to determine color
  const getColor = (status: string): string => {
    switch (status) {
      case "Pending":
        return "#fff8e7";
      case "Approved":
        return "#f7ffe9";
      case "Rejected":
        return "#ffe5ee";
      default:
        return "#f5f5f5"; // Fallback color
    }
  };

  return (
    <div
      className={Style.wrapper}
      style={{ backgroundColor: getColor(status) }}
    >
      <div className={Style.iconWrapper}>{icon}</div>
      <div className={Style.cardWrapper}>
        <h2 className={Style.statusNum}>{number}</h2>
        <p className={Style.title}>{status} Leaves</p>
      </div>
    </div>
  );
};
