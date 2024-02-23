// Development Components
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
// Pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";

import PageFavorite from "../pages/PageFavorite";
import PageWatchList from "../pages/PageWatchList";
import PageNotFound from "../pages/PageNotFound";
import PageSingleMoive from "../pages/PageSingleMovie";


function AppRouter() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" exact element={<PageAbout />} />
            <Route path="/movie/:id" exact element={<PageSingleMoive />}/>
            <Route path="/favorite" element={<PageFavorite />} />
            <Route path="/watchlist" element={<PageWatchList />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }

  export default AppRouter;