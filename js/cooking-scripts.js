$(document).ready(function() {
  $("form#cooking").submit(function(event) {
    event.preventDefault();
    var oz = parseFloat($("#ounces").val());
    var result = (oz * 29.5735).toFixed(2);
    $(".output").show();
    $(".output p").text(result + " mL");
  });
});
