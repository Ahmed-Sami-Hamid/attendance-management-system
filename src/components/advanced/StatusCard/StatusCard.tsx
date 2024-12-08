// Components
import { MainCard } from "../MainCard";

// Types
import { StatusCardProps } from "./StatusCard.types";

// Style
import Style from "./StatusCard.module.css";

export const StatusCard: React.FC<StatusCardProps> = ({
  total,
  used,
  title,
}) => {
  const remaining = total - used;
  const progressPercentage = (used / total) * 100;

  return (
    <MainCard>
      <div className={Style.wrapper}>
        <div className={Style.circleContainer}>
          <div
            className={Style.circleProgress}
            style={{
              background: `conic-gradient(#0074bd ${progressPercentage}%, #e0e0e0 ${progressPercentage}%)`,
            }}
          >
            <div className={Style.circleText}>
              <span>0{used}</span>
              <strong>/</strong>0{total}
            </div>
          </div>
        </div>

        {/* Data Breakdown */}
        <div>
          <p className={Style.mainTitle}>{title}</p>
          <p className={Style.text}>
            <div className={Style.dotTotal} /> Total - {total}
          </p>
          <p className={Style.text}>
            <div className={Style.dotUsed} /> Used - {used}
          </p>
          <p className={Style.text}>
            <div className={Style.dotRem} /> Remaining - {remaining}
          </p>
        </div>
      </div>
    </MainCard>
  );
};
