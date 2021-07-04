import React from "react";
import menu from "../assets/images/menu.svg";
import useCollapse, { ICollapsed } from "../hooks/useCollaspe";
import Container, { EContainer } from "../layout/Container";
import Icon, { EIconVariants } from "../layout/Icon";
import AccountMenuButtons from "./AccountMenuButtons";

const AccountDisplay = () => {
  const { toggle, collapsed }: ICollapsed = useCollapse(false, true);
  return (
    <Container variant={EContainer.flex} addClasses="items-center gap-4">
      <Icon onClickAction={toggle} icon={menu} variant={EIconVariants.small} />
      {!collapsed && <AccountMenuButtons />}
    </Container>
  );
};

export default AccountDisplay;
