// The object questions for our quiz game.
var questions = {
  q1:{
      question:"Which game is played with five players on either side?",
      choices: ["Basketball","Volleyball","Hockey","Football"],
      correctAnswer: "Basketball",
      correct:0
      },

  q2:{
      question:"Which of the following countries is landlocked?",
      choices: ["Switzerland","Italy","Spain","France"],
      correctAnswer: "Switzerland",
      correct:0
      }, 
  q3:{
      question:".MPG' extension refers usually to what kind of file?",
      choices: ["WordPerfect Document file","MS Office document","Animation/movie file","Image file"],
      correctAnswer:"Animation/movie file",
      correct:2
      },     
  q4:{
      question:"Which country is ruled by a single dynasty for more than two thousand years?",
      choices: ["England","Persia","Japan"," Egypt"],
      correctAnswer:"Japan",
      correct:2
      },

  q5:{
      question:"In which Disney film would you find a rabbit named Thumper?",
      choices: ["Bambi","Peter Pan","Hercules","Frozen"],
      correctAnswer: "Bambi",
      correct:0
      }, 

  q6:{
      question:"What colour is Cerulean?",
      choices: ["Red","Blue","Yellow","Green"],
      correctAnswer: "Blue",
      correct:1
      }, 

  q7:{
      question:"What are a group of Dolphins called?",
      choices: ["School","Herd","Pod","Pool"],
      correctAnswer: "Pod",
      correct:2
      }, 

     
  q8:{
      question:" What is the currency of Brazil?",
      choices: ["Dollar","The Bhat","Real","Pool"],
      correctAnswer: "Real",
      correct:2
      }, 

  q9:{
      question:"Who has won the most Academy Awards?",
      choices: ["James Cameron","Walt Disney","Katherine Hepburn","Steven Spielberg"],
      correctAnswer: "Walt Disney",
      correct:1
      }, 

  q10:{
      question:"Which of the following is not a gas?",
      choices: ["Nitrogen","Oxygen","Helium","Mercury"],
      correctAnswer:"Mercury",
      correct:3
      }
    }       


  // Variables that set the initial state of our game.
  var correctAnswers = 0;
  var incorrectAnswers=0
  var unAnswered=0;

// Function for count down timer, ends game once time runs out
var stopwatch = {
intervalId : null,
startTimer : function(duration, display) {
 var timer = duration, minutes, seconds;
 intervalId = setInterval(function () {
  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.text("Time Remaining: " + minutes + ":" + seconds);

  if (--timer < 0) {
      stopGame();
  }
  }, 1000);
},
stop: function(){
// Use clearInterval to stop the count.
clearInterval(intervalId);
}

}

// the function utilizes “this”, and for loop to append to page
function loadQuestion(){
  var fiveMinutes = 60 * 1;
  Display = $(".timer");
  stopwatch.startTimer(fiveMinutes,Display);  
  var objKeys = Object.keys(questions);
  //console.log(objKeys);
  for (var i = 0; i < objKeys.length; i++) {
  var qDiv =  $("<div>");
  var questionDiv = $("<div>").text(questions[objKeys[i]].question);
  $(".loadQuestion").append(qDiv).append(questionDiv);
  $("#start").hide();
  var radioButtons = createRadios(i);
  questionDiv.append(radioButtons);
  }
  var doneBtn = $("<button>");
  doneBtn.addClass("done");
  doneBtn.text("Done");
  $(".loadQuestion").append(doneBtn);
} 


// Creates a list of the answer choices as radio inputs
function createRadios(index) {
  var radioList = $('<ul>');
  var item;
  var input = '';
  var objKeys = Object.keys(questions);
  //console.log(questions[objKeys[index]].choices);
  for (var i = 0; i < questions[objKeys[index]].choices.length; i++) {
    item = $('<li>');
    input = '<input type="radio" name="answer'+index+'" value=' + i + ' />';
    input += questions[objKeys[index]].choices[i];
    item.append(input);
    radioList.append(item);
  }
  return radioList;
} 

// detects question answered is correct or wrong 
function computeScore(){
  var objKeys = Object.keys(questions);
  for (var i = 0; i < objKeys.length ; i++) {
    var radioSelected = $('input[name="answer'+i+'"]:checked').val();
    if(!radioSelected)
    {
      unAnswered++;
      
    }
    else
    {
      if (parseInt(radioSelected) === questions[objKeys[i]].correct) {
        correctAnswers++;
      }
      else
      {
        incorrectAnswers++;
      }
    }
  }
  //incorrectAnswers = objKeys.length - (correctAnswers + unAnswered);
}

  // Display the results to the player, incorrectly and correctly
  function result(){
  var score =  $("<p>",{id: 'score'});
  score.append("All Done! You got "+correctAnswers+" correct answers.Incorrect answer: "+incorrectAnswers+" Unanswered:"+unAnswered);
  return score;
  }

// function to end the game when hit done or when the time is over.
function stopGame(){
computeScore();
$(".loadQuestion").empty();
stopwatch.stop();
$(".timer").empty();
$(".loadQuestion").append(result());
}


$(document).ready(function () {
  $("#start").on("click", function(){
    loadQuestion();
    $(".done").on("click", function(){
    stopGame();
    });   
    });

    
});