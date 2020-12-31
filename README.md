# wind-chill (Wind Chill)

## General

Windchill combines the actual temperature with the wind speed to calculate the windchill factor, or what the perceived temperature is versus the actual temperature.

## User Stories

* [X] User can select the measurement system calculations will be performed in - Metric or English
* [X] User can enter the actual temperature and the wind speed
* [X] User can press the Calculate button to display the wind chill
* [X] User will receive an error message when Calculate is clicked if data values are not entered

## Bonus Features

* [ ] User will receive an error message when Calculate is clicked if the resulting wind chill factor is greater than or equal to the actual temperature. Since this signifies an internal error in the calculation you may also satisfy this requirement using an assertion
* [ ] User will be prompted to enter new data values if Calculate is pressed without first changing at least one of the input fields
* [ ] User will see an updated wind chill factor whenever new actual temperature or wind speed values are entered, without being required to click the Calculate button