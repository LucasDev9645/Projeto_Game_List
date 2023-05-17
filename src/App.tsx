import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import GameList from "./GameList";
import GameDetails from "./GameDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
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
