export const mockEmployeeData = {
  employeeId: "EMP123",
  name: "Ahmed Sami",
  attendanceSummary: {
    totalDaysWorked: 20,
    leaveBalance: 5,
    pendingLeaveRequests: 2,
    attendanceHistory: [
      { date: "2024-12-01", status: "Present" },
      { date: "2024-12-02", status: "Leave" },
      { date: "2024-12-03", status: "Early Out" },
      { date: "2024-12-04", status: "Present" },
    ],
  },
  leaveRequests: [
    {
      requestId: "REQ001",
      leaveType: "Sick",
      startDate: "2024-12-05",
      endDate: "2024-12-06",
      reason: "Fever",
      status: "Pending",
    },
    {
      requestId: "REQ002",
      leaveType: "Vacation",
      startDate: "2024-12-15",
      endDate: "2024-12-20",
      reason: "Family trip",
      status: "Approved",
    },
  ],
};
