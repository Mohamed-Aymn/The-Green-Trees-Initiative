import { layout } from "./layout.js";
import { loadState } from "./state.js";

// functions in this common function are triggered once on page load
export const common = () => {
    layout();
    loadState();
}