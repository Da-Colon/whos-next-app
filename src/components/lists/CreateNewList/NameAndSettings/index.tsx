import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { IListStore, useListStore } from "../../../../context/ListContext";
import TitleAndNavigation, { ENavigationType } from "../../shared/TitleAndNavigation";
import { ECreateListSteps } from "../../../../context/ListContext/interfaces";
import { IFormikProps } from "../../interfaces";
import "./styles.scss";

const NameAndSettings = ({ values, errors, handleChange, setFieldValue }: IFormikProps) => {
  const listsStore: IListStore = useListStore();

  // update form state with privacy choice
  // @param (isPrivate: boolean)
  const setPrivacy = (isPrivate: boolean) => {
    setFieldValue("isPrivate", isPrivate);
  };

  return (
    <div className="name-and-settings-container">
      <TitleAndNavigation pageTitle="New List Settings" variant={ENavigationType.Nav} />
      <input type="text" name="name" placeholder="List Name..." onChange={handleChange} value={values.name} />
      <div role="group" className="name-and-settings-privacy">
        <label htmlFor="isPrivate" className="heading-label">
          List Privacy
        </label>
        <div className="name-and-settings-privacy-button-container">
          <button
            type="button"
            name="isPrivate"
            onClick={() => setPrivacy(true)}
            className={classnames({
              "button-highlight": values.isPrivate,
            })}
          >
            Private
          </button>
          <button
            type="button"
            name="isPrivate"
            onClick={() => setPrivacy(false)}
            className={classnames({
              "button-highlight": !values.isPrivate,
            })}
          >
            Public
          </button>
        </div>
      </div>
      <div className="name-and-settings-actions-container">
        <button
          type="button"
          className="next-step-button"
          onClick={() => listsStore.updateCreateListState(ECreateListSteps.CreationMethod)}
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
