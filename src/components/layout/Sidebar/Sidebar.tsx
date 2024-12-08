// Style
import { Link } from "react-router-dom";
import Style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.sidebar}>
        <ul className={Style.list}>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/attendance">Attendance</Link>
          </li>
          <li>
            <Link to="/leave-requests">Leave Requests</Link>
          </li>
          <li>
            <Link to="/team-members">Team Members</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
