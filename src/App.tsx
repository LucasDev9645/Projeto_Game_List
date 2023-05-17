import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="games" element={<GameList />} />
          <Route path="game-details/:gameId" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
