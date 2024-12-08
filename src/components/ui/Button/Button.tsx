import { useMemo } from "react";

// Types
import { ButtonProps } from "./Button.types";

// Utils
import { classNames } from "../../../utils";

// Styles
import Style from "./Button.module.css";

export const Button = ({
  maxWidth = "100%",
  onClick,
  disabled = false,
  isLoading = false,
  children,
  className,
  size = "medium",
}: ButtonProps) => {
  const paddingStyles = {
    custom: { padding: "" },
    small: { padding: "10px 24px" },
    medium: { padding: "14px 24px" },
    large: { padding: "16px 24px" },
  };

  //  Custom Styles
  const disabledStyle = {
    background: "#c5c5c5",
    cursor: "not-allowed",
  };

  const isLoadingStyle = {
    opacity: 0.5,
    cursor: "wait",
  };
  const style = useMemo(
    () => ({
      maxWidth: maxWidth,
      ...(disabled ? disabledStyle : {}),
      ...(isLoading ? isLoadingStyle : {}),
      ...paddingStyles[size],
    }),
    [disabled, isLoading, size]
  );

  // Functions
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      type="submit"
      style={style}
      onClick={handleClick}
      className={classNames(Style.button, className as string)}
    >
      {isLoading ? (
        <div className={Style.circleLoading} />
      ) : (
        <div style={{ height: "20px" }}>{children}</div>
      )}
    </button>
  );
};
