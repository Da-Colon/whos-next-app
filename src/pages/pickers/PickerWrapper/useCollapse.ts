import { useState } from "react";

export interface IUseCollapseState {
  isSelectedVisible: boolean;
  isUnselectedVisible: boolean;
  toggleSelected: () => void;
  toggleUnselected: () => void;
}

const useCollapse = (): IUseCollapseState => {
  const [isSelectedVisible, setSelectedVisibility] = useState(false);
  const [isUnselectedVisible, setUnselectedVisibility] = useState(false);

  const toggleSelected = () => {
    if(isUnselectedVisible && !isSelectedVisible) {
      setUnselectedVisibility(false)
    }
    setSelectedVisibility((visibility) => !visibility);
  };

  const toggleUnselected = () => {
    if(isSelectedVisible && !isUnselectedVisible) {
      setSelectedVisibility(false)
    }
    setUnselectedVisibility((visibility) => !visibility);
  };

  return { isSelectedVisible, isUnselectedVisible, toggleSelected, toggleUnselected };
};

export default useCollapse;
