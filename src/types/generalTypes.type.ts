/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalHandle } from "../components/ui/MagicModal/MagicModal.type";
import { AttendanceStatus, mockAttendenceOverview } from "../data";

export type OutletContextType = {
  generalModalRef: React.RefObject<ModalHandle>;
  generalErrorsResolver: (a: any) => void;
};

//for table types
export type HistoryModalDetails = {
  type: string;
  token: string;
  amount: string;
  status: string;
  conversion_rate: number;
  value_in_usdt: number;
  explorer_link: string;
  remaraks: string;
  date: string;
};

export type TxnData = {
  id: number;
  token: string;
  amount: string;
  status: string;
  date: string;
  type?: string | null;
  address?: string | null;
  lockupPeriod?: string | null;
  details?: HistoryModalDetails;
};

export type AttendanceViewState = {
  stateEnum: "idel" | "busy" | "success" | "error";
  attendanceHistory: typeof mockAttendenceOverview;
  selectedAttendanceStatus: AttendanceStatus | "ALL";
  selectedDate: Date | null;
};

export type AttendanceViewActions = {
  changeSelectedAttendanceStatus: (status: AttendanceStatus) => void;
  changeSelectedDate: (date: Date) => void;
  changeSelectedFromDate: (date: Date) => void;
};

export interface IAttendanceViewContext {
  state: AttendanceViewState;
  actions: AttendanceViewActions;
}
