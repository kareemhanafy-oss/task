let degree = prompt("Enter your degree:");

console.log(degree);

if (degree >= 90) {
    console.log("Excellent");
}
else if (degree >= 75) {
    console.log("Very Good");
}
else if (degree >= 50) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


var player1 = prompt("player1 Choose paper or rock or m2s");
var player2 = prompt("player2 Choose paper or rock or m2s");


if (player1 === player2) {
    console.log("tie");
} else if (player1 === "rock" && player2 === "m2s") {
    console.log("Player 1 Wins");
} else if (player1 === "paper" && player2 === "rock") {
    console.log("Player 1 Wins");
} else if (player1 === "m2s" && player2 === "paper") {
    console.log("Player 1 Wins");
} else {
    console.log("player2 wins");
}