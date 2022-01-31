import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { style } from "./styles";


const Home = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={style}
    >
      <Grid
        item
        xs={12}
        sx={{
          minWidth: 200,
        }}
      >
        <Button
          onClick={() => navigate("/dashboard")}
          variant="contained"
          fullWidth
        >
          Enter
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
