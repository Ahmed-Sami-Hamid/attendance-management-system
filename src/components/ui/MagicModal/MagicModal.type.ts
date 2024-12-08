export type ModalOptions = {
  contentStyle?: React.CSSProperties;
  contentClassName?: string;
  overlayStyle?: React.CSSProperties;
  overlayClassName?: string;
  modalStyle?: React.CSSProperties;
  modalClassName?: string;
  closeIconStyle?: React.CSSProperties;
  closeIconClassName?: string;
  closeIcon?: JSX.Element;
  showCloseIcon?: boolean;
  destroyBodyOnClose?: boolean;
  onModalOpen?: () => void;
  onModalHide?: () => void;
  onBodyUpdate?: () => void;
  onModalDestroy?: () => void;
  onCloseIconClick?: () => void;
};

export interface ModalComponentProps extends ModalOptions {
  body: JSX.Element | null;
}

export type ModalHandle = {
  open?: () => void;
  hide: () => void;
  updateBody: (body: JSX.Element | null, options?: ModalOptions) => void;
  destroy: () => void;
  isOpen?: () => boolean;
};
