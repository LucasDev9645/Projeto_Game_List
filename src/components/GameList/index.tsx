import Navbar from "./NavBar";

import ImgGame from "../../assets/img/god-of-war-ragnarok 1.png";

import { CardGame, CardsGameContainer } from "./styles";

const GameList = () => {
  return (
    <>
      <Navbar />
      <CardsGameContainer>
        <ul>
          <CardGame>
            <div>
              <img src={ImgGame} alt="imagem jogo god of war" />
            </div>
            <div>
              <h3>God of War Ragnarök</h3>
              <p>2022</p>
            </div>
          </CardGame>

          <CardGame>
            <div>
              <img src={ImgGame} alt="imagem jogo god of war" />
            </div>
            <div>
              <h3>God of War Ragnarök</h3>
              <p>2022</p>
            </div>
          </CardGame>
          <CardGame>
            <div>
              <img src={ImgGame} alt="imagem jogo god of war" />
            </div>
            <div>
              <h3>God of War Ragnarök </h3>
              <p>2022</p>
            </div>
          </CardGame>
          <CardGame>
            <div>
              <img src={ImgGame} alt="imagem jogo god of war" />
            </div>
            <div>
              <h3>God of War Ragnarök</h3>
              <p>2022</p>
            </div>
          </CardGame>
          <CardGame>
            <div>
              <img src={ImgGame} alt="imagem jogo god of war" />
            </div>
            <div>
              <h3>God of War Ragnarök</h3>
              <p>2022</p>
            </div>
          </CardGame>
        </ul>
      </CardsGameContainer>
    </>
  );
};

export default GameList;
