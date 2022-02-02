export const style = {
  display: "flex", 
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    mobile: 310,
    tablet: 600,
    laptop: 800,
  },

  maxHeight: '90%',  
  bgcolor: "background.paper",
  border: "3px solid #302E53",
  borderRadius: "5px",
  boxShadow: 24,
  p: {
    // mobile: 1,
    tablet: 3,
  },

  overflowY: "auto",
  overflowX: 'hidden',
  margin: 0,
  padding: 0,
  listStyle: "none",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px #D07017",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#D07017",
    outline: "1px solid #302E53",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "rgba(208,112,23,0.7)",
    },
  },
};
