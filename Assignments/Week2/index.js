// var loggedIn = false;
// var maxAttempts = 3;
// var attempts = 0;

// while (!loggedIn && attempts < maxAttempts) {
// var username = prompt('Username:');
//     var password = prompt('Password:');

//     if (username == 'samy123' && password == '12345') {
//         alert('Welcome back, ' + username);
//         loggedIn = true;
//     } else {
//         attempts += 1;
//         if (attempts < maxAttempts) {
//             alert('Inaccurate credentials!');
//         } else {
//             alert('You are locked out!');
//         }
//     }
// }

// ============================================================================================

// let monthNumber = 1

// while (monthNumber <= 13) {
//     switch (monthNumber) {
//         case (1):
//             console.log("January");
//             break;
//         case (2):
//             console.log("February");
//             break;
//         case (3):
//             console.log("March");
//             break;
//         case (4):
//             console.log("April");
//             break;
//         case (5):
//             console.log("May");
//             break;
//         case (6):
//             console.log("June");
//             break;
//         case (7):
//             console.log("July");
//             break;
//         case (8):
//             console.log("August");
//             break;
//         case (9):
//             console.log("September");
//             break;
//         case (10):
//             console.log("October");
//             break;
//         case (11):
//             console.log("November");
//             break;
//         case (12):
//             console.log("December");
//             break;
//         default:
//            console.log("Invalid Month");
//     }
//     monthNumber += 1;
// }

// ============================================================================================

// let a = 1;
// let b = 2;
// let c =3;
// let d = 4;

// console.log(a>b || (b>d && c>d))

// ============================================================================================

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

// ============================================================================================

// for (let i =0; i <= 10; i++) {
//     console.log(i)
// }

// ============================================================================================

// for (let i = 3; i >= 1; i--) {
//     console.log(i)
// }

// console.log("It's the final countdown!")

// ============================================================================================

// let x = 15
// for (let i = 0; i <= x; i++) {
//     console.log(i)
//  }

// ============================================================================================

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " foo")
//     }
//  }

// ============================================================================================

// var userNumber = 0;
// let counter = userNumber

// if (userNumber >= 1 && userNumber <=100) {
//     while (counter <= 100) {
//         console.log(counter);
//         counter ++;
//     }
// } else {
//     console.log("Your number was not between 1 and 100.")
// }

// ============================================================================================

// var num = 4;
// var product;

// for (let i = 1; i <= 10; i++) {
//     product = num * i;
//     console.log(num + " x " + i + " = " + product)
//  }

// ============================================================================================

// var i = 0;

// do {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i++;
// }
// while (i <= 99);

// ============================================================================================

// let userNumber = 10;

// do {
//     console.log(userNumber);
//     userNumber += 6;
// }
// while (userNumber <= 100);

// ============================================================================================

// for (let i = 0; i <= 99; i+=3) {
//     if (i % 3 === 0) {
//      console.log(i)
//     }
//  }

// ============================================================================================

// var requiredCupsOfRice = 5;
// var currentCupsOfRice = 0;

// while (currentCupsOfRice <= requiredCupsOfRice) {
//     if (currentCupsOfRice > 0) {
//         console.log("The bowl contains " + currentCupsOfRice + " cups of rice.")
//     }
//     currentCupsOfRice += 1;
// }

// console.log("We have enough rice!")

// ============================================================================================

// var requiredCupsOfRice = 5;
// var currentCupsOfRice = 0;

// while (currentCupsOfRice != requiredCupsOfRice) {
//     console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
// }
// console.log('We have enough rice!');

// ============================================================================================

// var requiredCupsOfRice = 5;
// var currentCupsOfRice = 0;

// do {
//     console.log('The bowl contains ' + currentCupsOfRice++ + ' cups of rice.');
// } while (currentCupsOfRice !== requiredCupsOfRice);

// ======================================= Advanced Game ======================================


// Rules of this Game:
// The game will consist of 100 turns.
// On an even turn(if the number of turns is even), 5 points are added to your score.
// On an odd turn(if the number of turns is odd), you gain 3 points instead.
// If ever your score is equal to 125, your points total will reset back down to 25 points.This will only be allowed to happen once(use the variable pointsReset to keep track of this).
// The game will run as long as both of the following two conditions are true:
// 1. The game has made it through 100 turns or less
// 2. You reach 290 points or more, whichever comes first.
// You will need to have two conditions be true in your for loop to check if the turns are less than 100 and the score is less than 290.

var points = 0;
var pointsReset = false; 
var turnMax = 100;
var pointsMax = 290;

for (let turn = 1; turn <= turnMax; turn++) {
    if (points === 125 && pointsReset == false) {
        points = 25; 
        pointsReset = true;
    } else if (points === 290) {
        break;
    }
    if (turn % 2 === 0) {
        points += 5;
    } else {
        points += 3;
    }
    console.log("Points: " + points);
 }