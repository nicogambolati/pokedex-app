

export const TabMoves = ({ moves, game }) => {
  return (
    <section id="tabs" className="project-tab">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Level Up
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Machine
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Egg
                </a>
              </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
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
                      .filter((move) =>
                        move.version_group_details.some(
                          (detail) =>
                            detail.version_group.name === game &&
                            detail.move_learn_method.name === "level-up"
                        )
                      )
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
              </div>

              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <table className="table" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Moves</th>
                      <th>Name Machine</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <a href="#">Work 1</a>
                      </td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Work 2</a>
                      </td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Work 3</a>
                      </td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <table className="table" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Contest Name</th>
                      <th>Date</th>
                      <th>Award Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">Work 1</a>
                      </td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Work 2</a>
                      </td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Work 3</a>
                      </td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
