var gold = 0;
console.log($( "#gold" ).text());
console.log($( "#sleep1" ).text());

function makeGold() {
  $( "#gold" ).text(parseFloat($( "#gold" ).text() + 0.001)toFixed(3));
}


function sleep() {
  $("#sleep1").text("Hello world!");
}
