import { useCounter, useFetch } from "../hooks";
import { Header } from "./Header";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const Pokedex = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <Header />

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
          decrement={decrement}
          increment={increment}
        />
      )}
    </>
  );
};
