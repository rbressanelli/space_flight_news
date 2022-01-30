import FlightNewsList from '../../components/FlightNewsList';
import {useFlightNews} from '../../contexts/flightnews'

const Dashboard = () => {

    const { flightList, changePage } = useFlightNews()
    


    return(
        <main>
        <button onClick={() => changePage(1)}>change +</button>
        <button onClick={() => changePage()}>change -</button>
        <FlightNewsList />    
        </main>
    )
}

export default Dashboard;