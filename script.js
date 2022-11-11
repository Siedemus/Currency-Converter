{
    const welcome = () => {
        console.log("Currency converter script has been successfully activated");
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const selectElement = document.querySelector(".js-select");
            const fieldElement = document.querySelector(".js-field");

            const select = selectElement.value;
            const field = +fieldElement.value;
            let result = calculateResult(select, field);
            changeResultText(result, field, select);
        });
        welcome();
    };

    const changeResultText = (result, field, select) => {
        let resultElement = document.querySelector(".js-result");
        resultElement.innerText = `💸${field}PLN = ${result.toFixed(2)}${select}💸`
    }

    const calculateResult = (select, field) => {
        const USD = 0.21245696;
        const EUR = 0.21287202;
        const GPB = 0.18693312;
        const CHF = 0.21159223;

        switch (select) {
            case "USD":
                return field * USD;
            case "GPB":
                return field * GPB;
            case "EUR":
                return field * EUR;
            case "CHF":
                return field * CHF;
        };
    };
    init();
}