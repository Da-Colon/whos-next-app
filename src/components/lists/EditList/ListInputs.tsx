import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListProps } from "../../../context/typescript/lists.types";
import { IFormikProps } from "../interfaces";

const ListInputs = ({ values, setFieldValue }: IFormikProps) => {
  const updateIndexOnChange = (name: string, index: number) => {
    const currentList: ListProps[] = [...values.list];
    currentList[index] = { name: name };
    setFieldValue("list", currentList);
  };

  const removeItemAtIndex = (index: number) => {
    const currentList: ListProps[] = [...values.list];
    const updatedList = currentList.filter((_, i) => index !== i);
    setFieldValue("list", updatedList);
  };
  if (!values.list) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <label className="heading-label">List</label>
      <div className="list-create-inputs-container">
        {values.list.map((listItem: ListProps, index: number) => (
          <div key={"_" + index} className="list-create-input">
            <input
              type="text"
              value={listItem.name}
              placeholder="..."
              maxLength={22}
              onChange={(event) => updateIndexOnChange(event.target.value, index)}
            />
            <button type="button" onClick={() => removeItemAtIndex(index)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListInputs;
