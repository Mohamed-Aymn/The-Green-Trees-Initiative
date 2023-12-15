const navbar = async () => {
    const currentPage = window.location.pathname;
    const indexPage = currentPage.includes("index")

    const HTML = `
        <a href="${indexPage ? "" : "../"}index.html" class="navbar__links-container__logo"><span class="navbar__logo">The Green<br>Trees Initiative</span></a>
        <ul class="navbar__links-container">
            <li><a href="https://github.com/gigachadteam/Very-Green-WebProject" class="navbar__links-container__link">Github</a></li>
            <li><a href="${indexPage ? "./pages/" : ""}about-us.html" class="navbar__links-container__link">About us</a></li>
            <li><a href="${indexPage ? "./pages/" : ""}payment-first-stage.html" class="navbar__links-container__link navbar__links-container__link--primary">Donate now</a></li>
        </ul>
        <div id="navbar__mobile-icon" class="navbar__icon-container">
            <img src="${indexPage ? "../" : "../../"}assets/photos/nav-icon.svg" alt="nav-icon" />
        </div>
        <div id="navbar__mobile-display">
            <div class="navbar__mobile-close-icon-conatiner__icon-conatiner">
                <img id="navbar__mobile-close-icon-conatiner__icon" src="${indexPage ? "../" : "../../"}assets/photos/close-icon.svg" alt="close-icon" />
            </div>
            <ul class="navbar__mobile-display__items">
                <li><a href="https://github.com/gigachadteam/Very-Green-WebProject" class="navbar__links-container__link">Github</a></li>
                <li><a href="${indexPage ? "./pages/" : ""}about-us.html" class="navbar__links-container__link">About us</a></li>
                <li><a href="${indexPage ? "./pages/" : ""}payment-first-stage.html" class="navbar__links-container__link navbar__links-container__link--primary">Donate now</a></li>
            </ul>
        </div>
    `;

    const tempContainer = document.createElement('nav');
    tempContainer.innerHTML = HTML;
    tempContainer.classList.add("navbar");
    const overlayDiv = document.createElement('div');
    overlayDiv.id = 'navbar__overlay';

    await document.body.prepend(tempContainer);
    await document.body.prepend(overlayDiv);

    const navbarIcon = document.getElementById("navbar__mobile-icon");
    const navbarBody = document.getElementById("navbar__mobile-display");
    const navbarCloseIcon = document.getElementById("navbar__mobile-close-icon-conatiner__icon");
    const overlay = document.getElementById("navbar__overlay");

    navbarIcon.addEventListener("click", () => {
        navbarBody.style.display = "block";
        overlay.style.display = "block";
    });

    navbarCloseIcon.addEventListener("click", () => {
        navbarBody.style.display = "none";
        overlay.style.display = "none";
    });
};

const footer = () => {
    const HTML = `
        <h1 class="h1--blue h1--small">
            The&nbspGreen Tree&nbspInitiative
        </h1>
        <div class="footer__content-container">
            <div class="footer__content-container__content">
                <div class="footer__content-container__content__heading">Contact Us</div>
                <hr>
                <div>
                    123 Anywhere St.<br> cityname,&nbspNY&nbsp11296<br>(123)456-7890 contact@npo.org
                </div>
            </div>
            <div class="footer__content-container__content">
                <div class="footer__content-container__content__heading">Links</div>
                <hr>
                <div>
                    <a href="" class="a--nostyling">The&nbspissue</a>
                    <br>
                    <a href="" class="a--nostyling">How&nbspwe&nbsphelp</a>
                    <br>
                    <a href="" class="a--nostyling">Get&nbspInvolved</a>
                    <br>
                    <a href="" class="a--nostyling">Latest&nbspnews</a>
                </div>
            </div>
            <div class="footer__content-container__content">
                <div class="footer__content-container__content__heading">Follow us</div>
                <hr>
                    <div>
                        <a href="" class="a--nostyling">Facebook</a>
                        <br>
                        <a href="" class="a--nostyling">Twitter</a>
                        <br>
                        <a href="" class="a--nostyling">Instagram</a>
                        <br>
                        <a href="" class="a--nostyling">Medium</a>
                    </div>
                </hr>
            </div>
        </div>
        <div>
            <p class="stylized-text stylized-text--blue stylized-text--md">
                #STOP CLIMATE CHANGE
            </p>
        </div>
    `;

    const tempContainer = document.createElement('footer');
    tempContainer.innerHTML = HTML;
    tempContainer.classList.add("footer");

    document.body.append(tempContainer)
}

export const layout = () => {
    navbar()
    footer()
}