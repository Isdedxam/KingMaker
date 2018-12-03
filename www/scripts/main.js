var gold = 0;
var silver = 0;
var copper = 0;
var fatigue = 0;
var hunger = 100;
var food = 0;
console.log($( "#gold" ).text());
console.log($( "#silver" ).text());
console.log($( "#copper" ).text());
console.log($( "#sleep1" ).text());

/*
function hunger() {
  if (hunger < 1) {
    hunger = 1;
    console.log("You're Starving");
  }
  if (hunger > 101) {
    hunger = 100;
    console.log("You're Well Fed");
  }
}
*/

function makeGold() {
  if (fatigue <= 100) {
    copper = parseInt($( "#copper" ).text());
    //============ random begging chance ===========
    if (Math.random() * 100 > 50) {
      var begReward = parseInt(Math.random() * 5);
      cmd("A stranger took pity on you and gave you " + begReward + " copper");
      copper += begReward;// got some beg
    }
    fatigue += 10; // make you more sleepy
    hunger -= 1; // make you more hungry
    $( "#copper" ).text(copper);
    $("#hunger").text(hunger);
    console.log(copper);
  }
  else {
      $("#sleep1").text("You Need to Sleep!!");
  }
}

function sleep() {
  $("#sleep1").text("You Feel Rested");
  fatigue = 0;

}

function buyFood() {
  if (copper <= 9) {
    console.log("you don't have enough money")
  }
  else {
    food += 1;
    copper = copper - 10;
    $( "#copper" ).text(copper);
    $( "#Food" ).text(food);
    console.log(food);
  }
}

function eat() {
  if (food <= 0 ) {
    console.log("you don't have any food")
  }
  else {
    food = food - 1;
    hunger = hunger + 20;
    $("#hunger").text(hunger);
    $( "#Food" ).text(food);
  }
}
