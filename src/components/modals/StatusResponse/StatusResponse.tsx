//utils
import { classNames } from "../../../utils";

//components
import { Button } from "../../../components/ui";

// Props Types
import { StatusResponseProps } from "./StatusResponse.types";

// Style
import Style from "./StatusResponse.module.css";

// Images
import SuccessfullyDone from "../../../assets/images/successfully-done.png";

export const StatusResponse: React.FC<StatusResponseProps> = ({
  modalRef,
  onClick,
  SuccessTitle = "Success",
  SuccessDescription = "Operation passed successfully",
}) => {
  return (
    <div className={Style.validationWrapper}>
      <img src={SuccessfullyDone} alt="Under Process" height={72} width={72} />

      <h4>{SuccessTitle}</h4>
      <p className={classNames(Style.subtitle, Style.marginSpace)}>
        {SuccessDescription}
      </p>

      <Button
        maxWidth="160px"
        isLoading={false}
        size="medium"
        onClick={
          onClick
            ? onClick
            : () => {
                if (modalRef.current) {
                  modalRef.current.destroy();
                }
              }
        }
      >
        Done
      </Button>
    </div>
  );
};
