// The object questions for our quiz game.
var questions = {
  q1:{
      question:"Which game is played with five players on either side?",
      answer1: "Basketball",
      answer2: "Volleyball",
      answer3: "Hockey",
      answer4: "Football",
      correctAnswer: "Basketball",
      },

  q2:{
      question:"Which of the following countries is landlocked?",
      answer1: "Switzerland",
      answer2: "Italy",
      answer3: "Spain",
      answer4: "France",
      correctAnswer: "Switzerland",
      }, 
  q3:{
      question:".MPG' extension refers usually to what kind of file?",
      answer1:"WordPerfect Document file",
      answer2:"MS Office document",
      answer3:"Animation/movie file",
      answer4:"Image file",
      correctAnswer:"Animation/movie file",
      }, 
      
  q4:{
      question:"Which country is ruled by a single dynasty for more than two thousand years?",
      answer1:"England",
      answer2:"Persia",
      answer3:"Japan",
      answer4:" Egypt",
      correctAnswer:"Japan",
      }, 
      
  q5:{
      question:"In which Disney film would you find a rabbit named Thumper?",
      answer1:"Bambi",
      answer2:"Peter Pan",
      answer3:"Hercules",
      answer4:"Frozen",
      correctAnswer: "Bambi",
      }, 

  q6:{
      question:"What colour is Cerulean?",
      answer1:"Red",
      answer2:"Blue",
      answer3:"Yellow",
      answer4:"Green",
      correctAnswer: "Blue",
      }, 

  q7:{
      question:"What are a group of Dolphins called?",
      answer1:"School",
      answer2:"Herd",
      answer3:"Pod",
      answer4:"Pool",
      correctAnswer: "Pod",
      }, 

     
  q8:{
      question:" What is the currency of Brazil?",
      answer1:"Dollar",
      answer2:"The Bhat",
      answer3:"Real",
      answer4:"Pool",
      correctAnswer: "Krona",
      }, 

  q9:{
      question:"Who has won the most Academy Awards?",
      answer1:"James Cameron",
      answer2:"Walt Disney",
      answer3:"Katherine Hepburn",
      answer4:"Steven Spielberg",
      correctAnswer: "Walt Disney",
      }, 

  q10:{
      question:"Which of the following is not a gas?",
      answer1:"Nitrogen",
      answer2:"Oxygen",
      answer3:"Helium",
      answer4:"Mercury",
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

     document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
    } 
  }

  // the function utilizes “this”, and for loop to append to page
  function loadQuestion(){
  var objKeys = Object.keys(questions);
  console.log(objKeys);
  var timer = $("<h2>Time Remaining</h2>");
  for (var i = 0; i < objKeys.length; i++) {
  var qDiv =  $("<div>")
  var questionDiv = $("<div>").text(questions[objKeys[i]].question)
  console.log(objKeys[i]);
  console.log(questions[objKeys[i]]);
  console.log(questions[objKeys[i]].answer1);
  var a1Div = $("<div class='answer'>").text(questions[objKeys[i]].answer1)
  var a2Div = $("<div class='answer'>").text(questions[objKeys[i]].answer2)
  var a3Div = $("<div class='answer'>").text(questions[objKeys[i]].answer3)
  var a4Div = $("<div class='answer'>").text(questions[objKeys[i]].answer4)
  $(".loadQuestion").append(qDiv).append(questionDiv).append(a1Div).append(a2Div).append(a3Div).append(a4Div);
  $("#start").hide();
  if (countDownTimer()==0){
  objKeys++;
  }
  }
  var radioBtn = $('<input type="radio" name="rbtnCount" />');
  $(".answer").prepend(radioBtn);
  $(".loadQuestion").prepend(timer);
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
})