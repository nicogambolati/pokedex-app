

export const TableMoves = ({moves}) => {
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Move</th>
      <th scope="col">Level Learned At</th>
    </tr>
  </thead>
  <tbody>
    {moves
      .filter((move) =>
        move.version_group_details.some(
          (detail) => detail.version_group.name === 'scarlet-violet' && detail.move_learn_method.name === 'level-up'
        )
      )
      .map((move, index) => (
        <tr key={move.move.name}>
          <th scope="row">{index}</th>
          <td>{move.move.name}</td>
          <td>
            {move.version_group_details
              .filter((detail) => detail.version_group.name === 'scarlet-violet' && detail.move_learn_method.name === 'level-up')
              .map((detail, detailIndex) => (
                <span key={detailIndex}>{detail.level_learned_at}</span>
              ))}
          </td>
        </tr>
      ))}
  </tbody>
</table>
  )
}
