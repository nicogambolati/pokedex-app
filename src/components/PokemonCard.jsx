import { Abilities } from "./Abilities";
import { Types } from "./Types";
import { NameId } from "./NameId";
import { Sprites } from "./Sprites";
import { Games } from "./TabGames";

export const PokemonCard = ({
  id,
  name,
  sprites = [],
  types = [],
  abilities = [],
  moves = [],
}) => {
  return (
    <section className="card-container">
      <div className="card-header d-flex gap-2">
        <NameId name={name} id={id}/>
        <Types types={types} />
      </div>

      <Sprites sprites={sprites} />

      <Abilities abilities={abilities} />

      <Games moves={moves}/>

    </section>
  );
};


