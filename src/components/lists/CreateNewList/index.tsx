import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useListStore } from "../../../context/ListContext";
import FormikContainer from "../../../services/FormikContainer";
import { listNewValidationSchema } from "../../../constants/validationSchemas";
import { listNewInitialValues } from "../../../constants/initialValues";
import CreateListSteps from "./CreateListSteps";
import { IFormikProps } from "../interfaces";
import { Routes } from "../../../config/client";
import "./styles.scss";
import { ListsStore } from "../../../context/typescript/lists.types";

const CreateNewList = () => {
  const listsStore: ListsStore = useListStore();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const submitNewListForm = async (values: any) => {
    setLoading(true);
    const result = await listsStore.saveList(values);
    if (result === "failed") {
      // show error then return
      console.warn("failed to save list");
      return;
    }
    history.replace(Routes.Lists);
  };

  if (loading) {
    // todo update with logo loading component
    return <div>Loading...</div>;
  }
  return (
    <FormikContainer
      handleSubmit={submitNewListForm}
      validationSchema={listNewValidationSchema}
      initialValues={listNewInitialValues}
    >
      {({ handleSubmit, ...rest }: IFormikProps) => (
        <div className="list-form-container">
          <form onSubmit={handleSubmit} className="form-container">
            <CreateListSteps {...rest} />
          </form>
        </div>
      )}
    </FormikContainer>
  );
};

export default CreateNewList;
