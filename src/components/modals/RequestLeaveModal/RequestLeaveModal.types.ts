export type LeaveRequest = {
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
};

export type ExistingLeave = {
  leaveType: string;
  startDate: string;
  endDate: string;
};
