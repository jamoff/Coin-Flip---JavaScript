alert("Guess what the computer will flip");


var player = parseInt(prompt("Press '0' for Heads. Press '1' for Tails"))

while (player > 1 || player < 0) {
  console.log("error")
  var player = parseInt(prompt("Choose a number"))
}
var computer = Math.floor(Math.random() * 2);

var playerResult = 0;
var computerResult = 0;

if (player == 0 && computer == 0) {
  console.log("You guessed Heads. Good job!")
  playerResult += 1;
}

else if (player == 1 && computer == 1) {
  console.log("You guessed Tails. Good job!")
  playerResult += 1;
}

else if (player == 0 && computer == 1) {
  console.log("Your result did not match the computer's :(")
  computerResult += 1;
}

else if (player == 1 && computer == 0) {
  console.log("Your result did not match the computer's :(")
  computerResult += 1;
}

var question = prompt("Would you like to play again? (Y/N)")

while (question === "Y") {
  var player = parseInt(prompt("Press '0' for Heads. Press '1' for Tails"))

  while (player > 1 || player < 0) {
    console.log("error")
    var player = parseInt(prompt("Choose a number"))
  }
  var computer = Math.floor(Math.random() * 2);

  if (player == 0 && computer == 0) {
    console.log("You guessed Heads. Good job!")
    playerResult += 1;
  }

  else if (player == 1 && computer == 1) {
    console.log("You guessed Tails. Good job!")
    playerResult += 1;
  }

  else if (player == 0 && computer == 1) {
    console.log("Your result did not match the computer's :(")
    computerResult += 1;
  }

  else if (player == 1 && computer == 0) {
    console.log("Your result did not match the computer's :(")
    computerResult += 1;
  }

  var question = prompt("Would you like to play again?")


if (question === "N") {
  break;

}
}

console.log("The final score for the player is",playerResult,"and the final result for the computer is",computerResult)
