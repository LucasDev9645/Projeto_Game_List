import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";

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
            <Route path="games" element={<GameList />} />
          </Routes>
        </ContainerStyles>
      </BrowserRouter>
    </>
  );
};

export default App;
