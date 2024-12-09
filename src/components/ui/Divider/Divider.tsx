// Types
import { DividerProps } from "./Divider.types";

export const Divider: React.FC<DividerProps> = ({
  color = "#D5D9DD", // Default color if none is provided
  height = "1px", // Default height if none is provided
  marginInline,
  marginTop,
  marginBottom,
}) => {
  return (
    <hr
      style={{
        backgroundColor: color,
        height,
        marginInline,
        marginTop,
        marginBottom,
      }}
    />
  );
};
