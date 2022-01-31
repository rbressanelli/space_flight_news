import { Button, Grid } from "@material-ui/core";
import { CardPaper, Div, ImgGrid, style, Title, TitleGrid } from "./styles";
import format from "date-fns/format";
import { Link } from "react-router-dom";

const FlightNewsCard = ({ flightNews }) => {
  const handleNewsSite = () => {};

  return (
    <>
      <Grid sx={style} container>
        <TitleGrid item xs={12} sm={9} md={7} lg={5} xl={4}>
          <Title>{flightNews.title}</Title>
          <Div>
            <p>{format(new Date(flightNews.publishedAt), "dd-MM-yyyy")}</p>

            <Button
              href={flightNews.url}
              variant="contained"
              color="primary"
              size="small"
            >
              news site
            </Button>
          </Div>
          <div>
            <p>{flightNews.summary.slice(0, 150)}</p>
            <Button variant="contained" size="small">
              ver mais
            </Button>
          </div>
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
