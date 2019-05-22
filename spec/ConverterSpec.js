describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');
    });

   	it("Celsius to Fahrenheit", function() {
   		var result = convertCelsiusToFahrenheit(37.8);

   		expect(result).toEqual('100');
   	});
  });

  describe("Weight", function() {
  	it("Pounds to Kilos", function() {
  		var result = convertPoundsToKilos(10);

  		expect(result).toEqual('4.5');
  	});
  }); 

  describe("Volume", function() {
  	it("Litre to Gallons", function() {
  		var result = convertLitresToGallons(10);

  		expect(result).toEqual('2.20');
  	});
  });

  describe("Distance", function() {
  	it("Miles to Km", function() {
  		var result = convertMilesToKm(10);

  		expect(result).toEqual('16');
  	});
  })
});




