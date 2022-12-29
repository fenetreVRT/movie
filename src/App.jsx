import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import SearchResult from "./pages/SearchResult";

function App() {
  //ska skcikas till footer plus uppdateras i movie page
  const [recent, setRecent] = useState([]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movie/:id"
          element={<MoviePage recent={recent} setRecent={setRecent} />}
        />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="*" element={<em>Du ä fel</em>} />
      </Routes>
      <Footer recent={recent} setRecent={setRecent} />
    </div>
  );
}

export default App;
