//cd cinemajournal/frontend
//npm start
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Compose } from "./pages";
import "./index.css";
import { PostProvider } from "./pages/PostContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import StatsMovie from "./pages/StatsMovie.jsx";
import StatsTV from "./pages/StatsTV.jsx";
import Movies from "./pages/Movies.jsx";
import Shows from "./pages/Shows.jsx";

function App() {
  return (
    <>
      <Header />

      <PostProvider>
        <BrowserRouter>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/compose" element={<Compose />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/stat/:postId" element={<StatsMovie />} />
              <Route path="/TVstat/:postId" element={<StatsTV />} />
            </Routes>
          </main>
        </BrowserRouter>
      </PostProvider>

      <Footer />
    </>
  );
}

export default App;

// Changes to be made:
//Make two seperate pages for movies and tv and include the compose form for both
// Call 2 different apis
//display only 3-4 newly added entries on the home page and hae a see more button to take you to the respective pages
