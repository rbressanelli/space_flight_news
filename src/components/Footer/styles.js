import { styled } from "@material-ui/system";

export const HomeFooter = styled("footer")({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'center',
  position: "absolute",
  bottom: 0,
  textAlign: "center",
  width: "100%",
  height: "150px",  
  color: "#f5f5f5",
  backgroundImage:
    "linear-gradient( 97deg,  rgba(155,155,166,1) 10.4%, rgba(48,46,83,1) 87.7% )",
  "& h1": {
    margin: 0,
  },

  "& div": {
    maxWidth: '500px',
    textAlign: 'left',

    "& span": {
      margin: 10,

      "& :hover": {
        transform: 'translateY(-15%) scale(1.2)',        
        transition: '300ms',
      },
    },
  },

  "& ul": {
    padding: 0,
  },

  "& p": {
    margin: 16,
  }
});
