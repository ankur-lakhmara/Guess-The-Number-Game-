const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = Math.floor(Math.random() * 100 + 1);
//creating the funtion to take the input and recursively call till the last step !
function guessNumber() {
  rl.question("Guess the Number b/w 1 and 100 : ", (answer) => {
    const guess = parseInt(answer);
    if (guess === secretNumber) {
      console.log(`congratulations, your guessed number is correct `);
    } else {
      console.log("Sorry your guessed number is incorrect please try again!");
      console.log(`Hint is ${secretNumber + 1}`);
      function incorrectResponse() {
        rl.question(
          "If you wanna try again please enter y or to Exit enter n : ",
          (response) => {
            switch (response) {
              case "y":
                guessNumber();
                break;
              case "n":
                console.log("thanks for playing the number guessing game !!");
                break;
              default:
                console.log("your entred response is not incorrect ");
                incorrectResponse();
            }
          }
        );
      }
      incorrectResponse();
    }
  });
}
guessNumber();
