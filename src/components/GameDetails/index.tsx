import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { BASE_URL, GamerDetails } from "../../util/ultilites";

import { GameDetailsButton, GameDetailsContainer } from "./styles";

const GameDetails = () => {
  const params = useParams();
  const [game, setGame] = useState<GamerDetails>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/games/${params.gameId}`)
      .then((response) => setGame(response.data));
  }, []);

  return (
    <>
      <GameDetailsContainer>
        <div>
          <img src={game?.imgUrl} alt={game?.title} />
        </div>

        <div>
          <h1>{game?.year}</h1>
          <h2>{game?.title}</h2>
          <p>
            <span>Gênero:</span> {game?.genre}
          </p>
          <p>
            <span>Plataformas:</span> {game?.platforms}
          </p>
          <p>{game?.shortDescription}</p>
        </div>
      </GameDetailsContainer>
      <Link to="/games/all">
        <GameDetailsButton>VOLTAR</GameDetailsButton>
      </Link>
    </>
  );
};

export default GameDetails;
