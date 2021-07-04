import React, { FC, useEffect, useState } from "react";
import Input from "../../layout/Input";
import removeIcon from "../../assets/images/remove.svg";
import { IListItemProps } from "./interfaces";
import { EHeight, EInputVariants } from "../../layout/Input/enums";

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
    <div className="flex flex-grow border border-ghost_white text-13 rounded-md relative max-w-xs">
      <button
        className="absolute flex item-center right-2 mt-1 -mr-1 border border-ghost_white p-1 cursor-pointer"
        onClick={() => handleRemove(index)}
      >
        <img alt="" className="w-2" src={removeIcon} />
      </button>
      <div className="border-r border-white py-1 w-8 bg-black text-ghost_white text-center rounded-l-md">
        {index + 1}
      </div>
      <Input
        variant={EInputVariants.text}
        type="text"
        addClasses="pl-4 pr-8 py-1 w-full bg-black text-ghost_white rounded-r-md focus:outline-none"
        height={EHeight.full}
        name="listItem"
        value={itemName}
        action={(e: any) => handleChange(e, index)}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default ListItem;
