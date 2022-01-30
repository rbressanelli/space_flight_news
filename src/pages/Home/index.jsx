import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

  return (
    <main>
      <h1>HOME</h1>
      <Button onClick={() => navigate('/dashboard')} variant="contained">
        Dashboard
      </Button>
    </main>
  );
};

export default Home;
