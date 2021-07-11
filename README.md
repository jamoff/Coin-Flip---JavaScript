# Coin-Flip---JavaScript
//This program will simulate a coin flip through a function. The amount of coin flips depends on the user's input and the result of the
//coin flip depends on the random number, which is either 1 or 2, that the computer generates.

function coinFlip () {

  var counter = parseInt(prompt("How many coin tosses would you like?"));

  for (i = 1; i <= counter; i++) {

  Math.floor(Math.random() * 2);
if (Math.floor(Math.random() * 2) == 0) {
  console.log("Heads")
}

else {
  console.log("Tails")
}
}
}
coinFlip()
