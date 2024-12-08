// Components
import { StatusCard, Container, AttendanceActions } from "../../components";

// Style
import Style from "./DashboardView.module.css";

export const DashboardView = () => {
  return (
    <>
      <Container>
        <div className={Style.wrapper}>
          <div className={Style.attendanceWrapper}>
            <AttendanceActions />
            <div className={Style.cardsWrapper}>
              <StatusCard title={"Sick Leave"} total={7} used={4} />
              <StatusCard title={"Sick Leave"} total={7} used={2} />
              <StatusCard title={"Sick Leave"} total={7} used={1} />
              <StatusCard title={"Sick Leave"} total={7} used={5} />
              <StatusCard title={"Sick Leave"} total={7} used={6} />
              <StatusCard title={"Sick Leave"} total={7} used={7} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
