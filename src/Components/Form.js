import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import List from "./List";

const Form = () => {
  const [input, setInput] = useState();
  const [lists, setLists] = useState([]);

  const HandleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    // hàm này dùng để thêm 1 phần tử với name là input vào trong array lists
    setLists([...lists, { id: Math.random(), name: input, status: false }]);
    // hàm này dùng để xóa input
    setInput("");
  };

  const handleDeleteItem = (id) => {
    // filter dùng để lọc dữ liệu trong mảng
    const newList = lists.filter((item) => {
      return item.id !== id;
    });
    setLists(newList);
  };
  // complete item
  const handleAddItem = (id) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        return { ...item, status: true };
      } else {
        return item;
      }
    });
    setLists(newList);
  };

  console.log(">>>", lists);

  // Input field for our todo list
  return (
    <Stack spacing={2}>
      <Stack spacing={1} direction="row">
        <TextField size="small" value={input} onChange={HandleInput} />
        <Button variant="contained" color="success" onClick={handleAdd}>
          Add
        </Button>
      </Stack>
      <List
        lists={lists}
        handleDeleteItem={handleDeleteItem}
        handleAddItem={handleAddItem}
      />
    </Stack>
  );
};

export default Form;
