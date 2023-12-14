import { layout } from './layout.js'
import { loadState } from './state.js'
// import { loadState as loadStateFunction } from './state.js'
// functions in this common function are triggered once on page load
export const common = () => {
    // import('./layout.js').then((module) => module.layout());
    // import('./state.js').then((module) => module.loadState());
    layout()
    loadState()
    // layoutFunction()
    // loadStateFunction()

}