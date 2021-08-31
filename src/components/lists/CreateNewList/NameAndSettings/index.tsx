import { FC } from "react";
import classnames from "classnames";
import { IListStore, useListData } from "../../../../context/ListContext";
import { IFormikProps } from "../../interfaces";
import { ECreateListSteps } from "../../../../context/ListContext/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import TitleAndNavigation, { ENavigationType } from "../../shared/TitleAndNavigation";
const NameAndSettings: FC<IFormikProps> = ({
  values,
  errors,
  handleChange,
  setFieldValue,
}) => {
  const listsStore: IListStore = useListData();

  const setPrivacy = (isPrivate: boolean) => {
    setFieldValue("isPrivate", isPrivate);
  };

  return (
    <div className="name-and-settings-container">
      <TitleAndNavigation pageTitle="New List Settings" variant={ENavigationType.Nav} />
      {/* name */}
      <input
        type="text"
        name="name"
        placeholder="List Name..."
        onChange={handleChange}
        value={values.name}
      />
      {/* Privacy Buttons */}
      <div role="group" className="name-and-settings-privacy">
        <label htmlFor="isPrivate" className="heading-label">
          List Privacy
        </label>
        <div className="name-and-settings-privacy-button-container">
          <button
            type="button"
            name="isPrivate"
            className={classnames({
              "button-highlight": values.isPrivate,
            })}
            onClick={() => setPrivacy(true)}
          >
            Private
          </button>
          <button
            type="button"
            name="isPrivate"
            className={classnames({
              "button-highlight": !values.isPrivate,
            })}
            onClick={() => setPrivacy(false)}
          >
            Public
          </button>
        </div>
      </div>
      <div className="name-and-settings-actions-container">
        <button
          type="button"
          className="next-step-button"
          onClick={() =>
            listsStore.updateCreateListState(ECreateListSteps.CreationMethod)
          }
          disabled={!values.name}
        >
          Creation method
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </div>
    </div>
  );
};

export default NameAndSettings;
