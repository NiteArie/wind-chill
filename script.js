const app = (() => {
    const _unitSlider = document.querySelector(".container__form__control__switch__checkbox");
    const _temperatureLabel = document.querySelector(".container__form__control__temp");
    const _speedLabel = document.querySelector(".container__form__control__speed");
    const _temperatureInput = document.querySelector(".container__form__control__temp-input");
    const _speedInput = document.querySelector(".container__form__control__speed-input");
    const _form = document.querySelector(".container__form");
    const _formAlert = document.querySelector(".container__form__alert");

    let _imperialState = true;
    let _temp = null;
    let _windSpeed = null;

    _unitSlider.addEventListener("change", (event) => {
        toggleUnit();
        if (_imperialState) {
            updateTempureLabelUnit("F");
            updateSpeedLabelUnit("mph");
        } else {
            updateTempureLabelUnit("C");
            updateSpeedLabelUnit("km/h");
        }
    })

    _form.addEventListener("submit", (event) => {
        event.preventDefault();

        let _tempValue = _temperatureInput.value;
        let _speedValue = _speedInput.value;

        console.log(_tempValue);
        console.log(_speedValue);

        if (_tempValue && _speedValue) {
            _temp = _tempValue;
            _windSpeed = _speedValue;
        } else {
            updateFormAlertContent("Temperature and wind speed can not be blank. Please enter their values.");
            displayFormAlert();
            return;
        }

        hideFormAlert();    

        if (
            !(_temp === null) &&
            !(_windSpeed === null) &&
            _imperialState) {
            let _result = calculateWindChillByImperial();
            validWinChillProcess(_result);
        } else {
            let _result = calculateWindChillByMetric();
            validWinChillProcess(_result);
        }
    })

    function validWinChillProcess(_result) {
        if (!checkValidWinChill(_result)) {
            updateFormAlertContent("There was an error during the calculation process. Please try again");
            displayFormAlert();
        }
    }

    function updateTempureLabelUnit(value) {
        _temperatureLabel.setAttribute("unit", `${String.fromCharCode(176)}${value}`);
    }

    function updateSpeedLabelUnit(value) {
        _speedLabel.setAttribute("unit", `${value}`);
    }

    function toggleUnit() {
        _imperialState = !_imperialState;
    }

    function calculateWindChillByMetric() {
        return (
            13.12 + 0.6215 * _temp - 11.37 * Math.pow(_windSpeed, 0.16) + 0.3965 * _temp * Math.pow(_windSpeed, 0.16)
        )
    }

    function calculateWindChillByImperial() {
        return (
            35.74 + 0.6215 * _temp - 35.75 * Math.pow(_windSpeed, 0.16) + 0.4275 * _temp * Math.pow(_windSpeed, 0.16)
        )
    }

    function displayFormAlert() {
        _formAlert.classList.remove("hidden");
    }

    function hideFormAlert() {
        _formAlert.classList.add("hidden");
    }

    function updateFormAlertContent(content) {
        _formAlert.textContent = content;
    }

    function checkValidWinChill(windChill) {
        return windChill < _temp;
    }

})();