import React, { FC } from "react";
import Container, { EContainer } from "../layout/Container";
import AccountDisplay from "./AccountDisplay";
import Nav from "./Nav";
import PageLogo from "./PageLogo";

interface IHeader {
  loggedIn: boolean;
  cookieHandler: () => void;
}

const Header: FC<IHeader> = ({ loggedIn, cookieHandler }) => {
  return (
    <Container variant={EContainer.header}>
      <PageLogo />
      {loggedIn && <Nav cookieHandler={cookieHandler} />}
      {!loggedIn && <AccountDisplay />}
    </Container>
  );
};

export default Header;
