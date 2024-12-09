// Components
import {
  StatusCard,
  Container,
  AttendanceActions,
  PageHeader,
  RequestLeaveModal,
  AttendanceChart,
  AttendancePieChart,
  LoaderWrapper,
  // LeavesStatus,
} from "../../components";

// Context
import { useOutletContext } from "react-router-dom";

// Types
import { OutletContextType } from "../../types";

// Data
import { leavesData } from "../../data";
// import { leavesData, statusData } from "../../data";

// Style
import Style from "./DashboardView.module.css";

export const DashboardView = () => {
  //   Contexts
  const { generalModalRef } = useOutletContext<OutletContextType>();

  //open the modal
  const openModalClaim = () => {
    if (generalModalRef.current) {
      generalModalRef.current.updateBody(<RequestLeaveModal />, {
        showCloseIcon: true,
      });
    }
  };
  return (
    <LoaderWrapper>
      <Container>
        <div className={Style.wrapper}>
          <PageHeader
            title="Dashboard"
            buttonTitle="Request for leave"
            onClick={() => {
              openModalClaim();
            }}
          />
          <div className={Style.attendanceWrapper}>
            <AttendanceActions />
            <div className={Style.cardsWrapper}>
              {leavesData.map((item, index) => (
                <div key={index}>
                  <StatusCard
                    title={item.title}
                    total={item.total}
                    used={item.used}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={Style.chartsWrapper}>
            <AttendanceChart /> <AttendancePieChart />
          </div>

          {/* <div className={Style.statusWrapper}>
            {statusData.map((data, index) => (
              <LeavesStatus key={index} {...data} />
            ))}
          </div> */}
        </div>
      </Container>
    </LoaderWrapper>
  );
};
