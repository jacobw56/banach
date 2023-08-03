import { newBanachGrid } from "./new-banach-grid";

export const getInitialState = () => ({
  grid: newBanachGrid(),
  shape: "",
});
