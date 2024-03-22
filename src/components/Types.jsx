import React from "react";

export const Types = ({ types }) => {
  return (
    <div className="text-capitalize d-flex types gap-2">
      {types.map(({ type }, index) => (
        <React.Fragment key={type.name}>
          <h2>{type.name}</h2>
          {index !== types.length - 1 && <h2>/</h2>}
        </React.Fragment>
      ))}
    </div>
  );
};
