import { styled } from "@material-ui/system";
import { Button } from "@material-ui/core";
import { theme } from "../../styles/theme";

export const Main = styled("main")({
  padding: "10px",
  width: '1000px',
  margin: '0 auto',
});

export const NewsButton = styled(Button)({
  marginBottom: 10,
});

export const GridStyle = {
  // width: { mobile: 300, tablet: 500 },
  p: 2,
  justifyContent: "center",
  maxWidth: 1000,
  margin: '0 auto',
  position: 'relative',
};


export const RocketDiv = styled('div')({
  border: '2px solid #302E53',
  borderRadius: '50%', 
  margin: '150px auto 0', 
  position: 'relative',
  width: 100,
  height: 100,


  '& #rocket': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '3rem',
    color: '#302E53',    
  }



})
