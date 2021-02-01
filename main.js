//generate random pin
function getPin() {
    const randomNumber = Math.random() * 10000;
    const pin = (randomNumber + "").split(".")[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

//display generated pin
const generatePin = document.getElementById("generatePin");
generatePin.addEventListener("click", () => {
    document.getElementById("pin").value = getPin();
})

//handle digits button event.
const digits = document.getElementById("digits");
digits.addEventListener("click", (event) => {
    const digitNumber = event.target.innerText;
    if (isNaN(digitNumber)) {
        if (digitNumber == "C") {
            const enteredPin = document.getElementById("enterPin");
            enteredPin.value = "";
        }
        else if (digitNumber == "<") {

        }
    }
    else {
        const enteredPin = document.getElementById("enterPin");
        enteredPin.value = enteredPin.value + digitNumber;
    }
})

//check pin

const submitPin = document.getElementById("submit-pin");
submitPin.addEventListener("click", () => {
    const pin = document.getElementById("pin").value;
    const enteredPin = document.getElementById("enterPin").value;
    if (pin === enteredPin) {
        displayMatchResult("block", "none");
    }
    else {
        displayMatchResult("none", "block");
        const tryLeft = document.getElementById("try-left").innerText;
        tryLeftNumber = parseInt(tryLeft);
        if (tryLeftNumber > 0) {
            document.getElementById("try-left").innerText = tryLeftNumber - 1 + " try left";
        }
    }
})

function displayMatchResult(correctStatus, incorrectStatus) {
    const correctPin = document.getElementById("correct-pin");
    correctPin.style.display = correctStatus;
    const incorrectPin = document.getElementById("incorrect-pin");
    incorrectPin.style.display = incorrectStatus;
}