// Components
import { Button } from "../../ui";

// Context
import { useAttendanceViewContext } from "../../../contexts/AttendanceViewContext";

// Data
import { AttendanceStatus, AttendanceStatusEnum } from "../../../data/mockData";

// SVGs
import { CalendarIcon } from "../../../assets/svgComponents";

// Style
import Style from "./TableCardHeader.module.css";

const TableCardAttendanceHeaderFilter: React.FC = () => {
  const { state, actions } = useAttendanceViewContext();

  const handleOnStatusChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const status = e.currentTarget.value;
    actions.changeSelectedAttendanceStatus(status as AttendanceStatus);
  };

  return (
    <ul className={Style.filterListContainer}>
      {Object.values(AttendanceStatusEnum).map((status, index) => (
        <li key={index + status}>
          <input
            id={status}
            type="radio"
            name="tableFilter"
            value={status}
            checked={state.selectedAttendanceStatus === status}
            onChange={handleOnStatusChange}
          />
          <label htmlFor={status}>{status}</label>
        </li>
      ))}
    </ul>
  );
};

const TableCardAttendanceCalendarBtns: React.FC = () => {
  return (
    <div className={Style.filterButtonsContainer}>
      <Button className={Style.calendarButton}>
        <CalendarIcon />
        <span>29 July 2023</span>
      </Button>
    </div>
  );
};

export const TableCardHeader: React.FC = () => {
  return (
    <div className={Style.tableHeaderWarpper}>
      <div className={Style.titleContainer}>
        <h1 className={Style.title}>Attendance Overview</h1>
      </div>
      <div className={Style.filterWrapper}>
        <TableCardAttendanceHeaderFilter />
        <TableCardAttendanceCalendarBtns />
      </div>
    </div>
  );
};
