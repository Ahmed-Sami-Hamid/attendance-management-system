import { useState } from "react";

// Components
// import { Avatar, MenuProfile } from "../../../components";

// Styles
import Style from "./Navbar.module.css";

// Types
import { NavBarTypes } from "./Navbar.types";

export const Navbar: React.FC<NavBarTypes> = ({ menuOpen }) => {
  // Hooks
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <div className={menuOpen ? Style.navBarWrapperOpen : Style.navBarWrapper}>
      <div></div>
      {/* <Avatar settings={settings} setSettings={setSettings} />
      <MenuProfile settings={settings} setSettings={setSettings} /> */}
    </div>
  );
};
