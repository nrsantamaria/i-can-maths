var convertOzToMl = function() {
  var oz = parseFloat(prompt("Ounces?"));
  return oz * 29.5735;
};

alert(convertOzToMl() + "ml.");
