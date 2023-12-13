// import Handlebars from "handlebars";
// import Handlebars from "../libs/handlebars.min.js";


const state = {
    title: "rocks!"
}

const fetchState = () => {

}

const displayState = () => {
    const app = document.getElementById("app")
    const template = Handlebars.compile(app.innerHTML)
    app.innerHTML = template(state)
}

export const loadState = () => {
    fetchState()
    displayState()
}

export const setState = (item, value) => {
    state[`${item}`] = value;
}