$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var blanks = ["person1", "person2", "myth", "item", "animal", "badypart", "weather", "color", "bodyfunction", "exclamation", "weapon", "noun"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

    });

    $("#story").show();

    event.preventDefault();
  });
});
