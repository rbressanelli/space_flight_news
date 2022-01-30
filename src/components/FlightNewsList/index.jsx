import { useFlightNews } from "../../contexts/flightnews";
import FlightNewsCard from "../FlightNewsCard";

const FlightNewsList = () => {
  const { flightList } = useFlightNews();

  return (
    <>
      {flightList &&
        flightList.map((news) => (
          <div key={news.id.toString()}>
            <FlightNewsCard flightNews={news} />
          </div>
        ))}
    </>
  );
};

export default FlightNewsList;
