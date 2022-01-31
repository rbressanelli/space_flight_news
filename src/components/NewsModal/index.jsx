import { Box, Modal } from "@material-ui/core";
import FlightNewsCard from "../FlightNewsCard";
import { style } from "./styles";

const NewsModal = ({ open, data, setOpen }) => {

  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}        
      >
        <Box sx={style}>
          <FlightNewsCard flightNews={data} isOpen={open}/>
        </Box>
      </Modal>
    </>
  );
};

export default NewsModal;
