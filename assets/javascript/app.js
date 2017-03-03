// The object questions for our quiz game.
var questions = {
  q1:{
      question:"Which game is played with five players on either side?",
      choices: ["Basketball","Volleyball","Hockey","Football"],
      correctAnswer: "Basketball",
      },

  q2:{
      question:"Which of the following countries is landlocked?",
      choices: ["Switzerland","Italy","Spain","France"],
      correctAnswer: "Switzerland",
      }, 
  q3:{
      question:".MPG' extension refers usually to what kind of file?",
      choices: ["WordPerfect Document file","MS Office document","Animation/movie file","Image file"],
      correctAnswer:"Animation/movie file",
      }, 
      
  q4:{
      question:"Which country is ruled by a single dynasty for more than two thousand years?",
      choices: ["England","Persia","Japan"," Egypt"],
      correctAnswer:"Japan",
      }, 
      
  q5:{
      question:"In which Disney film would you find a rabbit named Thumper?",
      choices: ["Bambi","Peter Pan","Hercules","Frozen"],
      correctAnswer: "Bambi",
      }, 

  q6:{
      question:"What colour is Cerulean?",
      choices: ["Red","Blue","Yellow","Green"],
      correctAnswer: "Blue",
      }, 

  q7:{
      question:"What are a group of Dolphins called?",
      choices: ["School","Herd","Pod","Pool"],
      correctAnswer: "Pod",
      }, 

     
  q8:{
      question:" What is the currency of Brazil?",
      choices: ["Dollar","The Bhat","Real","Pool"],
      correctAnswer: "Krona",
      }, 

  q9:{
      question:"Who has won the most Academy Awards?",
      choices: ["James Cameron","Walt Disney","Katherine Hepburn","Steven Spielberg"],
      correctAnswer: "Walt Disney",
      }, 

  q10:{
      question:"Which of the following is not a gas?",
      choices: ["Nitrogen","Oxygen","Helium","Mercury"],
      correctAnswer:"Mercury",
      }
    }       


  // Variables that set the initial state of our game.
  timeRemaining: null
  correctAnswers : 0
  incorrectAnswers: 0
  unAnswered:0

  //setupGame: function() {

    //$("#start").on("click", function(){
    //loadQuestion()  
    //});

    //$("#start").empty();
    //});
  //}

  // Function for count down timer, ends game once time runs out
  function countDownTimer (){
  var count=30;

  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second  
  function timer()
    {
      count=count-1;
      if (count <= 0)
      {
         clearInterval(counter);
         return;
      }

    // document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
    } 
  }

  // the function utilizes “this”, and for loop to append to page
  function loadQuestion(){
  var objKeys = Object.keys(questions);
  //console.log(objKeys);
  var timer = $("<h2>Time Remaining :</h2>");
  for (var i = 0; i < objKeys.length; i++) {
  var qDiv =  $("<div>");
  var questionDiv = $("<div>").text(questions[objKeys[i]].question);
  $(".loadQuestion").append(qDiv).append(questionDiv);
  $("#start").hide();
  var radioButtons = createRadios(i);
  questionDiv.append(radioButtons);
  } 
  $(".loadQuestion").prepend(timer);
  }

// Creates a list of the answer choices as radio inputs
function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    var objKeys = Object.keys(questions);
    console.log(questions[objKeys[index]].choices);
    for (var i = 0; i < questions[objKeys[index]].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer'+index+'" value=' + i + ' />';
      input += questions[objKeys[index]].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
} 



  // Change from current questions to next question ++
  function nextQuestion(){
  var objKeys = Object.keys(this.questions);
  $(".answer").on("click", function(){
   objKeys++;
  });
  }
  // detects question answered is correct or wrong 
  function done(){

  }
  // Resets everything back to beginning or 0
  function reset(){

  }
  // Display the results to the player, incorrectly and correctly
  function result(){

  }

$(document).ready(function () {
  $("#start").on("click", function(){
    loadQuestion() ; 
  });  
});