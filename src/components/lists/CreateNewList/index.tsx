import { useHistory } from "react-router-dom";
import { IListStore, useListData } from "../../../context/ListContext";
import FormikContainer from "../../../services/FormikContainer";
import { listNewValidationSchema } from "../../../constants/validationSchemas";
import { listNewInitialValues } from "../../../constants/initialValues";
import "./styles.scss";
import CreateListSteps from "./CreateListSteps";
import { IListSteps } from "../interfaces";

const CreateNewList = () => {
  const listsStore: IListStore = useListData();
  const history = useHistory();
  return (
    <div>
      <FormikContainer
        handleSubmit={(values: any) => listsStore.saveList(values, history)}
        validationSchema={listNewValidationSchema}
        initialValues={listNewInitialValues}
      >
        {({ handleSubmit, ...rest }: IListSteps) => (
          <div className="list-form-container">
            <form onSubmit={handleSubmit} className="form-container">
              <CreateListSteps {...rest} />
            </form>
          </div>
        )}
      </FormikContainer>
    </div>
  );
};

export default CreateNewList;
