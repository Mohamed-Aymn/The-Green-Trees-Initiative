export const navbar = async () => {
    let currentUrl = window.location.href;
    if (currentUrl.charAt(currentUrl.length - 1) === '/') {
        currentUrl = currentUrl.slice(0, -1);
    }
    currentUrl = currentUrl.replace("://", "");
    var numberOfSlashes = currentUrl.split("/").length - 1;
    const isIndexPage = numberOfSlashes == 0 || currentUrl.includes("index.html")

    const HTML = `
        <a href="${isIndexPage ? "" : "../"}index.html" class="navbar__logo">The Green<br>Trees Initiative</a>
        <ul class="navbar__links-container">
            <li><a href="https://github.com/gigachadteam/Very-Green-WebProject" class="navbar__links-container__link">Github</a></li>
            <li><a href="${isIndexPage ? "./pages/" : ""}about-us.html" class="navbar__links-container__link">About us</a></li>
            <li><a href="${isIndexPage ? "./pages/" : ""}payment-first-stage.html" class="navbar__links-container__link navbar__links-container__link--primary">Donate now</a></li>
        </ul>
        <div id="navbar__mobile-icon" class="navbar__icon-container">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div id="navbar__mobile-display">
            <i id="navbar__mobile-close-icon-conatiner__icon" class="fa-solid fa-x"></i>
            <ul class="navbar__mobile-display__items">
                <li><a href="https://github.com/gigachadteam/Very-Green-WebProject" class="navbar__links-container__link">Github</a></li>
                <li><a href="${isIndexPage ? "./pages/" : ""}about-us.html" class="navbar__links-container__link">About us</a></li>
                <li><a href="${isIndexPage ? "./pages/" : ""}payment-first-stage.html" class="navbar__links-container__link navbar__links-container__link--primary">Donate now</a></li>
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