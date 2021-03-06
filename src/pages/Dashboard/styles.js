import { styled } from "@material-ui/system";
import { Button } from "@material-ui/core";

export const Main = styled("main")({
  padding: "10px",
  width: "1000px",
  margin: "0 auto",
});

export const NewsButton = styled(Button)({
  marginBottom: 10,
});

export const SortButton = styled(NewsButton)({});

export const GridStyle = {
  p: 2,
  justifyContent: "center",
  maxWidth: 1000,
  margin: "0 auto",
  position: "relative",
};

export const RocketDiv = styled("div")({
  border: "2px solid #302E53",
  borderRadius: "50%",
  margin: "150px auto 0",
  position: "relative",
  width: 100,
  height: 100,

  "& #rocket": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "3rem",
    color: "#302E53",
  },
});

export const hoverColor = {
  "&:hover": {
    backgroundColor: "#302E53",
  },
};

export const textAreaIconsHover = {
  "&:hover": {
    color: "#302E53",
    cursor: "pointer",
  },
};

export const boxStyle = {
  display: "flex",
  flexDirection: { mobile: "column", tablet: "row" },
  maxWidth: 400,
  margin: "0 auto",
  position: { tablet: "absolute" },
  right: { tablet: 0 },
};

export const appTitleStyle = {
  textAlign: "center",
  m: 2,
  display: { mobile: "none", tablet: "block" },
};

export const searchFieldStyle = {
  margin: { mobile: "0 0 10px", tablet: "0 10px" },
};

export const searchGridStyle = {
  margin: "0 auto", position: "relative"
}
