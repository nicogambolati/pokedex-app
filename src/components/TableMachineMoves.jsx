import { useEffect, useState } from "react";

export const TableMachineMoves = ({ moves, game }) => {
  
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/machine/2');




const getMoves = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  
  console.log(data, 'data');

  return data;
};

useEffect(() => {
  getMoves(url);
  
}, [url]);

console.log(url, 'url');



  return (
    <table className="table" cellSpacing="0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th>Moves</th>
          <th>Name Machine</th>
        </tr>
      </thead>

      <tbody>
        {moves
          .filter((move) =>
            move.version_group_details.some(
              (detail) =>
                detail.version_group.name === game &&
                detail.move_learn_method.name === "machine"
            )
          )
          .map((move, index) => (
            <tr key={move.move.name}>
              <th scope="row">{index + 1}</th>
              <td>{move.move.name}</td>

            </tr>
          ))}
      </tbody>
    </table>
  );
};
