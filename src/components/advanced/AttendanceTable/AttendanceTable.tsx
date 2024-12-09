import { useAttendanceViewContext } from "../../../contexts/AttendanceViewContext";
import { AttendanceStatus, mockAttendenceOverview } from "../../../data";
import Style from "./AttendanceTable.module.css";

export const AttendanceTable = () => {
  const { state } = useAttendanceViewContext();
  const attendanceOverviews = state.attendanceHistory;
  return (
    <div className={Style.wrapper}>
      <table className={Style.table}>
        <thead>
          <tr>
            <th className={Style.header}>Date</th>
            <th className={Style.header}>Day</th>
            <th className={Style.header}>Checkin</th>
            <th></th>
            <th className={Style.header}>Checkout</th>
            <th className={Style.header}>Work Hours</th>
            <th className={Style.header}>Status</th>
          </tr>
          <tr>
            <th colSpan={7}>
              <hr />
            </th>
          </tr>
        </thead>
        <tbody>
          {attendanceOverviews.map((value, index) => (
            <AttendanceTableRow key={index} row={value} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

enum ChipStatus {
  Primary = "primary",
  Error = "error",
  Warn = "warn",
  Disabled = "Disabled",
}

const StatusChip: React.FC<{
  text: string;
  status?: ChipStatus;
}> = ({ text, status = "primary" }) => {
  return (
    <div className={Style.statusChip} data-status={status}>
      {text}
    </div>
  );
};

const timeFormatOption: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h24",
};

const dateFormatOption: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "long",
  year: "numeric",
};

const attendenceStatusToChipStatusMap: Record<AttendanceStatus, ChipStatus> = {
  PRESENT: ChipStatus.Primary,
  EARLYOUT: ChipStatus.Warn,
  LEAVE: ChipStatus.Error,
};

const attendenceStatusToTextMap: Record<AttendanceStatus, string> = {
  PRESENT: "Present",
  LEAVE: "Leave",
  EARLYOUT: "Early out",
};

const DEFAULT_WORK_HOURS = 8;

const AttendanceTableRow: React.FC<{
  row: (typeof mockAttendenceOverview)[0];
}> = ({ row }) => {
  // caculated values
  const date = new Date(row.date).toLocaleDateString("en-US", dateFormatOption);

  const dayOfWeek = getDayFromDate(row.date);

  const checkinTime = new Date(row.checkin).toLocaleTimeString(
    "en-US",
    timeFormatOption
  );

  const checkoutTime = new Date(row.checkout).toLocaleTimeString(
    "en-US",
    timeFormatOption
  );

  const workHoursInMilliseconds =
    new Date(row.checkout).getTime() - new Date(row.checkin).getTime();

  const workHours = convertMillisecondsToHours(workHoursInMilliseconds);

  const fomrattedWorkHours = formatDecimalHoursToString(workHours);

  const chipStatus =
    attendenceStatusToChipStatusMap[row.status] || ChipStatus.Disabled;

  const chipText = attendenceStatusToTextMap[row.status] || "N/A";

  const workHoursStatus = mapTotalWorkHoursToStatus(workHours);

  return (
    <tr>
      <td>
        <span className={Style.cellText}>{date}</span>
      </td>
      <td>
        <span className={Style.cellText}>{dayOfWeek}</span>
      </td>
      <td>
        <span className={Style.cellText} data-status={workHoursStatus}>
          {checkinTime}
        </span>
      </td>
      <td>-----------</td>
      <td>
        <span className={Style.cellText} data-status={workHoursStatus}>
          {checkoutTime}
        </span>
      </td>
      <td>
        <span className={Style.cellText} data-status={workHoursStatus}>
          {fomrattedWorkHours}
        </span>
      </td>
      <td>
        <StatusChip text={chipText} status={chipStatus} />
      </td>
    </tr>
  );
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const getDayFromDate = (dateString: string) => {
  const date = new Date(dateString);

  return daysOfWeek[date.getDay()];
};

const convertMillisecondsToHours = (ms: number): number => {
  return ms / (1000 * 60 * 60);
};

const formatDecimalHoursToString = (decimalHours: number) => {
  const hours = Math.floor(decimalHours); // Extract the whole hours
  const minutes = Math.round((decimalHours - hours) * 60); // Convert the fractional part to minutes
  return `${hours}h ${minutes}m`;
};

const mapTotalWorkHoursToStatus = (workHours: number): string | undefined => {
  if (workHours <= 0) {
    return "error";
  }

  if (workHours < DEFAULT_WORK_HOURS) {
    return "warn";
  }

  if (workHours === DEFAULT_WORK_HOURS) {
    return "primary";
  }

  return "advanced";
};
