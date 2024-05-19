const convertToCelsius = function(fahrenheit) {
    conversion = ((fahrenheit-32) * 5 / 9);
    return conversion % 1 == 0 ? conversion : parseFloat(conversion.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
    conversion = (celsius * 9 / 5 + 32);
    return conversion % 1 == 0 ? conversion : parseFloat(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
