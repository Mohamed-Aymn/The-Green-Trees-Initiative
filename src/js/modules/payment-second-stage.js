export function paymentSecondStage() {

    let form = document.getElementById("stage-two-form");
    let elementWidth = form.offsetWidth;
    form.style.width = elementWidth+"px";

    let donation = sessionStorage.getItem("donation");
    let frequancy = sessionStorage.getItem("frequancy");

    let confirmText = document.getElementById("confirm-text");
    if(confirmText) {
        confirmText.innerHTML = "Click to confirm <br> your " + frequancy + " payment of $" + donation;
    }

    let stageTwoButton = document.getElementById("stage-two-button");
    if(stageTwoButton) {
        stageTwoButton.addEventListener("click", (e)=>{
            let valid = true;

            e.preventDefault();

            let firstName = form.elements.firstName;
            valid = standardValidation(firstName, "First name", 3);

            let lastName = form.elements.lastName;
            valid = standardValidation(lastName, "Last name", 3);

            let street = form.elements.street;
            valid = regexValidation(street, "Street", 3, ".+,.+", "Street - Please enter your address correctly 'Street, apt'")

            let city = form.elements.city;
            valid = standardValidation(city, "City", 3);

            let state = form.elements.state;
            if(state.value == "default") {
                state.parentElement.style.color = "red";
                state.parentElement.firstChild.data = "State - Please select a valid state";
            }
            else {
                state.parentElement.style.color = "white";
                state.parentElement.firstChild.data = "State";
            }

            let zip = form.elements.zip;
            valid = regexValidation(zip, "Zip code", 0, '^\\d{4,}$' , "Zip code - Must be atleast 4 in length and only digits");

            let email = form.elements.email;
            valid = regexValidation(email, "Email Address", 3, '@.*\\.', "Email Address - Please enter your email correctly 'name@domain.com'");

            let ccNum = form.elements.ccNum;
            valid = regexValidation(ccNum, "Credit card number", 15, '^[0-9]+$', "Credit card number - Must be 15 digits or more");

            let expmonth = form.elements.expmonth;
            valid = regexValidation(expmonth, "Exp Months", 0, '^(0[1-9]|1[0-2])$', "Exp Month - invalid");

            let expyear = form.elements.expyear;
            valid = regexValidation(expyear, "Exp year", 0, '^\\d{4}$', "Exp Year - invalid");


            let digits = form.elements.digits;
            valid = regexValidation(digits, "Digits in the back", 0, '^\\d{3}$', "Digits in the back - must be 3 numbers only");

            if(valid!=false) {
                window.location.href="appreciation.html";
            }
            
        })
    }

    function standardValidation(element, title, length){
        if(!element.value || element.value.length <= length-1){
            element.parentElement.style.color = "red";
            element.parentElement.firstChild.data = title + " - Length must be " + length + " atleast";
            return false;
        }
        else {
            element.parentElement.style.color = "white";
            element.parentElement.firstChild.data = title;
        }
    }

    function regexValidation(element, title, length, regex, format){
        let r = new RegExp(regex);
        if(!element.value || element.value.length <= length-1 || !r.test(element.value)){
            element.parentElement.style.color = "red";
            element.parentElement.firstChild.data = format;
            return false;
        }
        else {
            element.parentElement.style.color = "white";
            element.parentElement.firstChild.data = title;
        }
    }
}