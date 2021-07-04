import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import Container, { EContainer } from "../../layout/Container";
import ListItem from "./ListItem";
import { IListTableProps } from "./interfaces";

const ListTable: FC<IListTableProps> = ({ length, list, setFieldValue }) => {
  const [listOfNames, setList] = useState<Array<{name: string}>>([]);

  useEffect(() => {
    setList(list || new Array(length).fill({ name: "" }) || []);
    setFieldValue("list", list || new Array(length).fill({ name: "" }) || []);
  }, [list, length, setFieldValue]);

  const handleChange = (
    event: SyntheticEvent,
    index: number
  ) => {
    event.preventDefault()
    const text = event.currentTarget.nodeValue;
    const newList = [...listOfNames];
    newList[index] = { name: text || "" };
    setList(newList);
    setFieldValue("list", newList);
  };

  const handleRemove = (
    index: number
  ) => {
    const newList = [...listOfNames];
    newList.splice(index, 1);
    setList(newList);
    setFieldValue("list", newList);
    setFieldValue("length", newList.length);
  };

  return (
    <Container
      variant={EContainer.flex}
      addClasses="gap-8 justify-center flex-wrap mt-8"
    >
      {listOfNames.map((listItem, index) => (
        <ListItem
          key={index}
          listItem={listItem}
          index={index}
          handleChange={handleChange}
          handleRemove={handleRemove}
        />
      ))}
    </Container>
  );
};

export default ListTable;
