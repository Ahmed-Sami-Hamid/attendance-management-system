import { useState, useEffect } from "react";
import Loader from "./Loader";
import Style from "./Loader.module.css";

type LoaderProps = {
  children: React.ReactNode;
};

export const LoaderWrapper: React.FC<LoaderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (loading) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, [loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={Style.loaderWrapper}>
      <div className={loading ? Style.hidden : ""}>{children}</div>
      {loading && (
        <div className={Style.loaderContainer}>
          <Loader />
        </div>
      )}
    </div>
  );
};
