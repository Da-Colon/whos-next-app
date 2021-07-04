import React from "react";
import Container, { EContainer } from "../layout/Container";
import ButtonWithLink from "../layout/Button/ButtonWithLink";
import { Routes } from "../../router/routes";
import { EButtonVariants } from "../layout/Button/enums";

const AccountMenuButtons = () => {
  return (
    <Container variant={EContainer.column} addClasses="gap-2 sm:flex-row">
      <ButtonWithLink variant={EButtonVariants.menu} to={Routes.login} label="Log in" />
      <ButtonWithLink variant={EButtonVariants.menu} to={Routes.signup} label="Sign up" />
    </Container>
  );
};

export default AccountMenuButtons;
