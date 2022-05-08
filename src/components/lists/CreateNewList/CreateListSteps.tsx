import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ClientRoutes } from "../../../config/client";
import { useListStore } from "../../../context/ListContext";
import { ECreateListSteps } from "../../../context/typescript/lists.enums";
import { ListsStore } from "../../../context/typescript/lists.types";
import { IFormikProps } from "../interfaces";
import CreationMethod from "./CreationMethod";
import ListCreation from "./ListCreation";
import NameAndSettings from "./NameAndSettings";
import Review from "./Review";

const CreateListSteps = (props: IFormikProps) => {
  const listsStore: ListsStore = useListStore();
  const location = useLocation();
  const [manualListLength, setManualListLength] = useState<number>(0);
  // ! This will be used later for storing uploaded list data
  // const [ uploadedList, setUploadedList] = useState();

  useEffect(() => {
    if (location.pathname !== ClientRoutes.listsNew) {
      listsStore.updateCreateListState(ECreateListSteps.NameAndSettings);
      props.resetForm();
    }
  });

  const updateManualListLength = (length: number) => {
    setManualListLength(length);
  };
  switch (listsStore.createListState) {
    case ECreateListSteps.NameAndSettings: {
      return <NameAndSettings {...props} />;
    }
    case ECreateListSteps.CreationMethod: {
      return (
        <CreationMethod updateManualListLength={updateManualListLength} manualListLength={manualListLength} />
      );
    }
    case ECreateListSteps.ListCreation: {
      return <ListCreation listLength={manualListLength} {...props} />;
    }
    case ECreateListSteps.Upload: {
      return <div></div>;
    }
    case ECreateListSteps.Review: {
      return <Review {...props} />;
    }
  }
};

export default CreateListSteps;
