// Types
import { StatusDataType } from "../../../data/statusData";

// Style
import Style from "./LeavesStatus.module.css";

export const LeavesStatus: React.FC<StatusDataType> = ({
  icon,
  status,
  number,
}) => {
  const getColor = (status: string): string => {
    switch (status) {
      case "Pending":
        return "#d5b500";
      case "Approved":
        return "#31b256";
      case "Rejected":
        return "#aa0000";
      default:
        return "#f5f5f5";
    }
  };

  return (
    <div className={Style.wrapper}>
      <div className={Style.iconWrapper}>{icon}</div>
      <div className={Style.cardWrapper}>
        <h2 className={Style.statusNum} style={{ color: getColor(status) }}>
          {number}
        </h2>
        <p className={Style.title} style={{ color: getColor(status) }}>
          {status} Leaves
        </p>
      </div>
    </div>
  );
};
