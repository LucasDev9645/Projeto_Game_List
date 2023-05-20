import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { CardGame } from "../../../styles";
import { BASE_URL, Gamer } from "../../../util/ultilites";

const AllGames = () => {
  const [allgames, setAllGames] = useState<Gamer[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/games`)
      .then((response) => setAllGames(response.data));
  }, []);

  return (
    <>
      {allgames &&
        allgames.map((game) => (
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

export default AllGames;
