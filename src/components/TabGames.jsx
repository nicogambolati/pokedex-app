import { useState } from "react";
import { useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { TabMoves } from "./TabMoves";
import { GameAsset } from "./GameAsset";

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
          <div className="btn-group flex-wrap ">
            {data.results.map((game) => (
              <button
                key={game.name}
                type="button"
                className={`btn btn-outline-primary m-1 text-capitalize ${gameSelected === game.name ? 'active' : ''}`}
                aria-current="page"
                onClick={() => handlessGameSelected(game.name)}
              >
                {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" alt={game.name} /> */}
                <GameAsset gameName={game.name}/>
                {game.name.replace(/-/g, " ")}
              </button>
            ))}
          </div>

          <TabMoves moves={moves} game={gameSelected} />
        </>
      )}
    </section>
  );
};

// const truncatedStr = gameName.replace(/-/g, " ");
// console.log(truncatedStr); // Output: "examplestring"