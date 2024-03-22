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
        <NameId name={name} id={id} />
        <Types types={types} />
      </div>

      <Sprites sprites={sprites} />

      <div className="d-flex align-items-center gap-2 ">
        <h3>Abilities: </h3>
        <Abilities abilities={abilities} />
      </div>

      <Games moves={moves} />
    </section>
  );
};
