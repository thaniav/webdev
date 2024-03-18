var buttonColors=["red", "yellow", "green", "blue"];
var gamePattern=[];
var userClickedPattern=[];
var started = false;
var level = 0;
var highScore=0;




    $(document).keypress(function(){
    if(!started){
        $("h1").text("Level 0");
        nextSequence();
        started=true;
    }
    })
   
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
        console.log("Success");
        if(currentLevel>highScore){
        highScore=currentLevel+1;
        }
        setTimeout(function () {
            nextSequence();
          }, 1000);
    }
}
    else{
        console.log("Fail");
        $("body").addClass("game-over");
        $("h1").text("Game Over. Press any Key to start");
        $("h2").text("High Score: "+highScore);
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        startOver();

    }

}

function nextSequence(){
userClickedPattern = [];
level++;
$("h1").text("Level "+level);
var randomNumber=Math.floor(Math.random()*4);
var randomChosenColor= buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
playSound(randomChosenColor);
$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

}


$(".btn").click(function (){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
   animatePress(userChosenColor);
   checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }