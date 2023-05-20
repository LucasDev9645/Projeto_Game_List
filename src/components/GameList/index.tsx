import { Outlet } from "react-router-dom";

import Navbar from "./NavBar";

import { CardsGameContainer } from "./styles";

const GameList = () => {
  return (
    <>
      <Navbar />
      <CardsGameContainer>
        <ul>
          <Outlet />
        </ul>
      </CardsGameContainer>
    </>
  );
};

export default GameList;
