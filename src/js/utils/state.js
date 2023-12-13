const state = {
    title: "rocks!"
}

const fetchState = () => {

}

const displayState = () => {
    const appElement = document.getElementById("app");
    const appHtml = appElement.innerHTML;

    const updatedHtml = appHtml.replace(/{{(.*?)}}/g, (match, key) => {
        return state[key.trim()] || match;
    });

    appElement.innerHTML = updatedHtml;
}

export const loadState = () => {
    fetchState()
    displayState()
}

export const setState = (item, value) => {
    state[`${item}`] = value;
}