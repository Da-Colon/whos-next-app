import { useListStore } from "../../../../context/ListContext";
import { ECreateListSteps } from "../../../../context/typescript/lists.enums";
import { ListsStore } from "../../../../context/typescript/lists.types";
import { IFormikProps } from "../../interfaces";
import TitleAndNavigation, { ENavigationType } from "../../shared/TitleAndNavigation";
import "./styles.scss";

const Review = ({ values }: IFormikProps) => {
  const listsStore: ListsStore = useListStore();
  return (
    <div className="review-list-container">
      <TitleAndNavigation
        pageTitle="Review"
        variant={ENavigationType.State}
        backAction={() => listsStore.updateCreateListState(ECreateListSteps.ListCreation)}
      />
      <div className="list-form-heading">New List Settings</div>
      <div className="review-list-heading">Name:</div>
      <div className="review-list-value"> {values.name}</div>
      <div className="review-list-heading">Privacy:</div>
      <div className="review-list-value"> {values.isPrivate ? "Private" : "Public"}</div>
      <div className="review-list-heading">List: </div>
      <div className="review-list-container">
        {[...values.list].map((listItem, index) => (
          <span key={"_" + index}>{listItem.name}</span>
        ))}
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default Review;
