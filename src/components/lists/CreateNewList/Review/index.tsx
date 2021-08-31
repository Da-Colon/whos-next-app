import { FC } from "react";
import { IListStore, useListData } from "../../../../context/ListContext";
import { ECreateListSteps } from "../../../../context/ListContext/interfaces";
import { IFormikProps } from "../../interfaces";
import TitleAndNavigation, { ENavigationType } from "../../shared/TitleAndNavigation";
import "./styles.scss";

const Review: FC<IFormikProps> = ({ values }) => {
  const listsStore: IListStore = useListData();
  return (
    <div className="review-list-container">
      <TitleAndNavigation pageTitle="Review" variant={ENavigationType.State} backAction={() => listsStore.updateCreateListState(ECreateListSteps.ListCreation)} />
      <div className="list-form-heading">New List Settings</div>
      <div className="review-list-heading">Name:</div>
      <div className="review-list-value"> {values.name}</div>
      <div className="review-list-heading">Privacy:</div>
      <div className="review-list-value">
        {" "}
        {values.isPrivate ? "Private" : "Public"}
      </div>
      <div className="review-list-heading">List: </div>
      <div className="review-list-container">
        {[
          ...values.list,
        ].map((listItem, index) => (
          <span key={"_" + index}>{listItem.name}</span>
        ))}
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default Review;
