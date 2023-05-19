import { NavLink } from "react-router-dom";

import LogoXbox from "../../../assets/img/ion_logo-xbox.svg";
import LogoPlaystation from "../../../assets/img/ion_logo-playstation.svg";
import LogoComputer from "../../../assets/img/clarity_computer-solid.svg";

import {
  NavBarContainer,
  NavBarContainerLogo,
  NavBarH2,
  NavBarP,
} from "./styles";

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavBarH2>Categorias:</NavBarH2>
      <ul className="admin-nav-itens-container">
        <li>
          <NavLink to="/games/rpg" className="admin-nav-item">
            <NavBarP>Aventura e RPG</NavBarP>
          </NavLink>
        </li>
        <li>
          <NavLink to="/games/plataforma" className="admin-nav-item">
            <NavBarP>Jogos de Plataforma</NavBarP>
          </NavLink>
        </li>
      </ul>
      <NavBarContainerLogo>
        <div>
          <img src={LogoXbox} alt=" imagem marca xbox" />
        </div>
        <div>
          <img src={LogoPlaystation} alt="imagem marca playstation" />
        </div>
        <div>
          <img src={LogoComputer} alt="imagem de um pc gamer" />
        </div>
      </NavBarContainerLogo>
    </NavBarContainer>
  );
};

export default Navbar;
