$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var mythInput = $("input#myth").val();
    var itemInput = $("input#item").val();
    var animalInput = $("input#animal").val();
    var bodypartInput = $("input#bodypart").val();
    var weatherInput = $("input#weather").val();
    var colorInput = $("input#color").val();
    var bodyfunctionInput = $("input#bodyfunction").val();
    var exclamationInput = $("input#exclamation").val();
    var weaponInput = $("input#weapon").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".myth").text(mythInput);
    $(".exclamation").text(exclamationInput);
    $(".noun").text(nounInput);
    $(".item").text(itemInput);
    $(".bodypart").text(bodypartInput);
    $(".bodyfunction").text(bodyfunctionInput);
    $(".weather").text(weatherInput);
    $(".weapon").text(weaponInput);
    $(".animal").text(animalInput);
    $(".color").text(colorInput);
    $("#story").show();

    event.preventDefault();
  });
});
