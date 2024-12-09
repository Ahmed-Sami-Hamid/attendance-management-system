import { CSSProperties, ReactNode } from "react";
// Components
import LoaderAnimation from "./LoaderAnimation/LoaderAnimation";

// Utils
import { classNames } from "../../../utils";

// Styles
import Style from "./Loader.module.css";

interface LoaderProps {
  loaderClassName?: string;
  imageContainerClassName?: string;
  customLoader?: ReactNode;
  style?: CSSProperties;
  children?: ReactNode;
  loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  loaderClassName,
  imageContainerClassName,
  customLoader,
  style,
  children,
  loading = true,
}) => {
  return (
    <div style={style} className={classNames(Style.loader, loaderClassName)}>
      <div
        className={classNames(
          Style.defaultLoaderImage,
          imageContainerClassName
        )}
      >
        {loading ? (
          !customLoader ? (
            <LoaderAnimation />
          ) : (
            customLoader
          )
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Loader;
