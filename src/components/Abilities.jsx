import React from "react";

export const Abilities = ({abilities}) => {
  return (
    <div className="text-capitalize d-flex abilities gap-2">
      {abilities.map(({ ability }, index) => (
        <React.Fragment key={ability.name}>
          <h3>{ability.name}</h3>
          {index !== abilities.length - 1 && <h3>/</h3>}
        </React.Fragment>
      ))}
    </div>
  );
};
