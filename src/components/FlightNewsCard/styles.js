import { styled } from "@material-ui/system";
import { Grid, Paper } from "@material-ui/core";


export const TitleGrid = styled(Grid)({
  margin: '0 auto',

  "& div": {
    width: 250,
    textAlign: 'center'
  },

  "& p": {    
    fontSize: '16px',     
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
  fontSize: "18px",
  textAlign: 'justify',
  width: 250,
   });

export const Div = styled("div")({
  height: 25,
  display: 'flex',
  justifyContent: 'space-around',

  "& p": {
    margin: 0,
    
  }
})

export const CardPaper = styled(Paper)({
  margin: '0 auto',
  padding: 10,
  width: '100%',
  
})

export const style = {  
  p: 1,  
  justifyContent: 'center'  
};
