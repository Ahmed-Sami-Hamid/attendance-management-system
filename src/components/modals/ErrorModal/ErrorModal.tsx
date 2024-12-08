// Components
import { ModalHandle } from "../../../components/ui/MagicModal/MagicModal.type";

// Images
import { Button } from "../../../components/ui";
import Error from "../../../assets/images/error-icon.png";

// Types
import { ErrorModalProps } from "./ErrorModal.types";

// Styles
import Style from "./ErrorModal.module.css";

export const ErrorModal: React.FC<ErrorModalProps> = ({
  onClickButton = () => {},
  modalRef,
  title,
  description,
}) => {
  return (
    <>
      <div className={Style.error}>
        <img
          rel="preload"
          className={Style.icon}
          src={Error}
          alt=""
          draggable="false"
        />
        <h5>{title || "Operation Failed"}</h5>
        <p>{description || "please contact the support team"}</p>

        <div className={Style.button}>
          <Button
            className={Style.close}
            onClick={() => {
              onClickButton();
              (modalRef.current as ModalHandle).destroy();
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
};
