import { styled } from "@material-ui/system";

export const HomeFooter = styled("footer")({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  alignContent: "center",
  position: "absolute",
  bottom: 0,
  textAlign: "center",
  width: "100%",
  maxHeight: "250px",
  padding: "15px",
  color: "#f5f5f5",

  boxShadow: "0px -33px 44px -13px rgba(48,46,83,0.59)",
  webkitBoxShadow: "0px -33px 44px -13px rgba(48,46,83,0.59)",
  mozBoxShadow: "0px -33px 44px -13px rgba(48,46,83,0.59)",

  backgroundImage:
    "linear-gradient( 97deg,  rgba(155,155,166,1) 10.4%, rgba(48,46,83,1) 87.7% )",
  "& h1": {
    margin: 0,
  },

  "& div": {
    maxWidth: "500px",
    textAlign: "left",

    "& span": {
      margin: 10,

      "& :hover": {
        transform: "translateY(-15%) scale(1.15)",
        transition: "400ms",
      },
    },
  },

  "& ul": {
    padding: 0,
    margin: 0,
    fontSize: "13px",
    textAlign: "left",
    listStyle: "none",
  },
});
