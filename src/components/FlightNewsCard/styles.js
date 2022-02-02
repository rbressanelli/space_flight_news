import { styled } from "@material-ui/system";
import { Grid } from "@material-ui/core";

export const TitleGrid = styled(Grid)({
  margin: "0 auto",
  flexDirection: { mobile: "column", tablet: "row" },

  "& p": {
    fontSize: "1rem",
    textAlign: "justify",
    scroll: "auto",
  },
});

export const ImgGrid = styled(Grid)({
  textAlign: "center",

  "& img": {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginTop: "15%",
  },
});

export const Title = styled("h1")({
  fontSize: "1.1rem",
  textAlign: "justify",
});

export const Div = styled("div")({
  height: 25,
  display: "flex",
  justifyContent: "space-around",

  "& p": {
    margin: 0,
    width: 150,
  },
});

export const style = {
  p: {
    mobile: 1,
    tablet: 2,
  },
  
  width: {
    mobile: 300,
    tablet: "100%",
  },
  borderRadius: "10px",
  borderTop: "1px solid #eee",
  borderBottom: "1px solid #eee",
};

export const boxStyle = {
  width: {
    mobile: 250,
    tablet: 350,
  },
  "& p": {
    width: 260,
  },
};

export const hoverColor = {
  "&:hover": {
    backgroundColor: "#302E53",
  },
};
