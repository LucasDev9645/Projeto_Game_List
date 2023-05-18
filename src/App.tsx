import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";

import GlobalStyle, { Container } from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="games" element={<GameList />} />
            <Route path="game-details/:gameId" element={<GameDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
