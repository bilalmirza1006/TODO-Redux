import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../redux/action/Index";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1.5,
  // width: '5rem',
  height: "2rem",
};

function Icons(ele, props, pprops, ppprops, setEnableButton, setInput, setId) {
  const dispatch = useDispatch();

  return (
    <div>
      <EditIcon
        sx={{ ...commonStyles, borderRadius: "10px", width: "2.5rem" }}
        onClick={() => {
          {
            props.setEnableButton(true);
          }
          {
            pprops.setInput(ele.input);
          }
          {
            ppprops.setId(ele.id);
          }
        }}
      />

      <DeleteIcon
        sx={{ ...commonStyles, borderRadius: "10px", width: "2.5rem" }}
        onClick={() => {
          dispatch(deleteToDo(ele.id));
        }}
      />
    </div>
  );
}

export default Icons;
