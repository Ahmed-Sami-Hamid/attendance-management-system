// Hooks
import { useAttendanceView } from "../hooks";

// Contexts
import { AttendanceViewContext } from "./AttendanceViewContext";

export const AttendanceViewProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { state, actions } = useAttendanceView();

  return (
    <AttendanceViewContext.Provider value={{ state, actions }}>
      {children}
    </AttendanceViewContext.Provider>
  );
};
