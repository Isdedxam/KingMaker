var gold = 0;
var fatigue = 0;
console.log($( "#gold" ).text());
console.log($( "#sleep1" ).text());

function makeGold() {
  if (fatigue <= 100) {
    gold = parseInt($( "#gold" ).text());
    //============================================ random begging chanse ===========
    if (Math.random() * 100 > 50) {
      gold += 10;// got some beg
    }
    fatigue += 10; // make you more sleepy
    $( "#gold" ).text(gold);
    console.log(gold);
  }
  else {
      $("#sleep1").text("Nigga you need sleep!!!!!");
  }
}


function sleep() {
  fatigue = 0;
  $("#sleep1").text("you feel rested");
}
