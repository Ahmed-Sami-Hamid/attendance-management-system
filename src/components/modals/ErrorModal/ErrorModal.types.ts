import { ModalHandle } from "@/components/ui/MagicModal/MagicModal.type";
import { RefObject } from "react";

export type ErrorModalProps = {
  onClickButton?: () => void;
  modalRef: RefObject<ModalHandle>; // Adjust the type of `modalRef` if needed
  title?: string;
  description?: string;
};
