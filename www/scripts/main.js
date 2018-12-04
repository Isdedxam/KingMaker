var gold = 0;
var silver = 0;
var copper = 0;
var fatigue = 0;
var hunger = 100;
var food = 0;
var happiness = 100;
console.log($( "#gold" ).text());
console.log($( "#silver" ).text());
console.log($( "#copper" ).text());
console.log($( "#sleep1" ).text());


function makeGold() {
  if (fatigue <= 100) {
    copper = parseInt($( "#copper" ).text());
    //============ random begging chance ===========
    if (Math.random() * 100 > 50) {
      var begReward = parseInt(Math.random() * 5);
      copper += begReward;// got some beg
      if (begReward > 0) {
        happiness = happiness + 1;
        $( "#happiness" ).text(happiness);
        cmd("A stranger took pity on you and gave you " + begReward + " copper");
      }
      else {
        happiness = happiness - 1;
        $( "#happiness" ).text(happiness);
        var rudePeople =
        ["Person: Get a Job",
        "Person: Get out of here you filth",
        "Person: Honey, look at that disgraceful man",
        "Person: Sure hope i don't end up like him",
        "Person: What a sad specticle"];
        cmd(rudePeople[Math.floor(Math.random()*rudePeople.length)]);
      }
    }
    else {
      cmd("There are no people walking nearby")
    }
    fatigue += 10; // make you more sleepy
    hunger -= 1; // make you more hungry
    if (hunger < 0) {
      hunger = 0;
      cmd("You're Starving")
    }
    $( "#copper" ).text(copper);
    $("#hunger").text(hunger);
    console.log(copper);
  }
  else {
      $("#sleep1").text("You Need to Sleep!!");
      cmd("You need to rest before begging any further");
  }
}

function sleep() {
  $("#sleep1").text("You Feel Rested");
  fatigue = 0;
  cmd("You're well rested");

}

function buyFood() {
  if (copper <= 9) {
    cmd("You don't have enough money")
  }
  else {
    food += 1;
    copper = copper - 10;
    $( "#copper" ).text(copper);
    $( "#Food" ).text(food);
    console.log(food);
    cmd("You bought food");
  }
}

function eat() {
  if (food <= 0 ) {
    cmd("You don't have any food");
  }
  else {
    food = food - 1;
    hunger = hunger + 20;
    happiness = happiness + 1;
    $( "#happiness" ).text(happiness);
    if (hunger > 101) {
      hunger = 100;
      cmd("Don't eat any more fatty");
    }
    $("#hunger").text(hunger);
    $( "#Food" ).text(food);
    cmd("You feel a little bit more satisfied");

  }
}
//=================================== Cmd log function ========================
function cmd(log) {
  $(".cmd").find('p:first').remove();
  $(".cmd").append("<p id='cmdText'></p>");
  $(".cmd").find('p:last').text("# " + log);
}
