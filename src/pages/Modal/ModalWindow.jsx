import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./ModalWindow.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { idModalAction, toggleModalAction } from "../../redux/action/modalAction";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width:"800px",
  height:"500px",
  borderRadius:"15px",
};
//название было занято
const ModalWindow = () => {
  const dispatch = useDispatch()
  const {idModal, toggleModal}= useSelector(state=>state.modal)
  console.log( `id: ${idModal}, toggle: ${toggleModal}`);
  const handleOpen = () => dispatch(toggleModalAction(true));
  const handleClose = () => dispatch(toggleModalAction(false));




  return (
    <div className={styles.modal}>
      
      <Modal
        open={toggleModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;
