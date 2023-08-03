const cellStyle = {
  height: 75,
  width: 75,
};

const cellBGColors = ["#6aa194", "#886aa1"];

const buttonStyle = {
  backgroundColor: "transparent",
  border: "none",
  fontFamily: "var(--fonts-secondary)",
  fontSize: "2em",
  fontWeight: "bold",
  height: "100%",
  width: "100%",
  color: "#fff",

  "&:hover, &:focus": {
    outline: "2px solid var(--colors-accent)",
  },
};

const Cell = ({ cell, handleClick, x, y }) => {
  return (
    <div style={{ ...cellStyle, backgroundColor: cellBGColors[(x + y) % 2] }}>
      <button type="button" style={buttonStyle} onClick={handleClick}>
        {cell}
      </button>
    </div>
  );
};

export default Cell;
