// Images
import MainLogo from "../../../../assets/images/Logo.png";

// Style
import Style from "./LoaderAnimation.module.css";

const LoaderAnimation: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.loaderWrapper}>
        <div className={Style.loader}></div>
        <img src={MainLogo} className={Style.loaderImage} alt="" />
      </div>
    </div>
  );
};

export default LoaderAnimation;
