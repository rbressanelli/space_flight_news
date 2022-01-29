import { FlightNewsProvider } from "./flightnews";

const Providers = ({ children }) => {
  return <FlightNewsProvider>{children}</FlightNewsProvider>;
};

export default Providers;
