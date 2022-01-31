import { Container, Paper } from "@material-ui/core";
import { useFlightNews } from "../../contexts/flightnews";
import FlightNewsCard from "../FlightNewsCard";
import { style } from "./styles";

const FlightNewsList = ({ filterSearch }) => {
  const { flightList } = useFlightNews();

  return (
    <>
      {flightList &&
        flightList
          .filter((news) =>
            filterSearch ? news.title.toLowerCase().includes(filterSearch.toLowerCase()) : flightList
          )
          .map((news) => (
            <Container sx={style} key={news.id.toString()}>
              <FlightNewsCard flightNews={news} />
            </Container>
          ))}
    </>
  );
};

export default FlightNewsList;
