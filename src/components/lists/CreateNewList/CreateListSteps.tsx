import { useState } from "react";
import { FC } from "react";
import { IListStore, useListData } from "../../../context/ListContext";
import { ECreateListSteps } from "../../../context/ListContext/interfaces";
import { IListSteps } from "../interfaces";
import CreationMethod from "./CreationMethod";
import ListCreation from "./ListCreation";
import NameAndSettings from "./NameAndSettings";
import Review from "./Review";

const CreateListSteps: FC<IListSteps> = (props) => {
  const listsStore: IListStore = useListData();
  const [manualListLength, setManualListLength] = useState<number>(0);
  // ! This will be used later for storing uploaded list data
  // const [ uploadedList, setUploadedList] = useState();

  const updateManualListLength = (length: number) => {
    setManualListLength(length);
  };
  switch (listsStore.createListState) {
    case ECreateListSteps.NameAndSettings: {
      return <NameAndSettings {...props} />;
    }
    case ECreateListSteps.CreationMethod: {
      return (
        <CreationMethod
          updateManualListLength={updateManualListLength}
          manualListLength={manualListLength}
        />
      );
    }
    case ECreateListSteps.ListCreation: {
      return <ListCreation listLength={manualListLength} {...props} />;
    }
    case ECreateListSteps.Upload: {
      return <div></div>;
    }
    case ECreateListSteps.Review: {
      return <Review  {...props} />;
    }
  }
};

export default CreateListSteps;
