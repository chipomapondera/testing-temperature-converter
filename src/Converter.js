/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  var celsius = (temperature - 32)/1.8
  return celsius.toFixed(1);
}

function convertCelsiusToFahrenheit(temperature) {
	var fahrenheit = temperature * 1.8 + 32
	return fahrenheit.toFixed(0);
}


