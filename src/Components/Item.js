import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Item = ({ name, status, id, handleDeleteItem, handleAddItem }) => {
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "space-between" }}
      direction="row"
      spacing={3}
    >
      <div>{name}</div>
      <Stack spacing={2} direction="row">
        <div>{status ? "V" : "X"}</div>
        <Button
          onClick={() => {
            handleAddItem(id);
          }}
          variant="contained"
          color="primary"
          sx={{ height: "25px" }}
        >
          Done
        </Button>
        <Button
          onClick={() => {
            handleDeleteItem(id);
          }}
          variant="outlined"
          color="error"
          sx={{ height: "25px" }}
        >
          Xóa
        </Button>
      </Stack>
    </Stack>
  );
};

export default Item;
