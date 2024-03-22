export const TableLevelUpMoves = ({ moves, game }) => {
  return (
    <table className="table" cellSpacing="0">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Moves</th>
                      <th scope="col">Level Learned At</th>
                    </tr>
                  </thead>

                  <tbody>
                    {moves
                      //Filtra los movimientos que pertenecen al juego y que se aprenden por nivel
                      .filter((move) =>
                        move.version_group_details.some(
                          (detail) =>
                            detail.version_group.name === game &&
                            detail.move_learn_method.name === "level-up"
                        )
                      )
                      //Ordena los movimientos por nivel
                      .sort((a, b) => {
                        const aLevel = a.version_group_details.find(
                          (detail) =>
                            detail.version_group.name === game &&
                            detail.move_learn_method.name === "level-up"
                        ).level_learned_at;
                        const bLevel = b.version_group_details.find(
                          (detail) =>
                            detail.version_group.name === game &&
                            detail.move_learn_method.name === "level-up"
                        ).level_learned_at;
                        return aLevel - bLevel;
                      })
                      //Muestra los movimientos
                      .map((move, index) => (
                        <tr key={move.move.name}>
                          <th scope="row">{index + 1}</th>
                          <td>{move.move.name}</td>
                          <td>
                            {move.version_group_details
                              .filter(
                                (detail) =>
                                  detail.version_group.name === game &&
                                  detail.move_learn_method.name === "level-up"
                              )
                              .map((detail, detailIndex) => (
                                <span key={detailIndex}>
                                  {detail.level_learned_at}
                                </span>
                              ))}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
  )
}
