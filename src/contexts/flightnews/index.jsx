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
  const [ limitation, setLimitation ] = useState(10)

  const getNewsFromApi = useCallback(async () => {
    try {
      const response = await api.get(
        `/articles?_limit=${limitation}&_start=${pagination}`
      );
      setFlightList(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [pagination, limitation]);

  const changePage = (flag) => {
    if (flag){
      setPagination(pagination + 10);
    } else if (!flag && pagination > 0){
      setPagination(pagination - 10) 
       
    }
    if(!flag && pagination < 20){
        setLimitation(10)
      }             
  };
 
  const moreNews = () => {
    setLimitation(limitation + 10)    
  }

  useEffect(() => {
    getNewsFromApi();
  }, [getNewsFromApi]);
  
  
  const contextValue = {
    flightList,
    getNewsFromApi,
    changePage,
    moreNews
  };

  return (
    <FlightNewsContext.Provider value={contextValue}>
      {children}
    </FlightNewsContext.Provider>
  );
};

export const useFlightNews = () => useContext(FlightNewsContext);
