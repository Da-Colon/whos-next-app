import { ChangeEvent, FC, useEffect, useState } from "react";
import Input from "../../layout/Input";
import removeIcon from "../../assets/images/remove.svg";
import { IListItemProps } from "./interfaces";
import { EInputVariants } from "../../layout/Input/enums";

const ListItem: FC<IListItemProps> = ({
  handleChange,
  handleRemove,
  listItem,
  index,
}) => {
  const [itemName, setName] = useState(listItem.name);

  useEffect(() => {
    setName(listItem.name);
  }, [listItem]);
  return (
    <div className="flex flex-grow text-13 rounded-md relative max-w-xs">
      <button
        className="absolute flex item-center right-2 mt-1 -mr-1 p-1 cursor-pointer transform hover:scale-110"
        onClick={() => handleRemove(index)}
      >
        <img alt="" className="w-2" src={removeIcon} />
      </button>
      <div className="border-r border-white flex items-center justify-center p-1 w-8 bg-black text-ghost_white rounded-l-md">
        {index + 1}
      </div>
      <Input
        variant={EInputVariants.text}
        type="text"
        addClasses="pl-4 pr-8 py-1 border-l-none w-full bg-black text-ghost_white rounded-r-md focus:outline-none"
        name="listItem"
        value={itemName}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default ListItem;
