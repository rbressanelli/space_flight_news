import { Button, Grid, ThemeProvider } from "@material-ui/core";
import { CardPaper, Div, NewGrid, theme, Title } from "./styles";
import format from "date-fns/format";

const FlightNewsCard = ({ flightNews }) => {
  return (
    <>
      <Grid sx={theme} container>
        <CardPaper elevation={10} >
        <Grid item xs={12}>

          <Title>{flightNews.title}</Title>
          <Div>
            <p>{format(new Date(flightNews.publishedAt), "dd-MM-yyyy")}</p>
            <Button variant="contained" size="small">
              newsSite
            </Button>
          </Div>

          <p>{flightNews.summary}</p>
          <Button variant="contained" size="small">
            ver mais
          </Button>
        </Grid>
        <NewGrid item xs={12}>
          <figure>
            <img
              src={flightNews.imageUrl}
              alt={flightNews.title}
              width="100px"
            />
          </figure>
        </NewGrid>
        </CardPaper>
      </Grid>
    </>
  );
};

export default FlightNewsCard;
