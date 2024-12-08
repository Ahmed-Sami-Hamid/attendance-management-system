import { createContext, useContext, useState } from "react";

import {
  AttendanceStatus,
  AttendanceStatusEnum,
  mockAttendenceOverview,
} from "../../data";
import { CalendarIcon, SettingsIcon } from "../../assets/svgComponents";
import { AttendanceTable, Button, Container } from "./../../components";

import Style from "./AttendanceView.module.css";

type AttendanceViewState = {
  stateEnum: "idel" | "busy" | "success" | "error";
  attendanceHistory: typeof mockAttendenceOverview;
  selectedAttendanceStatus: AttendanceStatus | "ALL";
  selectedDate: Date | null;
};

type AttendanceViewActions = {
  changeSelectedAttendanceStatus: (status: AttendanceStatus) => void;
  changeSelectedDate: (date: Date) => void;
  changeSelectedFromDate: (date: Date) => void;
};

type IAttendanceViewContext = {
  state: AttendanceViewState;
  actions: AttendanceViewActions;
};

const AttendanceViewContext = createContext<IAttendanceViewContext | null>(
  null
);

export const useAttendanceViewContext = (): IAttendanceViewContext => {
  const context = useContext(AttendanceViewContext);
  if (!context) {
    throw new Error("Unable to find provider of AttendanceViewContext");
  }
  return context;
};

const filterAttendanceOverview = (
  date?: Date | null,
  status?: AttendanceStatus | "ALL"
): typeof mockAttendenceOverview => {
  let filteredAttendanceHistory = mockAttendenceOverview;

  if (date) {
    const filterDateInMs = date.setHours(0, 0, 0, 0);
    filteredAttendanceHistory = filteredAttendanceHistory.filter((value) => {
      const dateInMs = new Date(value.date).setHours(0, 0, 0, 0);
      return dateInMs === filterDateInMs;
    });
  }

  if (status) {
    filteredAttendanceHistory = filteredAttendanceHistory.filter((value) =>
      status === "ALL" ? true : status === value.status
    );
  }

  return filteredAttendanceHistory;
};

const useAttendanceView = (): IAttendanceViewContext => {
  const [attendanceHistory, setAttendanceHistory] = useState(
    () => mockAttendenceOverview
  );

  const [selectedAttendanceStatus, setAttendanceStatus] =
    useState<AttendanceViewState["selectedAttendanceStatus"]>("ALL");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const changeSelectedDate: AttendanceViewActions["changeSelectedDate"] = (
    date
  ) => {
    const filteredAttendanceHistory = filterAttendanceOverview(
      date,
      selectedAttendanceStatus
    );
    setSelectedDate(date);
    setAttendanceHistory(filteredAttendanceHistory);
  };

  const changeSelectedAttendanceStatus: AttendanceViewActions["changeSelectedAttendanceStatus"] =
    (status) => {
      const attendanceHistory = filterAttendanceOverview(selectedDate, status);
      setAttendanceStatus(status);
      setAttendanceHistory(attendanceHistory);
    };

  const changeSelectedFromDate: AttendanceViewActions["changeSelectedFromDate"] =
    (date) => {};

  return Object.freeze<IAttendanceViewContext>({
    state: {
      stateEnum: "idel",
      attendanceHistory,
      selectedAttendanceStatus: selectedAttendanceStatus,
      selectedDate,
    },
    actions: {
      changeSelectedDate,
      changeSelectedAttendanceStatus,
      changeSelectedFromDate,
    },
  });
};

const AttendanceViewProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { state, actions } = useAttendanceView();

  return (
    <AttendanceViewContext.Provider value={{ state, actions }}>
      {children}
    </AttendanceViewContext.Provider>
  );
};

export const AttendanceView = () => {
  return (
    <AttendanceViewProvider>
      <Container>
        <Wrapper>
          <TableCard>
            <TableCardHeader />
            <Divider marginInline={"2rem"} />
            <AttendanceTable />
          </TableCard>
        </Wrapper>
      </Container>
    </AttendanceViewProvider>
  );
};

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={Style.wrapper}>{children}</div>;
};

const TableCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={Style.tableCard}>{children}</div>;
};

const TableCardHeader: React.FC = () => {
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

const attendanceStatuToTextMap: Record<AttendanceStatusEnum, string> = {
  [AttendanceStatusEnum.ALL]: "All",
  [AttendanceStatusEnum.PRESENT]: "Present",
  [AttendanceStatusEnum.LEAVE]: "Leave",
  [AttendanceStatusEnum.EARLYOUT]: "Early out",
};

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
          <label htmlFor={status}>{attendanceStatuToTextMap[status]}</label>
        </li>
      ))}
    </ul>
  );
};

const TableCardAttendanceCalendarBtns: React.FC = () => {
  // const { actions } = useAttendanceViewContext();

  return (
    <div className={Style.filterButtonsContainer}>
      <Button className={Style.calendarButton}>
        <CalendarIcon />
        <span>29 July 2023</span>
      </Button>
      <Button className={Style.attendenceButton} size="large">
        <SettingsIcon />
        <span>View Attendence</span>
      </Button>
    </div>
  );
};

const Divider: React.FC<
  { color?: string; height?: string | number } & Pick<
    React.CSSProperties,
    "marginInline" | "marginTop" | "marginBottom"
  >
> = ({ color, height = "1px", ...props }) => {
  return (
    <hr
      style={{
        backgroundColor: `var(--border-color,${color ? color : "##D5D9DD"})`,
        height,
        ...props,
      }}
    />
  );
};
