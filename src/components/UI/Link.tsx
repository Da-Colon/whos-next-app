import { FC } from "react";
import { NavLink } from "react-router-dom";

interface ILink {
  isVisible?: boolean;
  classNames?: string;
  to: string;
  text: string;
}

const Link: FC<ILink> = ({ classNames, text, isVisible, ...rest }) => {
  if (!isVisible) return null;
  return (
    <NavLink className={classNames} {...rest}>
      {text}
    </NavLink>
  );
};

export default Link;
