export type StatusDataType = {
  icon: string;
  status: string;
  number: number;
};

export const statusData: StatusDataType[] = [
  {
    icon: "😁",
    status: "Approved",
    number: 15,
  },
  {
    icon: "⏳",
    status: "Pending",
    number: 5,
  },

  {
    icon: "❌",
    status: "Rejected",
    number: 2,
  },
];
