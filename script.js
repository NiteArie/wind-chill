const app = (() => {
    const _unitSlider = document.querySelector(".container__form__control__switch__checkbox");
    const _temperatureLabel = document.querySelector(".container__form__control__temp");
    const _speedLabel = document.querySelector(".container__form__control__speed");
    const _form = document.querySelector(".container__form");

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

        if (_imperialState) {
            console.log(calculateWindChillByImperial());
        } else {
            console.log(calculateWindChillByMetric());
        }
    })

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

})();