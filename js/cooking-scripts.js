$(document).ready(function() {
  $("form#cooking").submit(function(event) {
    event.preventDefault();
    var convertOzToMl = function() {
      var oz = parseFloat($("#ounces").val());
      var result = oz * 29.5735;
    };
  $(".output").text(result);
  });
});
