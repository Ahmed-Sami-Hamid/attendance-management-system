// Components
import { StatusCard, Container } from "../../components";

// Style
import Style from "./DashboardView.module.css";

export const DashboardView = () => {
  return (
    <>
      <Container>
        <div className={Style.wrapper}>
          <div className={Style.cardsWrapper}>
            <StatusCard title={"Sick Leave"} total={7} used={4} />
            <StatusCard title={"Sick Leave"} total={7} used={4} />
            <StatusCard title={"Sick Leave"} total={7} used={4} />
            <StatusCard title={"Sick Leave"} total={7} used={4} />
          </div>
        </div>
      </Container>
    </>
  );
};
