/** Unit Converter **/

// event handling
var text1 = document.querySelector('.text1');
var text2 = document.querySelector('.text2');
var selectedUnit = undefined;

text1.addEventListener('change', valueChange);

var leftMenu = document.querySelector('.left-menu');
var rightMenu = document.querySelector('.right-menu');

leftMenu.addEventListener('change', menuChange);

//change functions

function menuChange(event) {
  selectedUnit = event.target.value

  var conversions = {
    select_unit: 'convert_unit',
    fahrenheit: 'celsius',
    celsius: 'fahrenheit',
    pounds: 'kilos',
    kilos: 'pounds',
    litres: 'gallons',
    gallons: 'litres',
    miles: 'kilometres',
    kilometres: 'miles'
  }

  var matchingValue = conversions[selectedUnit];
  
  // step 1: clear out previous checked value
  var options = Array.from(rightMenu.children);
  options.forEach(function(option) {
    option.selected = false;
  });

  // step 2: find new matching option
  var matchingOption = rightMenu.querySelector('option[value=' + matchingValue + ']');

  // step 3: change the checked attribute on that option to true
  matchingOption.selected = true;

  //step 4: clear initial value on unit selection
  text1.value = "";
  text2.value = "";

}

function valueChange(event) {
  var enteredValue = event.target.value
  
  /**
   * now that we know we have a valid unit, let's convert the
   * number in the field using the proper unit's function
   */
  switch (selectedUnit) {

    case "fahrenheit":
      text2.value = convertFahrenheitToCelsius(enteredValue);
      break;
    case "celsius":
      text2.value = convertCelsiusToFahrenheit(enteredValue)
      break;
    case "pounds":
      text2.value = convertPoundsToKilos(enteredValue);
      break;
    case "kilos":
      text2.value = convertKilosToPounds(enteredValue);
      break;
    case "litres":
      text2.value = convertLitresToGallons(enteredValue);
      break;
    case "gallons":
      text2.value = convertGallonsToLitres(enteredValue);
      break;
    case "miles":
      text2.value = convertMilesToKm(enteredValue);
      break;
    case "kilometres":
      text2.value = convertKmToMiles(enteredValue);
      break;
    default:
      /**
       * tell people to select a unit first
       */
        window.alert("Please select a unit");
        break;

  }
}

//conversion code
function convertFahrenheitToCelsius(temperature) {
  var celsius = (temperature - 32)/1.8
  return celsius.toFixed(1);
}

function convertCelsiusToFahrenheit(temperature) {
	var fahrenheit = temperature * 1.8 + 32
	return fahrenheit.toFixed(0);
}

function convertPoundsToKilos(weight) {
	var kilo = weight * 0.4536
	return kilo.toFixed(1); 
}

function convertKilosToPounds(weight) {
	var pound = weight * 2.205
	return pound.toFixed(0); 
}

function convertLitresToGallons(volume) {
	var gallons = volume * 0.22
	return gallons.toFixed(2);
}

function convertGallonsToLitres(volume) {
	var litres = volume * 4.546
	return litres.toFixed(2);
}

function convertMilesToKm(distance) {
	var kms = distance * 1.609
	return kms.toFixed(0);
}

function convertKmToMiles(distance) {
	var miles = distance / 1.609
	return miles.toFixed(0);
}

