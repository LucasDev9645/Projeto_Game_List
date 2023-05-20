import { Link } from "react-router-dom";

import imgHome from "../../assets/img/GAMER.svg";

import { HomeContainer, HomeButton, HomeImg, HomeP, HomeH1 } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <HomeH1>
          Veja aqui seus jogos
          <br />
          favoritos.
        </HomeH1>
        <HomeP>Clique no botão abaixo e veja nossa coleção de jogos !</HomeP>
        <Link to="/games/all">
          <HomeButton>Ver os Jogos</HomeButton>
        </Link>
      </div>
      <HomeImg src={imgHome} alt="imagem da tela inicial de uma pessoa gamer" />
    </HomeContainer>
  );
};

export default Home;
