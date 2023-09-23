import { ReactNode } from "react";
import "./Title.scss";
type TitleProps = {
  children: ReactNode;
};
export default function Title({ children }: TitleProps) {
  return <h1 className="title">{children}</h1>;
}
