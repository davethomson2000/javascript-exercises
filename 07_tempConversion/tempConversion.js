const convertToCelsius = function(temperatureInFahrenheit) {
  // x °C ≘ (x × 9/5 + 32) °F
  return +((temperatureInFahrenheit - 32) * 5 / 9).toFixed(1)  
};

const convertToFahrenheit = function(temperatureInCelsius) {
  //x °F ≘ (x − 32) × 5 / 9 °C
  return +((temperatureInCelsius * 9 / 5) + 32).toFixed(1)  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
