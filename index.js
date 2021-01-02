// var buttonColors = ["red", "blue", "yellow", "green"];
//
// var gamePattern = [];
// var userClickedPattern = [];
// var started = false;
// var level = 0;
//
//
// $(document).keydown(function() {
//   if (!started) {
//
//     $("h1").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
//
// });
//
//
// $(".btn").on("click", function() {
//   var userChosenColor = this.getAttribute("id");
//   userClickedPattern.push(userChosenColor);
//   playSound(userChosenColor);
//   animatePress(userChosenColor);
//   checkAnswer(userClickedPattern.length - 1);
// });
//
//
//
// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log("success");
//     if (gamePattern.length === userClickedPattern.length) {
//
//       setTimeout(function() {
//         nextSequence();
//       }, 1000);
//     }
//
//   } else {
//     console.log("wrong");
//     var wrong = new Audio("sounds/wrong.mp3");
//     wrong.play();
//     $("body").addClass("game-over");
//     setTimeout(function() {
//       $("body").removeClass("game-over")
//     }, 200);
//     $("h1").text("Game Over, Press Any Key to Restart");
//     startOver();
//   }
// }
//
//
//
// function nextSequence() {
//   userClickedPattern = [];
//
//   level++;
//   $("h1").text("Level " + level);
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColor = buttonColors[randomNumber];
//   gamePattern.push(randomChosenColor);
//
//
//   $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
//
//   playSound(randomChosenColor);
// };
//
//
// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
//
// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function() {
//     $("#" + currentColor).removeClass("pressed")
//   }, 100);
//
// }
//
// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }













var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var started = false;



$(document).keydown(function(){
  if(!started){

    nextSequence();
    $("h1").text("Level " + level);
    started = true;
  }
});

$(".btn").click(function(){
    var chosenColor = $(this).attr("id");
    userPattern.push(chosenColor);
    playSound(chosenColor);
    animated(chosenColor);
    checkAnswer(userPattern.length - 1);

});


function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userPattern[currentLevel]) {
    console.log("success");
    if(gamePattern.length === userPattern.length) {
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    $("h1").text("Game Over, Press Any Key to Restart")
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    playSound("wrong");
    restart();
  }
}



function nextSequence() {
  userPattern = [];
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);

  $("." + randomColor).fadeOut(100).fadeIn(100);
  playSound(randomColor);
}



function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}





function animated(currentButton){
  $("." + currentButton + "Img").attr("src", "images/" + currentButton + ".jpg")
    setTimeout(function(){
    $("." + currentButton + "Img").attr("src", "images/" + currentButton + "1.jpg")
  }, 450)

}
function restart() {

  gamePattern = [];
  level = 0;
  started = false;

}
