const navbar = async () => {
    const currentPage = window.location.pathname;
    const isIndexPage = currentPage.includes("about-us") ||
        currentPage.includes("paymnet-first-stage") ||
        currentPage.includes("paymnet-second-stage") ||
        currentPage.includes("appreciation");

    const HTML = `
        <a href="${!isIndexPage ? "" : "../"}index.html" class="navbar__logo">The Green<br>Trees Initiative</a>
        <ul class="navbar__links-container">
            <li><a href="https://github.com/gigachadteam/Very-Green-WebProject" class="navbar__links-container__link">Github</a></li>
            <li><a href="${!isIndexPage ? "./pages/" : ""}about-us.html" class="navbar__links-container__link">About us</a></li>
            <li><a href="${!isIndexPage ? "./pages/" : ""}payment-first-stage.html" class="navbar__links-container__link navbar__links-container__link--primary">Donate now</a></li>
        </ul>
        <div id="navbar__mobile-icon" class="navbar__icon-container">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div id="navbar__mobile-display">
            <i id="navbar__mobile-close-icon-conatiner__icon" class="fa-solid fa-x"></i>
            <ul class="navbar__mobile-display__items">
                <li><a href="https://github.com/gigachadteam/Very-Green-WebProject" class="navbar__links-container__link">Github</a></li>
                <li><a href="${!isIndexPage ? "./pages/" : ""}about-us.html" class="navbar__links-container__link">About us</a></li>
                <li><a href="${!isIndexPage ? "./pages/" : ""}payment-first-stage.html" class="navbar__links-container__link navbar__links-container__link--primary">Donate now</a></li>
            </ul>
        </div>
    `;

    const tempContainer = document.createElement('nav');
    tempContainer.setAttribute("id", "navbar");
    tempContainer.innerHTML = HTML;
    tempContainer.classList.add("navbar");
    await document.body.prepend(tempContainer);

    const navbarIcon = document.getElementById("navbar__mobile-icon");
    const navbarBody = document.getElementById("navbar__mobile-display");
    const navbarCloseIcon = document.getElementById("navbar__mobile-close-icon-conatiner__icon");

    navbarIcon.addEventListener("click", () => {
        navbarBody.style.right = "0";
    });

    navbarCloseIcon.addEventListener("click", () => {
        navbarBody.style.right = "-100%";
    });


    const navbarElement = document.querySelector(".navbar");
    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Scrolling up, show navbar
            navbarElement.style.transform = "translateY(0)";
        } else {
            // Scrolling down, hide navbar
            navbarElement.style.transform = `translateY(-${navbarElement.offsetHeight}px)`;
        }

        prevScrollPos = currentScrollPos;
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

const themeButton = async () => {
    var rootStyles = document.querySelector(':root');
    var themeIcon;
    const setLightTheme = () => {
        rootStyles.style.setProperty('--primary-text-color', 'var(--black-light-theme-color)');
        rootStyles.style.setProperty('--secondary-text-color', 'var(--blue-light-theme-color)');
        rootStyles.style.setProperty('--tertiary-text-color', 'var(--white-light-theme-color)');
        rootStyles.style.setProperty('--primary-body-color', 'var(--white-light-theme-color)');
        rootStyles.style.setProperty('--secondary-body-color', 'var(--blue-light-theme-color)');
        rootStyles.style.setProperty('--tertiary-body-color', 'var(--blue-light-theme-color)');
    }
    const setDarkTheme = () => {
        rootStyles.style.setProperty('--primary-text-color', 'var(--white-dark-theme-color)');
        rootStyles.style.setProperty('--secondary-text-color', 'var(--l-grey-dark-theme-color)');
        rootStyles.style.setProperty('--tertiary-text-color', 'var(--grey-dark-theme-color)');
        rootStyles.style.setProperty('--primary-body-color', 'var(--black-dark-theme-color)');
        rootStyles.style.setProperty('--secondary-body-color', 'var(--grey-dark-theme-color)');
        rootStyles.style.setProperty('--tertiary-body-color', 'var(--black-dark-theme-color)');
    }
    switch (localStorage.getItem('theme')) {
        case "dark":
            setDarkTheme()
            themeIcon = `<i class="fa-solid fa-sun"></i>`
            break;
        default:
            setLightTheme()
            themeIcon = `<i class="fa-solid fa-moon"></i>`
            break;
    }


    const HTML = `
        <div id="theme-icon" class="float-button__content">
            ${themeIcon}
        </div>
    `

    const tempContainer = document.createElement('button');
    tempContainer.innerHTML = HTML;
    tempContainer.classList.add("float-button");
    tempContainer.setAttribute('id', 'toggleThemeButton');

    await document.body.append(tempContainer)

    const element = document.getElementById('toggleThemeButton')
    const themeIconHtmlElement = document.getElementById('theme-icon')
    element.addEventListener('click', () => {
        document.body.style.transition = "0.5s";
        switch (localStorage.getItem('theme')) {
            case "dark":
                setLightTheme()
                localStorage.setItem('theme', 'light');
                themeIconHtmlElement.innerHTML = `<i class="fa-solid fa-moon"></i>`
                break;
            default:
                setDarkTheme()
                localStorage.setItem('theme', 'dark');
                themeIconHtmlElement.innerHTML = `<i class="fa-solid fa-sun"></i>`
                break;
        }
        document.body.style.transition = "0";
    })
}

export const layout = () => {
    navbar()
    footer()
    themeButton()
}