import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";

export const Modal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const useStyles = makeStyles(() => ({
  descriptionBox: {
    width: "100%",
    maxHeight: "100px",
    minHeight: "100px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "4px",
    overflowY: "auto",
  },
}));
