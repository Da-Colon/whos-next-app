import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-white.svg";
import Image from "../layout/Image";
import TextContainer, { ETextContainer } from "../layout/TextContainer";

const PageLogo = () => {
  return (
    <NavLink to="/" className="flex justify-center items-center cursor-pointer">
      <Image imageSrc={logo} />
      <TextContainer
        variant={ETextContainer.xlarge}
        label="Who's next?"
        addClasses="ml-2"
      />
    </NavLink>
  );
};

export default PageLogo;
