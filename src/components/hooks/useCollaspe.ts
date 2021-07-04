import { useState } from "react";

export interface ICollapsed {
  collapsed: boolean;
  toggle: () => void;
  open: () => void;
}

const useCollapse = (
  initialcollapse: boolean = true,
  initialOpen: boolean = false
): ICollapsed => {
  const [collapsed, setCollapsed] = useState(initialcollapse);
  const [opened, setOpened] = useState(initialOpen);

  const toggle = () => {
    if (opened) {
      setCollapsed((collapsed) => !collapsed);
    }
  };

  const open = () => {
    if (collapsed && !opened) {
      setCollapsed(false);
      setOpened(true);
    }
  };

  return { collapsed, toggle, open };
};

export default useCollapse;
