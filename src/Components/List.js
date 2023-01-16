import React from "react";
import Item from "./Item";

const List = ({ lists, handleDeleteItem, handleAddItem }) => {
  return (
    <>
      {lists.map((item) => {
        return (
          <Item
            handleDeleteItem={handleDeleteItem}
            handleAddItem={handleAddItem}
            status={item?.status}
            name={item?.name}
            id={item?.id}
          />
        );
      })}
    </>
  );
};

export default List;
