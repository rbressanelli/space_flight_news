import { Box, Button, Grid } from "@material-ui/core";
import { Div, ImgGrid, style, Title, TitleGrid, boxStyle } from "./styles";
import format from "date-fns/format";

const FlightNewsCard = ({ flightNews, handleModal, isOpen, index }) => {
  const handle = (data) => {
    handleModal(data);
  };
  

  return (
    <>
      <Grid sx={style} container>
        {index%2===0 && <ImgGrid item mobile={12} tablet={6} laptop={5}>
          <figure>
            <img src={flightNews.imageUrl} alt={flightNews.title} />
          </figure>
        </ImgGrid>}
        <TitleGrid item mobile={12} tablet={6} laptop={5}>
          <Title>{flightNews.title}</Title>
          <Div>
            <p>{format(new Date(flightNews.publishedAt), "dd-MM-yyyy")}</p>

            {!isOpen && (
              <Button
                href={flightNews.url}
                variant="contained"
                color="primary"
                size="small"
              >
                news site
              </Button>
            )}
          </Div>
          <Box sx={boxStyle}>
            {!isOpen ? (
              <p>{flightNews.summary.slice(0, 150)}</p>
            ) : (
              <p>{flightNews.summary}</p>
            )}

            {!isOpen ? (
              <Button
                onClick={() => handle(flightNews)}
                variant="contained"
                size="small"
              >
                ver mais
              </Button>
            ) : (
              <Button
                href={flightNews.url}
                variant="contained"
                color="primary"
                size="small"
              >
                news site
              </Button>
            )}
          </Box>
        </TitleGrid>
        {index%2===1 && <ImgGrid item mobile={12} tablet={6} laptop={5}>
          <figure>
            <img src={flightNews.imageUrl} alt={flightNews.title} />
          </figure>
        </ImgGrid>}
      </Grid>
    </>
  );
};

export default FlightNewsCard;
