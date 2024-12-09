interface AdditionalInfo {
  totalDaysWorked: number;
  leaveBalance: number;
  pendingRequests: number;
}

interface LeaveStatus {
  title: string;
  total: number;
  used: number;
  additionalInfo: AdditionalInfo;
}

export const leavesData: LeaveStatus[] = [
  {
    title: "Sick Leave",
    total: 7,
    used: 4,
    additionalInfo: {
      totalDaysWorked: 150,
      leaveBalance: 3,
      pendingRequests: 2,
    },
  },
  {
    title: "Casual Leave",
    total: 10,
    used: 5,
    additionalInfo: {
      totalDaysWorked: 150,
      leaveBalance: 5,
      pendingRequests: 1,
    },
  },
  {
    title: "Annual Leave",
    total: 21,
    used: 18,
    additionalInfo: {
      totalDaysWorked: 150,
      leaveBalance: 3,
      pendingRequests: 0,
    },
  },

  {
    title: "Unpaid Leave",
    total: 30,
    used: 5,
    additionalInfo: {
      totalDaysWorked: 150,
      leaveBalance: 25,
      pendingRequests: 0,
    },
  },
];
