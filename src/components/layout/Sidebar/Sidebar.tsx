import { useState } from "react";

import { useLocation, Link } from "react-router-dom";

// Hooks
import { useWindowSize } from "../../../hooks";

// SVGs
import {
  HomeIcon,
  Message,
  History,
  Arrows,
} from "../../../assets/svgComponents";

// Style
import Style from "./Sidebar.module.css";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Toggle state for sidebar

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const location = useLocation(); // Get the current route

  const { width } = useWindowSize(); // Get window size
  const isMobile = width && width <= 768; // Check if the window width is less than or equal to 768px

  return (
    <div className={Style.wrapper}>
      <div
        className={
          isCollapsed
            ? Style.container
            : isMobile
            ? Style.containerCollapsed
            : Style.container
        }
      >
        <div
          className={isCollapsed ? Style.toggleButton : Style.toggleButtonTwice}
          onClick={toggleSidebar}
        >
          <Arrows />
        </div>

        <div
          className={location.pathname === "/" ? Style.activeLink : Style.link}
        >
          <Link to="/">
            <HomeIcon
              stroke={location.pathname === "/" ? "#0074bd" : "#A3AED0"}
            />
          </Link>
        </div>

        <div
          className={
            location.pathname === "/attendance" ? Style.activeLink : Style.link
          }
        >
          <Link to="/attendance">
            <History
              stroke={location.pathname === "/attendance" ? "#0074bd" : "white"}
            />
          </Link>
        </div>

        <div
          className={
            location.pathname === "/leave-requests"
              ? Style.activeLink
              : Style.link
          }
        >
          <Link to="/leave-requests">
            <Message
              stroke={
                location.pathname === "/leave-requests" ? "#0074bd" : "#A3AED0"
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
