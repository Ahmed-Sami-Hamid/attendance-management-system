// Context
import { AttendanceViewProvider } from "../../contexts/AttendanceViewProvider";

// Components
import {
  Container,
  PageHeader,
  AttendanceTable,
  TableCardHeader,
  LoaderWrapper,
} from "../../components";

// Style
import Style from "./AttendanceView.module.css";

export const AttendanceView: React.FC = () => {
  return (
    <LoaderWrapper>
      <AttendanceViewProvider>
        <Container>
          <PageHeader title="Attendance History" />
          <TableCard>
            <TableCardHeader />
            <AttendanceTable />
          </TableCard>
        </Container>
      </AttendanceViewProvider>
    </LoaderWrapper>
  );
};

const TableCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={Style.tableCard}>{children}</div>;
};
