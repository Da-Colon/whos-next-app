import { useState } from "react";
import { IList } from "../../context/ListContext/interfaces";
import { IPickerStateTypes, IUseRandomPickerProps } from "./interfaces";
import { randomNumberPicker } from "./picker.utils";

const useRandomPicker = (list: IList[]): IUseRandomPickerProps => {
  //  state that shows user current state of list (between picks)
  const [currentItems, setCurrentItems] = useState<IList[]>(list);
  const [removedItems, setRemovedItems] = useState<IList[]>([]);
  const [pickedItem, setpickedItem] = useState<IList | null>(null);

  // state for storing version of random picker
  const [pickerType, setPickerType] = useState(IPickerStateTypes.Scatter)

  // picker state for random picker
  const [currentPickerItems, setCurrentPickerItems] = useState<IList[]>([]);

  const getRandomItems = (items: IList[]) => {
    const randomlyPickedIndex = randomNumberPicker(items?.length - 1);
    return {
      selectedItem: items?.find(
        (_, index) => index === randomlyPickedIndex
      ) || { name: "" },
      unPickedItems:
      items?.filter((_, index) => index !== randomlyPickedIndex),
    };
  };

  // begin random picker: calls to start controlled picker
  // const randomPickerControlledInit = () => {};

  // method to begin random picker: calls to start scatter picker
  const randomPickerScatterInit = () => {
    // pick, and removed picked item from picker list (selected item)
    const { selectedItem, unPickedItems } = getRandomItems(currentItems);
    let pickerItems = [...unPickedItems];
    const pickerInterval = setInterval(() => {
      // pick, remove item from list
      const intervalRandomItems = getRandomItems(pickerItems);
      // add to picker current items
      setCurrentPickerItems((list) => [
        ...list,
        intervalRandomItems.selectedItem,
      ]);
      pickerItems = intervalRandomItems.unPickedItems
      // length of pickerItems is 0; end interval; set picked item
      if (!intervalRandomItems.unPickedItems.length) {
        clearInterval(pickerInterval);
        setpickedItem(selectedItem);
        setCurrentItems(unPickedItems);
        setCurrentPickerItems([])
        setRemovedItems((list) => [...list, selectedItem]);
      }
    }, 250);
  };

  const updatePickerType = (type: IPickerStateTypes) => {
    setPickerType(type);
  }

  // @returns:
  // currentItems: stores items currently not selected
  // removedItems: stores items that have been previously selected
  // pickedItem: currently chosenItem
  // currentPickerItems: items for auto random picker
  // pickerType: stores version of random picker
  // randomPickerScatterInit: initialize auto picker; updates all picked items
  // updatePickerType: changes picker version
  return {
    currentItems,
    removedItems,
    pickedItem,
    currentPickerItems,
    pickerType,
    randomPickerScatterInit,
    updatePickerType,
  };
};

export default useRandomPicker;
