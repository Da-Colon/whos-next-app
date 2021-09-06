import { useHistory, useParams } from "react-router-dom";
import { listNewValidationSchema } from "../../../constants/validationSchemas";
import { IListStore, useListStore } from "../../../context/ListContext";
import FormikContainer from "../../../services/FormikContainer";
import { IFormikProps } from "../interfaces";
import "./styles.scss";
import ListInputs from "./ListInputs";
import NameAndPrivacy from "./NameAndPrivacy";
import TitleAndNavigation, { ENavigationType } from "../shared/TitleAndNavigation";
import { ClientRoutes } from "../../../config/client";

const EditList = () => {
  const { listId } = useParams<{ listId: string }>();
  const history = useHistory();
  const listsStore: IListStore = useListStore();

  const list = listsStore.userLists?.find((list) => list.id === listId);

  // todo need to add ability to add another member of list

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
          <TitleAndNavigation  variant={ENavigationType.Nav} pageTitle="Edit Lists" />
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
