import { generateGrid } from "./generate-grid";

export const newBanachGrid = () => generateGrid(4, 4, () => null);
