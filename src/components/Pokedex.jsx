import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const Pokedex = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Pokedex</h1>
      <hr />

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mt-4 me-2"
          onClick={() => (counter > 1 ? decrement() : null)}
        >
          Anterior
        </button>
        <button className="btn btn-primary mt-4" onClick={() => increment()}>
          Siguiente
        </button>
      </div>

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data?.name}
          sprites={[
            data?.sprites.front_default,
            data?.sprites.front_shiny,
            data?.sprites.back_default,
            data?.sprites.back_shiny,
          ]}
          types={data?.types}
          abilities={data?.abilities}
          moves={data?.moves}
        />
      )}


    </>
  );
};
