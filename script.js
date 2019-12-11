//Generates goal number
 var y = Math.floor(Math.random() * 100 + 1);
 console.log("Correct Answer = " + y);

var count = 0;
var attempts = [];
var duplicates=[];
var guessResults = document.getElementById("results");
var tries = document.getElementById("numGuesses");

//function to check user guess to actual answer
  function enterGuess(){

    var guess = document.getElementById("userGuess").value;
    attempts.push(guess);
    console.log(attempts);
    document.getElementById('prevGuesses').innerHTML="";
    console.log("User Guess = " + guess);

    if(guess == y){ //if number guessed is correct
        guessResults.innerHTML = "CONGRATS! You guessed the answer correctly in: " + count + " guesses";
    }
    else if(guess > y){ //if guessed number is greater than actual number
        count++;
        tries.innerHTML="Number of Guesses: " + count;
        console.log("Number of Guesses: " + count);
        guessResults.innerHTML = "How about a number that is smaller than: " + guess;
    }
    else{
        count++;
        tries.innerHTML= "Number of Guesses: " + count;
        console.log("Number of Guesses: " + count);
        guessResults.innerHTML = "Ugh try a number that is larger than: " + guess;
      }
      if(count === 50){
          guessResults.innerHTML = "You've made it through 50 guesses. Will you ever guess correctly?";
          if(guess == y){
              count++;
              guessResults.innerHTML = "CONGRATS! You guessed the answer correctly in: " + count + " guesses";
              tries.innerHTML= "Number of Guesses: " + count;
          }
      }
      if(count === 99){
          guessResults.innerHTML = "Umm You have guessed everthing but the number! What is it?! ";
          if(guess == y){
              count++;
              guessResults.innerHTML = "CONGRATS! You guessed the answer correctly in: " + count + " guesses";
              tries.innerHTML= "Number of Guesses: " + count;
          }
      }
      if(count === 100){
          guessResults.innerHTML = "Umm what happened friend?! That was so easy!";
          if(guess == y){
            count++;
            guessResults.innerHTML = "CONGRATS! You guessed the answer correctly in: " + count + " guesses! What took so long?";
            tries.innerHTML= "Number of Guesses: " + count;
            }
      }
      ducplicateCheck();

    event.preventDefault();

  }

  function showGuesses(){
    var taken = document.getElementById('prevGuesses');
    taken.innerHTML="";
    taken.innerHTML+= "Your previous guesses were: " + attempts.join(", ");
  }

function ducplicateCheck(){

  var guess = document.getElementById("userGuess").value;
  duplicates.push(guess);
  var outputArray=[];
  var nonDupli=  document.getElementById('duplicates');
  nonDupli.innerHTML = "";
  var temp;
  var start = false;


  for (j = 0; j < duplicates.length; j++) {
      for (k = 0; k < outputArray.length; k++) {
          if ( duplicates[j] == outputArray[k] ) {
              start = true;
              nonDupli.innerHTML += "UHHH YOU ENTERED THIS NUMBER ALREADY! I suggest you click the 'Show My Guesses' button ";
          }
          else {
            document.getElementById("duplicates").innerHTML = "";
          }
      }
      temp++;
      if (temp == 1 || start == false) {
          outputArray.push(duplicates[j]);
      }
      start = false;
      temp = 0;
  }

}

  function generateNewNumber(){
    var y = Math.floor(Math.random() * 100 + 1);
    console.log("Correct Answer = " + y);
    count=0;
    attempts=[];

    tries = document.getElementById("numGuesses");
    document.querySelector("form").style.visibility = "visible";
    document.getElementById("numGuesses").innerHTML = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("duplicates").innerHTML = "";
    document.getElementById("userGuess").value = null;


  }
