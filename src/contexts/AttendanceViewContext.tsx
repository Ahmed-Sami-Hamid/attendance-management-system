import { createContext, useContext } from "react";
import { IAttendanceViewContext } from "../types";

export const AttendanceViewContext =
  createContext<IAttendanceViewContext | null>(null);

export const useAttendanceViewContext = (): IAttendanceViewContext => {
  const context = useContext(AttendanceViewContext);
  if (!context) {
    throw new Error("Unable to find provider of AttendanceViewContext");
  }
  return context;
};
