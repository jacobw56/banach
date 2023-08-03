import ShapeButton from "../ShapeButton/ShapeButton";
import circleLargeWhite from "../../assets/circ_lg_white.png";
import circleMediumWhite from "../../assets/circ_md_white.png";
import circleSmallWhite from "../../assets/circ_sm_white.png";
import squareLargeWhite from "../../assets/sq_lg_white.png";
import squareMediumWhite from "../../assets/sq_md_white.png";
import squareSmallWhite from "../../assets/sq_sm_white.png";
import triangleLargeWhite from "../../assets/tri_lg_white.png";
import triangleMediumWhite from "../../assets/tri_md_white.png";
import triangleSmallWhite from "../../assets/tri_sm_white.png";
import { useEffect, useState } from "react";

const shapeMatrix = [
  {
    shape: "circle",
    buttons: [
      {
        image: circleLargeWhite,
        action: "SET_CIRCLE_LARGE",
        selected: false,
      },
      {
        image: circleMediumWhite,
        action: "SET_CIRCLE_MEDIUM",
        selected: false,
      },
      {
        image: circleSmallWhite,
        action: "SET_CIRCLE_SMALL",
        selected: false,
      },
    ],
  },
  {
    shape: "square",
    buttons: [
      {
        image: squareLargeWhite,
        action: "SET_SQUARE_LARGE",
        selected: false,
      },
      {
        image: squareMediumWhite,
        action: "SET_SQUARE_MEDIUM",
        selected: false,
      },
      {
        image: squareSmallWhite,
        action: "SET_SQUARE_SMALL",
        selected: false,
      },
    ],
  },
  {
    shape: "triangle",
    buttons: [
      {
        image: triangleLargeWhite,
        action: "SET_TRIANGLE_LARGE",
        selected: false,
      },
      {
        image: triangleMediumWhite,
        action: "SET_TRIANGLE_MEDIUM",
        selected: false,
      },
      {
        image: triangleSmallWhite,
        action: "SET_TRIANGLE_SMALL",
        selected: false,
      },
    ],
  },
];

const ShapeSelector = ({ dispatch }) => {
  const [matrix, setMatrix] = useState(shapeMatrix);

  useEffect(() => {
    console.log(JSON.stringify(matrix));
  }, [matrix]);

  const handleClick = (action, x, y) => {
    let tempMatrix = shapeMatrix;
    tempMatrix[x].buttons[y].selected = true;
    console.log("Old matrix: " + JSON.stringify(matrix));
    dispatch({ type: action });
    return setMatrix(tempMatrix);
  };

  return (
    <div>
      {matrix.map((shape, x) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6px",
          }}
          key={shape.shape}
        >
          {shape.buttons.map((button, y) => (
            <ShapeButton
              x={x}
              y={y}
              handleClick={handleClick}
              action={button.action}
              image={button.image}
              selected={button.selected}
              key={button.action}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShapeSelector;
