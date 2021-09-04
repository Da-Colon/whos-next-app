import { useEffect, useState } from "react";
import { IList } from "../../context/ListContext/interfaces";
import { randomNumberPicker } from "./picker.utils";

export interface IUseRandomPickerState {
  currentItems: IList[] | null;
  removedItems: IList[] | null;
  pickedItem: IList | null;
  currentPickerItems: IList[];
  randomPickerAutoInit: () => void;
}

const useRandomPicker = (list: IList[]): IUseRandomPickerState => {
  //  state that shows user current state of list (between picks)
  const [currentItems, setCurrentItems] = useState<IList[] | null>(null);
  const [removedItems, setRemovedItems] = useState<IList[]>([]);
  const [pickedItem, setpickedItem] = useState<IList | null>(null);

  // picker state for random picker
  const [currentPickerItems, setCurrentPickerItems] = useState<IList[]>([]);
  const [pickerItems, setPickerItems] = useState<IList[] | null>(null);

  useEffect(() => {
    if (list) {
      // set current list: will change if list changes
      setCurrentItems(list);
      // reset state
      setRemovedItems([]);
    }
  }, [list]);

  useEffect(() => {
    // set picker list to match current list
    setPickerItems(currentItems);
  }, [currentItems]);

  const getRandomItems = () => {
    const randomlyPickedIndex = randomNumberPicker(currentItems?.length || 0);
    return {
      selectedItem: pickerItems?.find(
        (_, index) => index === randomlyPickedIndex
      ) || { name: "" },
      unPickedItems:
        pickerItems?.filter((_, index) => index !== randomlyPickedIndex) || [],
    };
  };

  // begin random picker: calls to start controlled picker
  const randomPickerControlledInit = () => {};

  // method to begin random picker: calls to start auto picker
  const randomPickerAutoInit = () => {
    // pick, and removed picked item from picker list (selected item)
    const { selectedItem, unPickedItems } = getRandomItems();
    setPickerItems(unPickedItems || []);
    const pickerInterval = setInterval(() => {
      // pick, remove item from list
      const intervalRandomItems = getRandomItems();
      // add to picker current items
      setCurrentPickerItems((list) => [
        ...list,
        intervalRandomItems.selectedItem,
      ]);
      setPickerItems(intervalRandomItems.unPickedItems);
      // length of pickerItems is 0; end interval; set picked item
      if (!pickerItems?.length && selectedItem) {
        clearInterval(pickerInterval);
        setpickedItem(selectedItem);
        setRemovedItems((list) => [...list, selectedItem]);
      }
    }, 250);
  };

  // @returns:
  // currentItems: stores items currently not selected
  // removedItems: stores items that have been previously selected
  // pickedItem: currently chosenItem
  // currentPickerItems: items for auto random picker
  // randomPickerAutoInit: initialize auto picker; updates all picked items
  return {
    currentItems,
    removedItems,
    pickedItem,
    currentPickerItems,
    randomPickerAutoInit,
  };
};

export default useRandomPicker;
