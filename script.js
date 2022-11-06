console.log("Currency converter script has been successfully activated")

let form = document.querySelector(".js-form");
let selectElement = document.querySelector(".js-select");
let fieldElement = document.querySelector(".js-field");
let result = document.querySelector(".js-result");

let USD = 0.21245696;
let EUR = 0.21287202;
let GPB = 0.18693312;
let CHF = 0.21159223;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let select = selectElement.value;
    let field = +fieldElement.value;
    let operation;

    switch(select) {
        case "USD":
            operation = field * USD;
            break;
        case "GPB":
            operation = field * GPB;
            break;
        case "EUR":
            operation = field * EUR
            break;
        case "CHF":
            operation = field * CHF
            break;
    }
    result.innerText = `💸${field}PLN = ${operation.toFixed(2)}${select}💸`
})