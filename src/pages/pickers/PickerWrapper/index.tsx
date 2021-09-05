import { faBahai, faDiceOne, faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { IPickerTypesState, IUseRandomPickerProps } from "../../../components/picker/interfaces";
import { Tooltip } from "../../../components/UI/Tooltip";
import { IList, IListDetails } from "../../../context/ListContext/interfaces";
import "./styles.scss";
import useCollapse, { IUseCollapseState } from "./useCollapse";

interface IPickerWrapperProps extends IUseRandomPickerProps {
  list: IListDetails;
  children: JSX.Element[];
}

interface IIconAndTooltipProps {
  iconClassName: string;
  icon: IconDefinition;
  "data-tip": string;
  "data-for": string;
  onClick?: () => void;
}

interface IListMenu {
  list: IList[];
  hasLength: boolean;
  isVisible: boolean;
  canRemove: boolean;
  manuallyRemoveItemFromUnSelected?: (removeIndex: number) => void;
}

const IconAndTooltip = (props: IIconAndTooltipProps) => {
  return (
    <>
      <FontAwesomeIcon
        className={props.iconClassName} // className should include base icon class + conditional highlight
        icon={props.icon} // icon from FontAwesome
        data-tip={props["data-tip"]} // tool tip text
        data-for={props["data-for"]} // name that ties icon to tooltip
        onClick={props.onClick} // update for proper import
      />
      <Tooltip id={props["data-for"]} />
    </>
  );
};

const ListMenu = ({ list, hasLength, isVisible, canRemove, manuallyRemoveItemFromUnSelected }: IListMenu) => {
  if (!isVisible) return null;
  if (!hasLength) {
    return (
      <div className="view-list">
        <div className="view-list-item">Nothing to display</div>
      </div>
    );
  }
  return (
    <div className="view-list">
      {list.map((listItem, index) => (
        <div className="view-list-item-container">
          <div key={`_${index}`} className="view-list-item">
            {listItem.name}
          </div>
          {canRemove && !!manuallyRemoveItemFromUnSelected && (
            <FontAwesomeIcon className="icon-effects close-icon" icon={faTimes} onClick={() => manuallyRemoveItemFromUnSelected(index)} />
          )}
        </div>
      ))}
    </div>
  );
};

const PickerWrapper = ({
  pickerType,
  list,
  manuallyRemoveItemFromUnSelected,
  currentItems,
  removedItems,
  children,
}: IPickerWrapperProps) => {
  const { isSelectedVisible, isUnselectedVisible, toggleSelected, toggleUnselected }: IUseCollapseState =
    useCollapse();
  return (
    <div>
      <div className="picker-header">
        <div className="picker-header-left">
          <button type="button" onClick={toggleSelected}>
            {" "}
            Selected
          </button>
          <ListMenu
            list={removedItems}
            hasLength={!!removedItems.length}
            isVisible={isSelectedVisible}
            canRemove={false}
          />
          <div>
            <button type="button" onClick={toggleUnselected}>
              Unselected
            </button>
            <ListMenu
              list={currentItems}
              hasLength={!!currentItems.length}
              isVisible={isUnselectedVisible}
              canRemove={true}
              manuallyRemoveItemFromUnSelected={manuallyRemoveItemFromUnSelected}
            />
          </div>
        </div>
        <div className="picker-header-center">{list.name}</div>
        <div className="picker-header-right">
          <div className="picker-header-options-wrapper">
            <p>Type</p>
            <div className="picker-header-options-container">
              {/* Picker Type: Single Group (disabled) */}
              <IconAndTooltip
                icon={faDiceOne}
                iconClassName={classnames("picker-header-icon icon-effects__dice-one", {
                  "icon-effects__highlight": pickerType === IPickerTypesState.One,
                })}
                data-tip="One at a time"
                data-for="single-type-picker"
              />
            </div>
          </div>
          <div className="picker-header-options-wrapper">
            <p>Picker View</p>
            <div className="picker-header-options-container">
              {/* Picker Version: Rain, Wheel, Scatter, Bounce, Banner, StraightUp; maybe set certain type if type is group */}
              <IconAndTooltip
                icon={faBahai}
                iconClassName={classnames("picker-header-icon icon-effects__scatter", {
                  "icon-effects__highlight": pickerType === IPickerTypesState.One,
                })}
                data-tip="Scatter"
                data-for="picker-view-scatter"
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PickerWrapper;
