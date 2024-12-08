// Types
import { CardProps } from "./MainCard.types";

// Style
import Style from "./MainCard.module.css";

export const MainCard: React.FC<CardProps> = ({
  children,
  maxWidth = "252px",
}) => {
  return (
    <div style={{ maxWidth: maxWidth }} className={Style.wrapper}>
      {children}
    </div>
  );
};
