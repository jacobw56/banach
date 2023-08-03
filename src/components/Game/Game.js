import { useReducer } from "react";
import Grid from "../Grid/Grid";
import { gameReducer } from "../../reducers/game-reducer";
import { getInitialState } from "../../utils/get-initial-state";
import "./Game.css";
import Logic from "../Logic/Logic";
import ShapeSelector from "../ShapeSelector/ShapeSelector";

export function Game() {
  const [state, dispatch] = useReducer(gameReducer, getInitialState());
  const { grid, shape } = state;

  const handleCellClick = (x, y) => {
    dispatch({ type: "CLICK", payload: { x, y, shape } });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
          }}
        >
          <button className="button-1" onClick={reset} type="button">
            Reset
          </button>
        </div>
        <Grid grid={grid} handleClick={handleCellClick} />
        <ShapeSelector dispatch={dispatch} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
          }}
        >
          <label>
            <input type="checkbox" />
            Lock grid
          </label>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Logic />
      </div>
    </div>
  );
}
