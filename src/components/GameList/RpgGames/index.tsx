import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { BASE_URL, Gamer } from "../../../util/ultilites";
import { CardGame } from "../../../styles";

const RpgGames = () => {
  const [rpgGames, setRpgGames] = useState<Gamer[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/lists/1/games`)
      .then((response) => setRpgGames(response.data));
  }, []);

  return (
    <>
      {rpgGames &&
        rpgGames.map((game) => (
          <div key={game.id}>
            <Link to={`game-details/${game.id}`}>
              <CardGame>
                <div>
                  <img src={game.imgUrl} alt={game.title} />
                </div>
                <div>
                  <h3>{game.title}</h3>
                  <p>{game.year}</p>
                </div>
              </CardGame>
            </Link>
          </div>
        ))}
    </>
  );
};

export default RpgGames;
