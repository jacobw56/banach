import { clone } from "../utils/clone";
import { getInitialState } from "../utils/get-initial-state";

const DISPLAY_CHARS = {
  circle: "\u25EF",
  triangle: "\u25B3",
  square: "\u25A2",
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "RESET": {
      return getInitialState();
    }

    case "CLICK": {
      const { x, y } = action.payload;
      const nextState = clone(state);
      const { grid, shape } = nextState;

      grid[y][x] = DISPLAY_CHARS[shape];

      // We'll add checks for the logic statments

      return nextState;
    }

    case "SET_SQUARE": {
      const nextState = clone(state);
      if (nextState.shape === "square") {
        nextState.shape = "";
      } else {
        nextState.shape = "square";
      }
      return nextState;
    }

    case "SET_TRIANGLE": {
      const nextState = clone(state);
      if (nextState.shape === "triangle") {
        nextState.shape = "";
      } else {
        nextState.shape = "triangle";
      }
      return nextState;
    }

    case "SET_CIRCLE": {
      const nextState = clone(state);
      if (nextState.shape === "circle") {
        nextState.shape = "";
      } else {
        nextState.shape = "circle";
      }
      return nextState;
    }

    default:
      return state;
  }
};
