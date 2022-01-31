import { Box, Button, Grid } from "@material-ui/core";
import { Div, ImgGrid, style, Title, TitleGrid } from "./styles";
import format from "date-fns/format";
import NewsModal from "../NewsModal";


const FlightNewsCard = ({ flightNews, handleModal, isOpen }) => {
  
  const handle = (data) => {
    handleModal(data)
    
  }
  
  return (
    <>
      <Grid sx={style} container>
        <TitleGrid item xs={12} sm={9} md={7} lg={5} xl={4}>
          <Title>{flightNews.title}</Title>
          <Div>
            <p>{format(new Date(flightNews.publishedAt), "dd-MM-yyyy")}</p>

            {!isOpen && <Button
              href={flightNews.url}
              variant="contained"
              color="primary"
              size="small"
            >
              news site
            </Button>}
          </Div>
          <Box >
            {!isOpen ? <p>{flightNews.summary.slice(0, 150)}</p> : <p>{flightNews.summary}</p>}

            {!isOpen ? <Button onClick={() => handle(flightNews)} variant="contained" size="small">
              ver mais
            </Button>
            :
            <Button
              href={flightNews.url}
              variant="contained"
              color="primary"
              size="small"
              
            >
              news site
            </Button>
            }

          </Box>
        </TitleGrid>
        <ImgGrid item xs={12} sm={9} md={7} lg={5} xl={4}>
          <figure>
            <img src={flightNews.imageUrl} alt={flightNews.title} />
          </figure>
          
        </ImgGrid>        
      </Grid>
    </>
  );
};

export default FlightNewsCard;
