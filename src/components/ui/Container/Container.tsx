// Style
import Style from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};
