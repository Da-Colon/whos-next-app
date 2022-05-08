import { useState } from "react";
import { ListProps } from "../../context/typescript/lists.types";
import { IPickerTypesState, IPickerViewState, IUseRandomPickerProps } from "./interfaces";
import { randomNumberPicker } from "./picker.utils";

const useRandomPicker = (list: ListProps[]): IUseRandomPickerProps => {
  //  state that shows user current state of list (between picks)
  const [currentItems, setCurrentItems] = useState<ListProps[]>(list);
  const [removedItems, setRemovedItems] = useState<ListProps[]>([]);
  const [pickedItem, setpickedItem] = useState<ListProps | null>(null);

  // state for storing versions of random picker
  const [pickerView, setPickerView] = useState(IPickerViewState.Scatter);
  const [pickerType, setPickerType] = useState(IPickerTypesState.One);

  // picker state for random picker
  const [currentPickerItems, setCurrentPickerItems] = useState<ListProps[]>([]);

  const getRandomItems = (items: ListProps[]) => {
    const randomlyPickedIndex = randomNumberPicker(items?.length - 1);
    return {
      selectedItem: items?.find((_, index) => index === randomlyPickedIndex) || { name: "" },
      unPickedItems: items?.filter((_, index) => index !== randomlyPickedIndex),
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
      setCurrentPickerItems((list) => [...list, intervalRandomItems.selectedItem]);
      pickerItems = intervalRandomItems.unPickedItems;
      // length of pickerItems is 0; end interval; set picked item
      if (!intervalRandomItems.unPickedItems.length) {
        clearInterval(pickerInterval);
        setpickedItem(selectedItem);
        setCurrentItems(unPickedItems);
        setCurrentPickerItems([]);
        setRemovedItems((list) => [...list, selectedItem]);
      }
    }, 250);
  };

  // manually remove item from current list
  const moveToSelected = (removeIndex: number) => {
    const selectedItem = currentItems.find((_, index) => index === removeIndex) || { name: "" };
    const unPickedItems = currentItems.filter((_, index) => index !== removeIndex);
    setRemovedItems((list) => [...list, selectedItem]);
    setCurrentItems(unPickedItems);
  };
  // manually remove item from removed list
  const moveToUnselected = (removeIndex: number) => {
    const selectedItem = removedItems.find((_, index) => index === removeIndex) || { name: "" };
    const unPickedItems = removedItems.filter((_, index) => index !== removeIndex);
    setCurrentItems((list) => [...list, selectedItem]);
    setRemovedItems(unPickedItems);
  };

  const updatePickerView = (type: IPickerViewState) => {
    setPickerView(type);
  };
  const updatePickerType = (type: IPickerTypesState) => {
    setPickerType(type);
  };

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
    pickerView,
    pickerType,
    randomPickerScatterInit,
    updatePickerType,
    updatePickerView,
    moveToSelected,
    moveToUnselected,
  };
};

export default useRandomPicker;
