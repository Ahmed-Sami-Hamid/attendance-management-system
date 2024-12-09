// Style
import Style from "./LoaderAnimation.module.css";

const LoaderAnimation: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.loaderWrapper}>
        <section className={Style.dotsContainer}>
          <div className={Style.dot}></div>
          <div className={Style.dot}></div>
          <div className={Style.dot}></div>
          <div className={Style.dot}></div>
          <div className={Style.dot}></div>
        </section>
      </div>
    </div>
  );
};

export default LoaderAnimation;
