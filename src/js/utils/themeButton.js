export const themeButton = async () => {
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