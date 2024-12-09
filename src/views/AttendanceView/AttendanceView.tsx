// Context
import { AttendanceViewProvider } from "../../contexts/AttendanceViewProvider";

// Components
import {
  Container,
  PageHeader,
  AttendanceTable,
  TableCardHeader,
  Divider,
} from "../../components";

// Style
import Style from "./AttendanceView.module.css";

export const AttendanceView: React.FC = () => {
  return (
    <AttendanceViewProvider>
      <Container>
        <PageHeader title="Attendance History" />
        <TableCard>
          <TableCardHeader />
          <Divider marginInline={"0"} />
          <AttendanceTable />
        </TableCard>
      </Container>
    </AttendanceViewProvider>
  );
};

const TableCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={Style.tableCard}>{children}</div>;
};
