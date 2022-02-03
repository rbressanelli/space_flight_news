import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import PageviewIcon from "@mui/icons-material/Pageview";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, Grid, TextField, Fade } from "@material-ui/core";

import NewsModal from "../../components/NewsModal";
import { useFlightNews } from "../../contexts/flightnews";
import FlightNewsList from "../../components/FlightNewsList";
import MoreNews from "../../components/MoreNews";
import {
  NewsButton,
  GridStyle,
  RocketDiv,
  hoverColor,
  textAreaIconsHover,
} from "./styles";

const Dashboard = () => {
  const { sortNews, sorted, getOlderNews, getNewerNews } = useFlightNews();

  const [newsSearch, setNewsSearch] = useState("");
  const [foundedNews, setFoundedNews] = useState("");
  const [changeIcon, setChangeIcon] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleSearchNews = (e) => {
    if (newsSearch.length > 0) {
      setFoundedNews(e);
      setChangeIcon(true);
    }
  };

  const handleClearSearchField = () => {
    setNewsSearch("");
    setFoundedNews(null);
    setChangeIcon(false);
  };

  const handleOpenModal = (data) => {
    setOpen(true);
    setData(data);
  };

  return (
    <Fade in timeout={1000}>
      <Grid sx={GridStyle}>
        <Grid
          item
          mobile={12}
          tablet={8}
          sx={{ margin: "0 auto", position: "relative" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { mobile: "column", tablet: "row" },
              maxWidth: 400,
              margin: "0 auto",
              position: { tablet: "absolute" },
              right: { tablet: 0 },
            }}
          >
            <TextField
              sx={{ margin: { mobile: "0 0 10px", tablet: "0 10px" } }}
              size="small"
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {!changeIcon ? (
                      <PageviewIcon
                        onClick={() => handleSearchNews(newsSearch)}
                        color="primary"
                        fontSize="large"
                        sx={textAreaIconsHover}
                      />
                    ) : (
                      <ClearIcon
                        onClick={() => handleClearSearchField()}
                        color="primary"
                        fontSize="large"
                        sx={textAreaIconsHover}
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
                onClick={() => sortNews()}
                variant="contained"
                fullWidth
                endIcon={sorted ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                sx={hoverColor}
              >
                Sort
              </NewsButton>
              <div>
                <NewsButton
                  onClick={() => getOlderNews(true)}
                  variant="contained"
                  fullWidth
                  sx={hoverColor}
                >
                  mais antigas
                </NewsButton>
                <NewsButton
                  onClick={() => getNewerNews()}
                  variant="contained"
                  fullWidth
                  sx={hoverColor}
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
          <FlightNewsList
            filterSearch={foundedNews}
            handleModal={handleOpenModal}
          />
          <NewsModal open={open} data={data} setOpen={setOpen} />
        </Grid>
        <MoreNews />
      </Grid>
    </Fade>
  );
};

export default Dashboard;
