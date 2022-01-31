import FlightNewsList from "../../components/FlightNewsList";
import { useFlightNews } from "../../contexts/flightnews";
import { Main, NewsButton } from "./styles";
import InputAdornment from "@mui/material/InputAdornment";
import PageviewIcon from "@mui/icons-material/Pageview";
import { TextField } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import NewsModal from "../../components/NewsModal";

const Dashboard = () => {
  const { changePage } = useFlightNews();

  const [newsSearch, setNewsSearch] = useState("");
  const [foundedNews, setFoundedNews] = useState("");
  const [changeIcon, setChangeIcon] = useState(false); 
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([])

  const handleSearch = (e) => {
    if(newsSearch.length > 0){
      setFoundedNews(e)
      setChangeIcon(true)
    }    
  };

  const handleClear = () => {
    setNewsSearch('')
    setFoundedNews(null)
    setChangeIcon(false)
  }

  const handleModal = (data, ) => {
    setOpen(true)
    setData(data)
  }

  return (
    <Main>
      <TextField
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
                  sx={{'&:hover':{color: '#302E53', cursor: 'pointer'}}}
                />
              ) : (
                <ClearIcon onClick={() => handleClear()} color="primary" fontSize="large" sx={{'&:hover':{color: '#302E53', cursor: 'pointer'}}} />
              )}
            </InputAdornment>
          ),
        }}
        color="secondary"
        fullWidth
        value={newsSearch}
        onChange={(e) => setNewsSearch(e.target.value)}
      />

      <NewsButton onClick={null} variant="contained" fullWidth>
        Sort
      </NewsButton>
      <div>
        <NewsButton
          onClick={() => changePage(true)}
          variant="contained"
          fullWidth
        >
          mais antigas
        </NewsButton>
        <NewsButton
          onClick={() => changePage(null)}
          variant="contained"
          fullWidth
        >
          mais novas
        </NewsButton>
      </div>
      <FlightNewsList filterSearch={foundedNews} handleModal={handleModal} />
      <NewsModal open={open} data={data} setOpen={setOpen}/>
    </Main>
  );
};

export default Dashboard;
