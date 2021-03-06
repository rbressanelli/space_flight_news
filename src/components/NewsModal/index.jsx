import { Box, Fade, Modal, Backdrop, Typography } from "@material-ui/core";

import FlightNewsCard from "../FlightNewsCard";
import { style } from "./styles";

const NewsModal = ({ open, data, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        closeAfterTransition
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography>
              <FlightNewsCard flightNews={data} isOpen={open} index="3" />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default NewsModal;
