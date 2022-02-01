import FlightNewsList from "../../components/FlightNewsList";
import { useFlightNews } from "../../contexts/flightnews";
import { Main, NewsButton, GridStyle, RocketDiv } from "./styles";
import InputAdornment from "@mui/material/InputAdornment";
import PageviewIcon from "@mui/icons-material/Pageview";
import { Box, Grid, TextField } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import NewsModal from "../../components/NewsModal";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Dashboard = () => {
  const { changePage } = useFlightNews();

  const [newsSearch, setNewsSearch] = useState("");
  const [foundedNews, setFoundedNews] = useState("");
  const [changeIcon, setChangeIcon] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    if (newsSearch.length > 0) {
      setFoundedNews(e);
      setChangeIcon(true);
    }
  };

  const handleClear = () => {
    setNewsSearch("");
    setFoundedNews(null);
    setChangeIcon(false);
  };

  const handleModal = (data) => {
    setOpen(true);
    setData(data);
  };

  return (
    <Grid sx={GridStyle}>
      <Grid item mobile={12} tablet={8} sx={{ margin: "0 auto", position: 'relative' }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { mobile: "column", tablet: "row" },
            maxWidth: 400,
            margin: '0 auto',
            position: {tablet: 'absolute'},
            right: {tablet: 0},
            
          }}
        >
          <TextField
            sx={{margin: {mobile: '0 0 10px', tablet: '0 10px'}}}
            size="small"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {!changeIcon ? (
                    <PageviewIcon
                      onClick={() => handleSearch(newsSearch)}
                      color="primary"
                      fontSize="large"
                      sx={{
                        "&:hover": { color: "#302E53", cursor: "pointer" },
                      }}
                    />
                  ) : (
                    <ClearIcon
                      onClick={() => handleClear()}
                      color="primary"
                      fontSize="large"
                      sx={{
                        "&:hover": { color: "#302E53", cursor: "pointer" },
                      }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
            color="secondary"
            fullWidth
            value={newsSearch}
            onChange={(e) => setNewsSearch(e.target.value)}
          />
          <div>
            <NewsButton
              onClick={null}
              variant="contained"
              fullWidth
              sx={{
                "&:hover": {
                  backgroundColor: "#302E53",
                },
              }}
            >
              Sort
            </NewsButton>
            <div>
              <NewsButton
                onClick={() => changePage(true)}
                variant="contained"
                fullWidth
                sx={{
                  "&:hover": {
                    backgroundColor: "#302E53",
                  },
                }}
              >
                mais antigas
              </NewsButton>
              <NewsButton
                onClick={() => changePage(null)}
                variant="contained"
                fullWidth
                sx={{
                  "&:hover": {
                    backgroundColor: "#302E53",
                  },
                }}
              >
                mais novas
              </NewsButton>
            </div>
          </div>
        </Box>
      </Grid>
      <Grid
        sx={{
          textAlign: "center",
          m: 2,
          display: { mobile: "none", tablet: "block" },
        }}
      >
        <RocketDiv>
          <RocketLaunchIcon id="rocket" />
        </RocketDiv>
        <h1>Space Flight News</h1>
        <hr />
      </Grid>
      <Grid>
        <FlightNewsList filterSearch={foundedNews} handleModal={handleModal} />
        <NewsModal open={open} data={data} setOpen={setOpen} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
