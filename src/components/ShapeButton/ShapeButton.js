import "./ShapeButton.css";

const ShapeButton = ({ action, image, selected, handleClick, x, y }) => {
  return (
    <div style={{ margin: "15px" }}>
      <button
        className={selected ? "shape-button-selected" : "shape-button"}
        onClick={() => handleClick(action, x, y)}
        type="button"
      >
        <img src={image} type="button" alt={action} />
      </button>
    </div>
  );
};

export default ShapeButton;
