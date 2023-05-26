import { Work } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = (props) => {
  const { handleOpenModal } = props;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: "100%" },
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}
        >
          <Work />
          DoWork
        </Typography>
        <Button
          variant="contained "
          onClick={handleOpenModal}
          sx={{ textTransform: "capitalize" }}
        >
          Create Task
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
