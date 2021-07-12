function coinFlip () {

var counter = parseInt(prompt("How many coin tosses would you like?"));

for (i = 1; i <= counter; i++) {

Math.floor(Math.random() * 2); 

if (Math.floor(Math.random() * 2) == 0) 

{ console.log("Heads") }

else { console.log("Tails") } } } coinFlip()
