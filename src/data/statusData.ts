export type StatusDataType = {
  icon: string;
  status: string;
  number: number;
};

export const statusData: StatusDataType[] = [
  {
    icon: "https://via.placeholder.com/50?text=P",
    status: "Pending",
    number: 5,
  },
  {
    icon: "https://via.placeholder.com/50?text=A",
    status: "Approved",
    number: 15,
  },
  {
    icon: "https://via.placeholder.com/50?text=R",
    status: "Rejected",
    number: 2,
  },
];
