import { ThemeProvider, Typography } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { theme } from "./styles/theme";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Typography>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
