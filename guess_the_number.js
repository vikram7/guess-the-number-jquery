var max_val = 100
var answer = Math.floor(Math.random()*max_val + 1);
var guess = 0;
var all_guesses = [];
var num_guesses = 0

$('h1').text("Guess a number between 0 and " + max_val +"!");

$(document).ready(function() {
  $('form').on('submit', function(event){
    event.preventDefault();
    num_guesses++;

    var user_guess = parseInt($('input:first').val());
    if ($.isNumeric(user_guess)) {
      $('h1').text("Guess a number between 0 and " + max_val +"!");
      all_guesses.push(user_guess);
      $('h3').text("Your guesses so far are the following: " + all_guesses.sort());
      if (user_guess > answer) {
        $('h2').text('Sorry, ' + user_guess + ' was too high, try again . . . ');
      }
      else if (user_guess < answer) {
        $('h2').text('Sorry, ' + user_guess + ' was too low, try again . . . ');
      }
      else {
        $('h2').text('Congratulations, you\'ve guessed the number in ' + num_guesses +' guesses!');
        $('h4').text('Click below to play again!');
        var button = $('<a href="index.html"><input type="button" value="Play again"/></a>');
        $('body').append(button);
      }
    }
    else {
      $('h1').text("Invalid input, must enter a number between 0 and " + max_val + ".")
    }
  });
});
