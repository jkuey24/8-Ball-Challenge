
//won't execute function until the entire HTML is loaded. $ is a alias for JQuery.
$(document).ready(function(){

//we created a variable that contains an array of our answers
var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do", "then do the opposite", "Go Away!"]

//we are taking the button from the HTML and making it execute a function when clicked
  $("button").click(function(){

//created a variable that takes a random index in our array
    var randomAnswer = answers[ Math.floor(Math.random()*answers.length)];

//takes the value of what the user inputs into the text box and assigns it to the variable userQuestion. .val means it gets the value from the input regardless of the type (strings, integers, etc.)
    var userQuestion = $("input").val();

//reassigning the input in our text box to "". in other words, clearing the text box.
    $("input").val("");

//changing the h4 in our HTML file to the random answer in our array
    $("h4").text("Your Answer: " + randomAnswer);

//changing the h3 in our HTML file to the question the user input.
    $("h3").text("Your Question: " + userQuestion);

  });
  //spinning the 8ball
      var angle = 0;
      $("button").click(function(){
        $("#eightBall").rotate(angle);
        angle = angle + 30;
    });

});
