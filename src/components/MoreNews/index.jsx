import { Button, Grid } from "@material-ui/core";
import Crop54TwoToneIcon from "@mui/icons-material/Crop54TwoTone";
import { useFlightNews } from "../../contexts/flightnews";

const MoreNews = () => {
  const { moreNews, sorted } = useFlightNews();

  const handleMoreNews = () => {
    moreNews();
    if (sorted) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Grid
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Crop54TwoToneIcon />
        <Crop54TwoToneIcon />
        <Crop54TwoToneIcon />
        <Button
          onClick={() => handleMoreNews()}
          sx={{ margin: 3, width: 150 }}
          color="secondary"
          variant="outlined"
        >
          mais
        </Button>
      </Grid>
    </>
  );
};

export default MoreNews;
