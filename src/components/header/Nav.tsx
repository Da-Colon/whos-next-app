import Container from "../layout/Container";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useUserData } from "../../context/UserContext";
import Button from "../layout/Button";
import ButtonWithLink from "../layout/Button/ButtonWithLink";
import { EContainer } from "../layout/Container";
import { Routes } from "../../router/routes";
import { EButtonVariants } from "../layout/Button/enums";

const Nav: FC<{ cookieHandler: () => void }> = ({ cookieHandler }) => {
  const history = useHistory();
  const { userLogout } = useUserData();
  const logout = () => {
    userLogout(cookieHandler);
    history.push("/");
  };
  return (
    <Container variant={EContainer.flex}>
      <ButtonWithLink
        variant={EButtonVariants.menu}
        to={Routes.lists}
        addClasses="ml-4"
        label="Lists"
      />
      <ButtonWithLink
        variant={EButtonVariants.menu}
        to={Routes.picker}
        addClasses="ml-4"
        label="Picker"
      />
      <Button
        variant={EButtonVariants.menu}
        addClasses="ml-4"
        label="Logout"
        action={logout}
      />
    </Container>
  );
};

export default Nav;
