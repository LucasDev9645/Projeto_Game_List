import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import PlatformGames from "./components/GameList/PlatformGames";
import RpgGames from "./components/GameList/RpgGames";
import AllGames from "./components/GameList/AllGames";

import GlobalStyles, { ContainerStyles } from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <ContainerStyles>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="game-details/:gameId" element={<GameDetails />} />
            <Route path="games" element={<GameList />}>
              <Route index element={<AllGames />} />
              <Route path="all" element={<AllGames />} />
              <Route path="rpg" element={<RpgGames />} />
              <Route path="platform" element={<PlatformGames />} />
            </Route>
          </Routes>
        </ContainerStyles>
      </BrowserRouter>
    </>
  );
};

export default App;
