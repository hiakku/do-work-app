import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import ModalTitle from "./ModalTitle";
import { Modal, useStyles } from "./styles";
import dayjs from "dayjs";
import { Error } from "@mui/icons-material";

const CustomizedDialogs = (props) => {
  const {
    openModal,
    handleClose,
    taskList,
    setTaskList,
    editableId,
    setEditableId,
  } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();
  const [isError, setIsError] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const editableTask = [...taskList].filter((item) => item.id === editableId);
    if (editableTask && editableTask.length > 0) {
      setDescription(editableTask[0].description);
      setTitle(editableTask[0].title);
      setDate(`${editableTask[0].date}`);
      setTimeout(() => {
        document.getElementById("description").innerText =
          editableTask[0].description;
      }, 0);
    }
  }, [editableId, taskList]);

  const handleModalClose = () => {
    handleClose();
    setTitle("");
    setDescription("");
    setDate();
    setEditableId("");
    setIsError(false);
  };

  const handleCreate = () => {
    if (title && description && date) {
      let taskListArray = [];
      if (editableId) {
        taskListArray = [...taskList].map((item) => {
          if (item.id === editableId) {
            item.title = title;
            item.description = description;
            item.date = date;
          }
          return item;
        });
      } else {
        const id = `DW101${taskList.length}`;
        taskListArray = [{ id, title, description, date }, ...taskList];
      }
      setTaskList(taskListArray);
      localStorage.setItem("taskDetails", JSON.stringify(taskListArray));
      handleModalClose();
    } else {
      setIsError(true);
    }
  };

  return (
    <Modal
      onClose={handleModalClose}
      aria-labelledby="dialog-title"
      open={openModal}
      fullWidth
      maxWidth="sm"
    >
      <ModalTitle id="dialog-title" onClose={handleModalClose}>
        {editableId ? "Edit" : "Create"} task
      </ModalTitle>
      <DialogContent dividers>
        <label htmlFor="title">Title:</label>
        <TextField
          name="title"
          fullWidth
          value={title}
          id="title"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div id="description-label" style={{ marginTop: "1rem" }}>
          Description:
        </div>
        <div
          id="description"
          className={classes.descriptionBox}
          contentEditable
          onInput={(e) => setDescription(e.currentTarget.innerText)}
          style={{
            padding: "16.5px 14px",
          }}
        />
        <Typography style={{ marginTop: "1rem" }}>Due date:</Typography>
        <DatePicker
          disablePast
          value={date ? dayjs(date) : null}
          onChange={(value) => setDate(value)}
        />
        {isError && (
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              columnGap: "1px",
              alignItems: "center",
              color: "red",
            }}
          >
            <Error />
            <span>Please provide all details.</span>
          </div>
        )}
      </DialogContent>
      <DialogActions style={{ padding: "1rem" }}>
        <Button variant="outlined" onClick={handleModalClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleCreate}>
          {editableId ? "Edit" : "Create"}
        </Button>
      </DialogActions>
    </Modal>
  );
};

export default CustomizedDialogs;
