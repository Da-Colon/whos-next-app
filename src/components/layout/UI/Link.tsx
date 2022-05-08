import { NavLink } from "react-router-dom";

interface LinkProps {
  isVisible?: boolean;
  classNames?: string;
  to: string;
  text: string;
}

const Link = ({ classNames, text, isVisible, ...rest }: LinkProps) => {
  if (!isVisible) return null;
  return (
    <NavLink className={classNames} {...rest}>
      {text}
    </NavLink>
  );
};

export default Link;
