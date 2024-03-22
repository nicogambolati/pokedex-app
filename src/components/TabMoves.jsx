import { useFetch } from "../hooks";
import { TableLevelUpMoves } from "./TableLevelUpMoves";
import { TableMachineMoves } from "./TableMachineMoves";

export const TabMoves = ({ moves, game }) => {
  const { data, isLoading, hasError } = useFetch(
    'https://pokeapi.co/api/v2/machine/'
  );



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
              </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {/* Tabla de movimientos por nivel */}
                <TableLevelUpMoves moves={moves} game={game}/>

              </div>

              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                {/* Tabla de movimientos por maquina */}
                <TableMachineMoves moves={moves} game={game}/>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
