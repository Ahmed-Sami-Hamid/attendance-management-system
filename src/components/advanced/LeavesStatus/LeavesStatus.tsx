// Types
import { StatusDataType } from "../../../data/statusData";

// Style
import Style from "./PendingLeaves.module.css";

export const LeavesStatus: React.FC<StatusDataType> = ({
  icon,
  status,
  number,
}) => {
  let color;
  if (status === "Pending") {
    color = "#fff8e7";
  }
  if (status === "Approved") {
    color = "#e6effc";
  }
  if (status === "Rejected") {
    color = "#ffe5ee";
  }
  return (
    <div className={Style.wrapper} style={{ backgroundColor: color }}>
      <div className={Style.iconWrapper}>{icon}</div>
      <div className={Style.cardWrapper}>
        <h2 className={Style.statusNum}>{number}</h2>
        <p className={Style.title}>{status} Leaves</p>
      </div>
    </div>
  );
};
