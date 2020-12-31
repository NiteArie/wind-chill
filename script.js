const app = (() => {
    const _unitSlider = document.querySelector(".container__form__control__switch__checkbox");
    const _temperatureLabel = document.querySelector(".container__form__control__temp");
    const _speedLabel = document.querySelector(".container__form__control__speed");

    let _imperialState = true; 

    _unitSlider.addEventListener("change", (event) => {
        toggleUnit();
        if ( _imperialState) {
            updateTempureLabelUnit("F");
            updateSpeedLabelUnit("mph");
        } else {
            updateTempureLabelUnit("C");
            updateSpeedLabelUnit("km/h");
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

})();