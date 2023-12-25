export const cookiesPermission = async () => {

    const HTML = `
        <p class="cookies-message__text">
            This site uses cookies to offer you a better browsing experience.
        </p>
        <div>
            <button id="accept-all-cookies" class="button--primary" >Accept all cookies</button>
            <button id="accept-essential-cookies" class="button--tertiary" >Accept only essential ones</button>
        </div>
    `

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = HTML;
    tempContainer.classList.add("cookies-message");
    tempContainer.setAttribute('id', 'cookies-message');

    await document.body.append(tempContainer)
    const cookiesMessage = document.getElementById("cookies-message")
    const acceptAllButton = document.getElementById("accept-all-cookies")
    const acceptEssentialButton = document.getElementById("accept-essential-cookies")

    if (localStorage.getItem("cookies") == null) {
        cookiesMessage.style.display = "block"
    }

    acceptAllButton.addEventListener("click", () => {
        localStorage.setItem("cookies", 1)
        cookiesMessage.style.display = "none"
    })

    acceptEssentialButton.addEventListener("click", () => {
        localStorage.setItem("cookies", 0)
        cookiesMessage.style.display = "none"
    })
}