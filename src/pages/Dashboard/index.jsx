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
  boxStyle,
  SortButton,
  appTitleStyle,
  searchFieldStyle,
  searchGridStyle
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
          sx={searchGridStyle}
        >
          <Box
            sx={boxStyle}
          >
            <TextField
              sx={searchFieldStyle}
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
              <SortButton
                onClick={() => sortNews()}
                variant="contained"
                fullWidth
                endIcon={sorted ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                sx={hoverColor}
              >
                Sort
              </SortButton>
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
          sx={appTitleStyle}
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
