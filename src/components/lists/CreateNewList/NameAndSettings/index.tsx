import { FC } from "react";
import classnames from "classnames";
import { IListStore, useListData } from "../../../../context/ListContext";
import { IListSteps } from "../../interfaces";
import { ECreateListSteps } from "../../../../context/ListContext/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import './styles.scss'
const NameAndSettings: FC<IListSteps> = ({
  values,
  errors,
  handleChange,
  setFieldValue,
}) => {
  const listsStore: IListStore = useListData();

  const setPrivacy = (isPrivate: boolean) => {
    setFieldValue("private", isPrivate);
  };
  
  return (
    <div className="name-and-settings-container">
      <div className="list-form-heading">New List Settings</div>
      {/* name */}
      <input type="text" name="name" placeholder="List Name..." onChange={handleChange} />
      {/* Privacy Buttons */}
      <div role="group" className="name-and-settings-privacy">
        <label htmlFor="private" className="heading-label">
          List Privacy
        </label>
        <div className="name-and-settings-privacy-button-container">
          <button
            type="button"
            name="private"
            className={classnames({
              "button-highlight": values.private,
            })}
            onClick={() => setPrivacy(true)}
          >
            Private
          </button>
          <button
            type="button"
            name="private"
            className={classnames({
              "button-highlight": !values.private,
            })}
            onClick={() => setPrivacy(false)}
          >
            Public
          </button>
        </div>
      </div>
      <button
        type="button"
        className="next-step-button"
        onClick={() =>
          listsStore.updateCreateListState(ECreateListSteps.CreationMethod)
        }
        disabled={!values.name}
      >
        <FontAwesomeIcon icon={faArrowCircleRight} />
        Creation method
      </button>
    </div>
  );
};

export default NameAndSettings;
