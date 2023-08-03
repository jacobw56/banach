import { Game } from "./components/Game/Game";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: "15px" }}>
        <Game />
      </div>
    </div>
  );
}

export default App;
