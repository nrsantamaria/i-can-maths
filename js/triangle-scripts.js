$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    $(".answer").hide();

      if (side1 === side2 && side2 === side3) {
      $("#equal").show();
    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
      $("#not").show();
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $("#iso").show();
    } else {
      $("#scal").show();
    }
    this.reset();
    event.preventDefault();
  });
});
