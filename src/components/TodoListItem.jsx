import React from "react";
import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../redux/action/Index";
const dispatch = useDispatch;

function TodoListItem(props) {
  const { itemKey, item, handleCallback, deleteCallback } = props;
  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1.5,
    height: "2rem",
  };
  return (
    <ListItem disablePadding key={itemKey}>
      <ListItemButton sx={{ ...commonStyles, borderRadius: "12px" }}>
        <ListItemText primary={item.input} />
      </ListItemButton>
      <Button sx={{ borderRadius: "10px", margin: "0", padding: "0" }}>
        <EditIcon
          sx={{ ...commonStyles, borderRadius: "10px", width: "2.5rem" }}
          onClick={() => handleCallback(item)}
        />
      </Button>
      <Button sx={{ borderRadius: "10px", color: "red" }}>
        <DeleteIcon
          sx={{ ...commonStyles, borderRadius: "10px", width: "2.5rem" }}
          onClick={() => deleteCallback(item)}
        />
      </Button>
    </ListItem>
  );
}

export default TodoListItem;
