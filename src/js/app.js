import "../styles/main.css";

document.addEventListener('DOMContentLoaded', function () {
    // common functionalities accross all pages
    import('./utils/common.js').then((module) => module.common());

    // js logic for specific pages
    const currentPage = window.location.pathname;
    switch (true) {
        case currentPage === '/':
        case currentPage.includes('/index'):
            import('./modules/home.js').then((module) => module.home());
            break;
        case currentPage.includes('/about-us'):
            import('./modules/about-us.js').then((module) => module.aboutUs());
            break;
        case currentPage.includes('/appreciation'):
            import('./modules/appreciation.js').then((module) => module.appreciation());
            break;
        case currentPage.includes('/payment-first-stage'):
            import('./modules/payment-first-stage.js').then((module) => module.paymentFirstStage());
            break;
        case currentPage.includes('/payment-second-stage'):
            import('./modules/payment-second-stage.js').then((module) => module.paymentSecondStage());
            break;
        default:
            console.error("Page not recognized");
    }
});