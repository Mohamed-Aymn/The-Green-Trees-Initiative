const state = {
    title: "rocks!"
}

export function init() {
    // template engine
    const app = document.getElementById("app")
    const template = Handlebars.compile(app.innerHTML)
    app.innerHTML = template(state)
}