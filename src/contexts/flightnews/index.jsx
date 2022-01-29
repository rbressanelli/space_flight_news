import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";

import api from "../../services/api";

const FlightNewsContext = createContext();

export const FlightNewsProvider = ({ children }) => {
  const [flightList, setFlightList] = useState([]);
  const [pagination, setPagination] = useState(0);

  const getNewsFromApi = useCallback(async () => {
    try {
      const response = await api.get(
        `/articles?_limit=10&_start=${pagination}`
      );
      setFlightList(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [pagination]);

  const changePage = () => {
    setPagination(pagination + 10);
    console.log(pagination);
  };

  useEffect(() => {
    getNewsFromApi();
  }, [getNewsFromApi]);

  
  const contextValue = {
    flightList,
    getNewsFromApi,
    changePage,
  };

  return (
    <FlightNewsContext.Provider value={contextValue}>
      {children}
    </FlightNewsContext.Provider>
  );
};

export const useFlightNews = () => useContext(FlightNewsContext);
