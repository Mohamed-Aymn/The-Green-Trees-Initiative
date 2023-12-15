import "../styles/main.css";
import { common } from "./utils/common.js"
import { home } from "./modules/home.js"
import { aboutUs } from "./modules/about-us.js"
import { appreciation } from "./modules/appreciation.js"
import { paymentFirstStage } from "./modules/payment-first-stage.js"
import { paymentSecondStage } from "./modules/payment-second-stage.js"

document.addEventListener('DOMContentLoaded', function () {
    // common functionalities accross all pages
    common()

    // pages
    home()
    aboutUs()
    appreciation()
    paymentFirstStage()
    paymentSecondStage()
});