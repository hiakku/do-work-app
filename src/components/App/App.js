import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import ModalContainer from "../Modal/Modal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [editableId, setEditableId] = useState("");
  useEffect(() => {
    const tasks = JSON.parse(localStorage["taskDetails"] || "[]");
    setTaskList(tasks);
  }, []);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <ModalContainer
          openModal={openModal}
          handleClose={handleCloseModal}
          setTaskList={setTaskList}
          taskList={taskList}
          setEditableId={setEditableId}
          editableId={editableId}
        />
        <CssBaseline />
        <Header handleOpenModal={handleOpenModal} />
        <Dashboard
          taskList={taskList}
          setTaskList={setTaskList}
          setEditableId={setEditableId}
          handleOpenModal={handleOpenModal}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
