import {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useMemo,
  ForwardRefRenderFunction,
} from "react";

// Types
import {
  ModalComponentProps,
  ModalHandle,
  ModalOptions,
} from "./MagicModal.type";

// Utils
import { classNames } from "../../../utils";

// Icons
import { AiOutlineClose } from "react-icons/ai";

// Styles
import Style from "./MagicModal.module.css";

const ModalComponent: ForwardRefRenderFunction<
  ModalHandle,
  ModalComponentProps
> = (
  {
    body,
    contentStyle,
    contentClassName = Style.content,
    overlayStyle,
    overlayClassName = Style.overlay,
    modalStyle,
    modalClassName = Style.modal,
    closeIconStyle,
    closeIconClassName = Style.hideModal,
    closeIcon = (
      <span className={Style.hideButton}>
        <AiOutlineClose />
      </span>
    ),
    showCloseIcon = true,
    destroyBodyOnClose = true,
    onModalOpen = () => {},
    onModalHide = () => {},
    onBodyUpdate = () => {},
    onModalDestroy = () => {},
    onCloseIconClick = () => {},
  },
  ref
) => {
  const [hide, setHide] = useState(true);
  const [destroy, setDestroy] = useState(true);
  const [computedBody, setComputedBody] = useState<JSX.Element | null>(body);
  const [computedOptions, setComputedOptions] = useState<Partial<ModalOptions>>(
    {}
  );

  const defaultRef = useRef<ModalHandle | null>(null);
  const modalRef =
    (ref as React.MutableRefObject<ModalHandle | null>) || defaultRef;

  const computedModalOptions = useMemo(
    () => ({
      computedContentStyle: computedOptions.contentStyle || contentStyle,
      computedOverlayStyle: computedOptions.overlayStyle || overlayStyle,
      computedModalStyle: computedOptions.modalStyle || modalStyle,
      computedCloseIconStyle: computedOptions.closeIconStyle || closeIconStyle,
      computedContentClassName:
        computedOptions.contentClassName || contentClassName,
      computedOverlayClassName:
        computedOptions.overlayClassName || overlayClassName,
      computedModalClassName: computedOptions.modalClassName || modalClassName,
      computedCloseIconClassName:
        computedOptions.closeIconClassName || closeIconClassName,
      computedOnModalHide: computedOptions.onModalHide || onModalHide,
      computedOnModalOpen: computedOptions.onModalOpen || onModalOpen,
      computedOnBodyUpdate: computedOptions.onBodyUpdate || onBodyUpdate,
      computedOnModalDestroy: computedOptions.onModalDestroy || onModalDestroy,
      computedOnCloseIconClick:
        computedOptions.onCloseIconClick || onCloseIconClick,
      computedCloseIcon: computedOptions.closeIcon || closeIcon,
      computedShowCloseIcon: computedOptions.showCloseIcon ?? showCloseIcon,
      computedDestroyBodyOnClose:
        computedOptions.destroyBodyOnClose ?? destroyBodyOnClose,
    }),
    [
      contentStyle,
      contentClassName,
      overlayStyle,
      overlayClassName,
      modalStyle,
      modalClassName,
      closeIconStyle,
      closeIconClassName,
      closeIcon,
      showCloseIcon,
      destroyBodyOnClose,
      onModalOpen,
      onModalHide,
      onBodyUpdate,
      onModalDestroy,
      onCloseIconClick,
      computedOptions,
    ]
  );

  useImperativeHandle(
    modalRef,
    () => ({
      open() {
        setDestroy(false);
        setHide(false);
        computedModalOptions.computedOnModalOpen();
      },
      hide() {
        setHide(true);
        computedModalOptions.computedOnModalHide();
      },
      updateBody(body: JSX.Element | null, options: ModalOptions = {}) {
        computedModalOptions.computedOnModalOpen();
        computedModalOptions.computedOnBodyUpdate();
        setDestroy(false);
        setHide(false);
        setComputedBody(body);
        setComputedOptions(options);
      },
      destroy() {
        setDestroy(true);
        setComputedBody(null);
        computedModalOptions.computedOnModalDestroy();
      },
      isOpen() {
        return !hide;
      },
    }),
    [
      computedModalOptions.computedOnModalHide,
      computedModalOptions.computedOnModalOpen,
      computedModalOptions.computedOnBodyUpdate,
      computedModalOptions.computedOnModalDestroy,
      computedModalOptions.computedOnCloseIconClick,
      hide,
    ]
  );

  if (destroy) return null;

  return (
    <div
      className={classNames(
        Style.window,
        computedModalOptions.computedOverlayClassName
      )}
      style={{
        ...computedModalOptions.computedOverlayStyle,
        display: hide ? "none" : "block",
      }}
    >
      <div
        className={classNames(
          computedModalOptions.computedModalClassName,
          Style.modalWindow
        )}
        style={computedModalOptions.computedModalStyle}
      >
        <div
          className={classNames(
            Style.content,
            computedModalOptions.computedContentClassName
          )}
          style={computedModalOptions.computedContentStyle}
        >
          {computedModalOptions.computedShowCloseIcon && (
            <div
              style={computedModalOptions.computedCloseIconStyle}
              className={computedModalOptions.computedCloseIconClassName}
            >
              <span
                onClick={() => {
                  computedModalOptions.computedOnCloseIconClick();
                  computedModalOptions.computedOnModalHide();
                  if (computedModalOptions.computedDestroyBodyOnClose) {
                    modalRef.current?.destroy();
                  } else {
                    modalRef?.current?.hide();
                  }
                }}
              >
                {computedModalOptions.computedCloseIcon}
              </span>
            </div>
          )}
          {computedBody}
        </div>
      </div>
    </div>
  );
};

export const MagicModal = forwardRef(ModalComponent);
