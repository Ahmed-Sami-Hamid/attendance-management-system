import { useState, useEffect } from "react";

// Context
import { useOutletContext } from "react-router-dom";

// Components
import { MainCard } from "../MainCard";
import { Button } from "../../ui";
import { AttendanceModal } from "../../../components";

// Types
import { OutletContextType } from "../../../types";

// Style
import Style from "./AttendanceActions.module.css";

export const AttendanceActions = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [isMorning, setIsMorning] = useState<boolean>(true);

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();

      // Format time
      const time = now.toLocaleTimeString("en-US", {
        hour12: true,
      });
      setCurrentTime(time);

      // Format date
      const day = now.getDate();
      const suffix =
        day % 10 === 1 && day !== 11
          ? "st"
          : day % 10 === 2 && day !== 12
          ? "nd"
          : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";
      const formattedDate = ` ${day}${suffix} ${now.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      })}`;
      setCurrentDate(formattedDate);

      // Check if it's morning or night
      const hours = now.getHours();
      setIsMorning(hours >= 6 && hours < 18);
    };

    const interval = setInterval(updateTimeAndDate, 1000);
    updateTimeAndDate(); // Initial call
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  //   Contexts
  const { generalModalRef } = useOutletContext<OutletContextType>();

  //open the modal
  const openModalClaim = () => {
    if (generalModalRef.current) {
      generalModalRef.current.updateBody(<AttendanceModal />, {
        showCloseIcon: true,
      });
    }
  };
  return (
    <MainCard>
      <div className={Style.wrapper}>
        <div className={Style.timeWrapper}>
          <p className={Style.timeIcon}>{isMorning ? `☀️` : "🌙"}</p>
          <div className={Style.timeTextWrapper}>
            <p className={Style.timeText}>{currentTime}</p>
            <p className={Style.timeInfo}>Realtime Insight</p>
          </div>
        </div>
        <div className={Style.dateWrapper}>
          <p>Today:</p>
          <p>{currentDate}</p>
        </div>
        <Button
          onClick={() => {
            openModalClaim();
          }}
        >
          + Attendance
        </Button>
      </div>
    </MainCard>
  );
};
