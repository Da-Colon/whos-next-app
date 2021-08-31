import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IListStore, useListData } from "../../../context/ListContext";
import FormikContainer from "../../../services/FormikContainer";
import { listNewValidationSchema } from "../../../constants/validationSchemas";
import { listNewInitialValues } from "../../../constants/initialValues";
import CreateListSteps from "./CreateListSteps";
import { IFormikProps } from "../interfaces";
import { Routes } from "../../../router/routes";
import "./styles.scss";

const CreateNewList = () => {
  const listsStore: IListStore = useListData();
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  const submitNewListForm = async (values: any) => {
    setLoading(true)
    const result = await listsStore.saveList(values)
    if(result === 'failed') {
      // show error then return
      console.warn('failed to save list')
      return;
    } 
    history.replace(Routes.lists);
  }

  if(loading) {
    // ! update with logo loading component
    return (
      <div>Loading...</div>
    )
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
