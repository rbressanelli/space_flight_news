import { styled } from "@material-ui/system";
import { Grid, Paper } from "@material-ui/core";


export const TitleGrid = styled(Grid)({
  margin: '0 auto',
  flexDirection: {mobile: 'column', tablet: 'row'},  

  "& p": {    
    fontSize: '1rem',     
    textAlign: 'justify',
    scroll: 'auto'   
  }
})

export const ImgGrid = styled(Grid)({  
  textAlign:'center',
  
  
  "& img": {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: '10px',
    marginTop: '15%',
    
  },
});

export const Title = styled("h1")({
  fontSize: "1.1rem",
  textAlign: 'justify',
  // width: 250,
   });

export const Div = styled("div")({
  height: 25,
  display: 'flex',
  justifyContent: 'space-around',

  "& p": {
    margin: 0,
    width: 150,
  }
})

export const style = {  
  p: {
    mobile: 1,
    tablet: 2
  },  
  
  margin: '0 auto',
  width: {
    mobile: 260,
    tablet: '100%'
  }, 
  borderRadius: '6px',
  boxShadow: '0 0 25px -10px #1e2022'
};

export const boxStyle = {
  width: {
    mobile: 250,
    tablet: 350
  },
  "& p": {
    width: 260,
  }
}