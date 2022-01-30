import { styled } from "@material-ui/system";
import { Grid, Paper } from "@material-ui/core";

export const NewGrid = styled(Grid)({
  width: "300px",
  textAlign:'center',

  "& figure": {
    margin: 0,
  },

  "& img": {
    width: "150px",
    height: "150px",
    objectFit: "contain",
  },
});

export const Title = styled("h1")({
  fontSize: "18px",
  textAlign: 'justify',
  overflow: 'auto',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
});

export const Div = styled("div")({
  height: 20,
  display: 'flex',
  justifyContent: 'space-around',

  "& p": {
    margin: 0
  }
})

export const CardPaper = styled(Paper)({
  margin: '0 auto',
  width: 280,
  padding: 10,
})

export const theme = {
  width: 300,
  p: 1,  
  m: 1,  
};
