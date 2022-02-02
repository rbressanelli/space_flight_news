import { Container, Paper } from "@material-ui/core";
import { useFlightNews } from "../../contexts/flightnews";
import FlightNewsCard from "../FlightNewsCard";
import { style } from "./styles";

const FlightNewsList = ({ filterSearch, handleModal }) => {
  const { flightList, sorted } = useFlightNews();

  return (
    <>
      {flightList &&
        flightList
          .filter((news) =>
            filterSearch ? news.title.toLowerCase().includes(filterSearch.toLowerCase()) : flightList
          ).sort((a, b) => sorted ? new Date(a.publishedAt) - new Date(b.publishedAt) : new Date(b.publishedAt) - new Date(a.publishedAt)).map((news, index) => (
            <Container sx={style} key={news.id.toString()}>
              <FlightNewsCard flightNews={news} handleModal={handleModal} index={index} />
            </Container>
          ))}
    </>
  );
};

export default FlightNewsList;
