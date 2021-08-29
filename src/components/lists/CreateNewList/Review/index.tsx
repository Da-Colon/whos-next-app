import { FC } from "react";
import { IListSteps } from "../../interfaces";
import "./styles.scss";

const Review: FC<IListSteps> = ({ values }) => {
  return (
    <div className="review-list-container">
      <div className="list-form-heading">New List Settings</div>
      <div className="review-list-heading">Name:</div>
      <div className="review-list-value"> {values.name}</div>
      <div className="review-list-heading">Privacy:</div>
      <div className="review-list-value">
        {" "}
        {values.private ? "Private" : "Public"}
      </div>
      <div className="review-list-heading">List: </div>
      <div className="review-list-container">
        {[
          ...values.list,
        ].map((listItem) => (
          <span>{listItem.name}</span>
        ))}
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default Review;
