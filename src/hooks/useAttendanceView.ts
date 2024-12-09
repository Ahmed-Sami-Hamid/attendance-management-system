import { useState } from "react";
import { mockAttendenceOverview, AttendanceStatus } from "../data";
import {
  AttendanceViewState,
  AttendanceViewActions,
  IAttendanceViewContext,
} from "../types";

const filterAttendanceOverview = (
  date?: Date | null,
  status?: AttendanceStatus | "ALL"
) => {
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

export const useAttendanceView = (): IAttendanceViewContext => {
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
    () => {};

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
