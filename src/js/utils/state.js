const state = {
    // example: title: "rocks!"
}

const fetchState = () => {
    for (let key in sessionStorage) {
        if (sessionStorage.hasOwnProperty(key)) {
            state[key] = sessionStorage.getItem(key);
        }
    }
}

const displayState = () => {
    const appHtml = document.body.innerHTML;

    const updatedHtml = appHtml.replace(/{{(.*?)}}/g, (match, key) => {
        return state[key.trim()] || match;
    });

    document.body.innerHTML = updatedHtml;
}

export const loadState = () => {
    fetchState()
    displayState()
}

export const setState = (item, value) => {
    state[`${item}`] = value;
    sessionStorage.setItem('key', 'value');
    // refresh the UI after updating state
    displayState();
}