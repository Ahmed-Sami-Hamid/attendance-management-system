export type ButtonSize = "custom" | "small" | "medium" | "large";

export type ButtonProps = {
  maxWidth?: string;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  size?: ButtonSize;
  style?: React.CSSProperties;
};
