// Types
import { CardProps } from "./MainCard.types";

// Style
import Style from "./MainCard.module.css";

export const MainCard: React.FC<CardProps> = ({
  children,
  maxWidth = "252px",
  width,
}) => {
  return (
    <div style={{ maxWidth: maxWidth, width: width }} className={Style.wrapper}>
      {children}
    </div>
  );
};
