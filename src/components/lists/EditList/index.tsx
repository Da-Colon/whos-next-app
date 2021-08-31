import { useHistory, useParams } from "react-router-dom";
import { listNewValidationSchema } from "../../../constants/validationSchemas";
import { IListStore, useListData } from "../../../context/ListContext";
import FormikContainer from "../../../services/FormikContainer";
import { IFormikProps } from "../interfaces";
import "./styles.scss";
import ListInputs from "./ListInputs";
import NameAndPrivacy from "./NameAndPrivacy";
import { ClientRoutes } from "../../../router/routes";

const EditList = () => {
  const { listId } = useParams<{ listId: string }>();
  const history = useHistory();
  const listsStore: IListStore = useListData();

  const list = listsStore.userLists?.find((list) => list.id === listId);

  const submitListUpdates = async (values: any, actions: any) => {
    await listsStore.updateListProperties(listId, values);
    listsStore.loadLists();
    history.push(ClientRoutes.lists);
  };
  if (!list) {
    return <div>Loading...</div>;
  }
  return (
    <FormikContainer
      handleSubmit={submitListUpdates}
      validationSchema={listNewValidationSchema}
      initialValues={list}
    >
      {({ handleSubmit, ...rest }: IFormikProps) => (
        <div className="edit list-form-container">
          <div className="list-form-header">
            <div className="list-form-heading">Edit list</div>
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            <NameAndPrivacy {...rest} />
            <ListInputs {...rest} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </FormikContainer>
  );
};

export default EditList;
