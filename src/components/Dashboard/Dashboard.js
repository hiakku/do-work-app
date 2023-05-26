import { Box, Container, IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit, Work } from "@mui/icons-material";
const rows = (taskList) =>
  taskList.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
  }));

const columns = (taskList, setTaskList, setEditableId, handleOpenModal) => [
  { field: "id", headerName: "Id", width: 200 },
  { field: "title", headerName: "Title", width: 500 },
  { field: "description", headerName: "Description", width: 500 },
  {
    field: "action",
    headerName: "",
    sortable: false,
    renderCell: (params) => {
      const removeTask = (e) => {
        e.stopPropagation();
        const updatedTask = taskList.filter((item) => item.id !== params.id);
        setTaskList(updatedTask);
        localStorage.setItem("taskDetails", JSON.stringify(updatedTask));
      };
      const handleEdit = () => {
        setEditableId(params.id);
        handleOpenModal();
      };

      return (
        <div>
          <IconButton onClick={removeTask}>
            <Delete />
          </IconButton>
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
        </div>
      );
    },
  },
];
const Dashboard = (props) => {
  const { taskList, setTaskList, setEditableId, handleOpenModal } = props;
  return (
    <Container
      sx={{
        width: { sm: "100%" },
        marginTop: "90px",
        maxWidth: "unset !important",
      }}
    >
      <div style={{ height: "calc(100vh - 120px)", width: "100%" }}>
        {taskList.length > 0 ? (
          <DataGrid
            sx={{
              border: "0",
            }}
            rows={rows(taskList)}
            columns={columns(
              taskList,
              setTaskList,
              setEditableId,
              handleOpenModal
            )}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "10%",
            }}
          >
            <div>
              <Typography variant="h2">DoWork</Typography>
              <Work sx={{ width: "6rem", height: "6rem" }} />
              <br />
              Click on <b>Create Task</b> and,
              <br /> start creating new task to plan your day better!!
              <br />
            </div>
          </Box>
        )}
      </div>
    </Container>
  );
};
export default Dashboard;
