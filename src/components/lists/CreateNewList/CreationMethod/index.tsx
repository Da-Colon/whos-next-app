import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useListStore } from "../../../../context/ListContext";
import { ECreateListSteps } from "../../../../context/typescript/lists.enums";
import { ListsStore } from "../../../../context/typescript/lists.types";
import TitleAndNavigation, { ENavigationType } from "../../shared/TitleAndNavigation";
import "./styles.scss";

interface CreationMethodProps {
  manualListLength: number;
  updateManualListLength: (length: number) => void;
}

const CreationMethod = ({ manualListLength, updateManualListLength }: CreationMethodProps) => {
  const listsStore: ListsStore = useListStore();
  return (
    <div className="creation-method-container">
      <TitleAndNavigation
        pageTitle="Creation Method"
        backAction={() => listsStore.updateCreateListState(ECreateListSteps.NameAndSettings)}
        variant={ENavigationType.State}
      />
      <label htmlFor="creation-method-manual" className="heading-label">
        Manually Create List
      </label>
      <div>
        Creates a list with a length entered below. Enter a value between 0 - 99 below and click 'Manual'.
      </div>
      <div className="flex-with-gap">
        <input
          type="text"
          placeholder="#"
          pattern="/d*"
          maxLength={2}
          value={manualListLength}
          onChange={(event) => updateManualListLength(Number(event.target.value))}
        />
        <button
          type="button"
          className="next-step-button"
          onClick={() => listsStore.updateCreateListState(ECreateListSteps.ListCreation)}
          disabled={!manualListLength}
        >
          <FontAwesomeIcon icon={faArrowCircleRight} />
          Manual
        </button>
      </div>
      <label htmlFor="creation-method-upload" className="heading-label">
        Upload List <span>Supported Types: csv, xls</span>
      </label>
      <div>Coming soon...</div>
      <button type="button" className="next-step-button" disabled={true}>
        <FontAwesomeIcon icon={faArrowCircleRight} />
        Upload
      </button>
    </div>
  );
};

export default CreationMethod;
