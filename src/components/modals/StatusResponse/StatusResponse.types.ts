import { ModalHandle } from "@/components/ui/MagicModal/MagicModal.type";
import { RefObject } from "react";

export type StatusResponseProps = {
  onClick?: () => void;
  modalRef: RefObject<ModalHandle>;
  SuccessTitle?: string,
  SuccessDescription?: string,
};