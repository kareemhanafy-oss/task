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

let number = prompt("enter your number")

if (number % 2 === 0) {
    console.log("even");

}
else {
    console.log("odd");

}


let num1 = Number(prompt("Enter first number"));
let operation = prompt("Choose (+, -, *, /)");
let num2 = Number(prompt("Enter second number"));

if (operation === "+") {
    console.log(num1 + num2);
} else if (operation === "-") {
    console.log(num1 - num2);
} else if (operation === "*") {
    console.log(num1 * num2);
} else if (operation === "/") {
    console.log(num1 / num2);
} else {
    console.log("Invalid Operation");
}



for (var i = 1; i < 10; i++) {
    console.log(i);
}



var i = 1;
while (i < 10; i++) {
    console.log(i);
}


var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);






















for (var i = 1; i < 10; i++) {
    console.log(i);
};



var i = 1;
while (i < 10) {
    console.log(i);
    i++;
}

var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);



var user = {
    username: "kareem",
    userage: "25",
    userfood: "pizza",
    usergender: "male",
}

console.log(user.userfood);
