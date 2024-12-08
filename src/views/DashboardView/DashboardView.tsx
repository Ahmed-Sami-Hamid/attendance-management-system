// Components
import { StatusCard, Container } from "../../components";

// Style
import Style from "./DashboardView.module.css";

export const DashboardView = () => {
  return (
    <>
      <Container>
        <div className={Style.wrapper}>
          <StatusCard />
        </div>
      </Container>
    </>
  );
};
