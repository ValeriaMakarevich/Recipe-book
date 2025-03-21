import "./App.css";
import {  Routes, Route, BrowserRouter } from "react-router";
import Menu from "./components/Menu/Menu";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteName from "./components/SiteName/SiteName";
import DateTime from "./components/DataTime/DateTime";
import ResipePage from "./pages/RecipePage/ResipePage";
import ResipeAll from "./pages/ResipeAll/ResipeAll";
import ResipePost from "./pages/ResipePost/ResipePost";
import ResipeNews from "./pages/ResipeNews/ResipeNews";
import ResipeHolidays from "./pages/ResipeHolidays/ResipeHolidays";

function App() {
  return (
    <>
      <BrowserRouter>
        <SiteHeader />
        <DateTime />
        <SiteName />
        <Menu />

        <Routes>
          <Route path="/" element={<ResipeAll />} />
          <Route path="/ResipePage/:id" element={<ResipePage/>} />
          <Route path="/ResipePost" element={<ResipePost />} />
          <Route path="/ResipeNews" element={<ResipeNews />} />
          <Route path="/ResipeHolidays" element={<ResipeHolidays />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
