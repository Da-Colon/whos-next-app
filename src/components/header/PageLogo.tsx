import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-black.svg";
import Image from "../layout/Image";

const PageLogo = () => {
  return (
    <NavLink to="/" className="page-logo-container">
      <Image imageSrc={logo} />
      <div className="page-logo-text">Who's Next?</div>
    </NavLink>
  );
};

export default PageLogo;
