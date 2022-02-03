import { Box, Button, Fade, Grid, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Video from "../../assets/backgroundVideo.mp4";
import Zoom from "@mui/material/Zoom";

import { style, VideoBackGround, buttonStyle } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Zoom in timeout={2500}>
        <Grid container sx={style}>
          <Grid item mobile={12}>
            <VideoBackGround autoPlay loop muted id="video">
              <source src={Video} type="video/mp4" />
            </VideoBackGround>
            <Button
              sx={buttonStyle}
              onClick={() => navigate("/dashboard")}
              variant="contained"
              endIcon={<RocketLaunchIcon />}
            >
              Enter
            </Button>
          </Grid>
        </Grid>
      </Zoom>
    </>
  );
};

export default Home;
