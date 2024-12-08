// Components
import { Button } from "../Button";

// SVGs
import { TitleIcon } from "../../../assets/svgComponents";

// Types
import { PageHeaderProps } from "./PageHeader.types";

// Style
import Style from "./PageHeader.module.css";

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  onClick,
  buttonTitle,
}) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.titleWrapper}>
        <p className={Style.title}>{title}</p>
        <TitleIcon />
      </div>
      {onClick && (
        <div className={Style.buttonWrapper}>
          <Button onClick={onClick}>{buttonTitle}</Button>
        </div>
      )}
    </div>
  );
};
