export function paymentFirstStage() {
    let stageOneButton = document.getElementById("stage-one-button");
    if(stageOneButton){
        stageOneButton.addEventListener("click", (e)=>{
            e.preventDefault();
    
            let form = document.getElementById("stage-one-form");
            let donation = form.elements.donationAmount.value;
            let frequancy = form.elements.donationFrequency.value;
    
            let amountError = document.getElementById("amount-error");
            let freqError = document.getElementById("freq-error");
            let valid = true;
    
            if(!donation) {
                if(!amountError) {
                    let donationDiv = document.getElementById("amount");
                    donationDiv.innerHTML += "<p id='amount-error' style='color:red;'>Please choose donation amount</p>"
                }
                valid = false;
            }
            else {
                if(amountError){
                    amountError.remove();
                }
            }
            if(!frequancy) {
                if(!freqError) {
                    let frequancyDiv = document.getElementById("frequency");
                    frequancyDiv.innerHTML += "<p id='freq-error' style='color:red;'>Please choose donation frequancy</p>"
                }
                valid = false;
            }
            else {
                if(freqError) {
                    freqError.remove();
                }
            }
    
            if(valid) {
                sessionStorage.setItem("donation", donation);
                sessionStorage.setItem("frequancy", frequancy);
                window.location.href="payment-second-stage.html";
                
            }
        })
    }
}