import { useState } from "react";
import { useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { TabMoves } from "./TabMoves";

export const Games = ({ moves }	) => {
  const { data, isLoading, hasError } = useFetch(
    "https://pokeapi.co/api/v2/version-group"
  );

  const [gameSelected, setGameSelected] = useState('red-blue');

  const handlessGameSelected = (game) => {
    setGameSelected(game);
  };

  return (
    <section id="tabs-games" className="tabs-games">
      <h3>Games</h3>

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <>
          <div className="btn-group">
            {data.results.map((game) => (
              <button
                key={game.id}
                type="button"
                className="btn btn-outline-primary"
                aria-current="page"
                onClick={() => handlessGameSelected(game.name)}
              >
                {game.name}
              </button>
            ))}
          </div>

          <TabMoves moves={moves} game={gameSelected} />
        </>
      )}
    </section>
  );
};
