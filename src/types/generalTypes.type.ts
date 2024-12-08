/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalHandle } from "../components/ui/MagicModal/MagicModal.type";
export type OutletContextType = {
  generalModalRef: React.RefObject<ModalHandle>;
  generalErrorsResolver: (a: any) => void;
};

//for table types
export type HistoryModalDetails = {
  type: string;
  token: string;
  amount: string;
  status: string;
  conversion_rate: number;
  value_in_usdt: number;
  explorer_link: string;
  remaraks: string;
  date: string;
};

export type TxnData = {
  id: number;
  token: string;
  amount: string;
  status: string;
  date: string;
  type?: string | null;
  address?: string | null;
  lockupPeriod?: string | null;
  details?: HistoryModalDetails;
};
