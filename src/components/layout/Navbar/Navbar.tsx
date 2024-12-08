import { Link } from "react-router-dom";

// Components
import { Container } from "../../ui";

// Hooks
import { useWindowSize } from "../../../hooks";

// Images
import AvatarImg from "../../../assets/images/userIcon.png";

// SVGs
import { Logo, Support, Notification } from "../../../assets/svgComponents";

// Style
import Style from "./Navbar.module.css";

export const Navbar = () => {
  const { width } = useWindowSize();
  const isMobile = width && width >= 410;
  return (
    <div className={Style.wrapper}>
      <Container>
        <div className={Style.container}>
          <Link to={"/"} className={Style.brandWrapper}>
            <Logo />
          </Link>
          <div className={Style.avatarWrapper}>
            <div className={Style.support}>
              <Support />
            </div>
            <div className={Style.notification}>
              <Notification />
            </div>
            <div className={Style.avatar}>
              <img
                src={AvatarImg}
                alt="User Avatar"
                className={Style.userImag}
              />
              {isMobile && (
                <div>
                  <p className={Style.avatarUserName}>Ahmed Sami</p>
                  <p className={Style.avatarUserName}>
                    <strong>ID: </strong>
                    8430001
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
