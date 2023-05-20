import { NavLink } from "react-router-dom";

import { NavBarContainer, NavBarH1, NavBarP } from "./styles";

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavBarH1>Nossas Categorias:</NavBarH1>
      <ul>
        <li>
          <NavLink to="/games/all">
            <NavBarP>Todos</NavBarP>
          </NavLink>
        </li>
        <li>
          <NavLink to="/games/rpg">
            <NavBarP>Aventura e RPG</NavBarP>
          </NavLink>
        </li>
        <li>
          <NavLink to="/games/platform">
            <NavBarP>Jogos de Plataforma</NavBarP>
          </NavLink>
        </li>
      </ul>
    </NavBarContainer>
  );
};

export default Navbar;
