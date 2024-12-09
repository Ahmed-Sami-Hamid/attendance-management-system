export type AttendanceStatus = "PRESENT" | "LEAVE" | "EARLYOUT";

export enum AttendanceStatusEnum {
  ALL = "ALL",
  PRESENT = "PRESENT",
  LEAVE = "LEAVE",
  EARLYOUT = "EARLYOUT",
}

const attendanceStatuses: AttendanceStatus[] = ["PRESENT", "LEAVE", "EARLYOUT"];

const getRandomAttendenceStatus = (): AttendanceStatus => {
  const statusIndex = Math.floor(Math.random() * attendanceStatuses.length);
  return attendanceStatuses[statusIndex] || "EARLYOUT";
};

const getRandomNumberInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const mockAttendenceOverview: {
  date: string;
  checkin: string;
  checkout: string;
  status: AttendanceStatus;
}[] = Array.from({ length: 50 }, (_, index) => {
  const date = new Date();
  date.setDate(index * -1);
  let checkin: Date, checkout: Date;
  const status = getRandomAttendenceStatus();
  switch (status) {
    case "LEAVE":
      {
        checkout = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate()
        );
        checkin = checkout;
      }
      break;
    case "EARLYOUT":
      {
        checkin = new Date(date.getTime());
        checkin.setHours(9, 0, 0, 0);
        const checkoutMins = getRandomNumberInRange(-120, -60);
        checkout = new Date(date.getTime());
        checkout.setHours(18);
        checkout.setMinutes(checkoutMins, 0, 0);
      }
      break;
    case "PRESENT":
      {
        const checkinMins = getRandomNumberInRange(0, 60);
        checkin = new Date(date.getTime());
        checkin.setHours(0, 0, 0, 0);
        checkin.setHours(9);
        checkin.setMinutes(checkinMins);
        checkout = new Date(date.getTime());
        checkout.setHours(18);
      }
      break;
  }

  return {
    date: date.toISOString(),
    checkin: checkin.toISOString(),
    checkout: checkout.toISOString(),
    status,
  };
});
