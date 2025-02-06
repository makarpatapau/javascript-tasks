/*
Create a Magic 8 - Ball program that uses a switch statement to provide random answers based on a generated number.

Follow these steps:

Write a function named magic8Ball:
Useprompt() to ask the user for a "Yes or No" question.
Log the question to the console.
Generate a random number:
UseMath.random() to generate a random number between 1 and8.
UseMath.floor() to ensure the number is a whole number.
Use a switch statement:
Based on the random number(1 to8), return one of the following responses:
1: "Yes, definitely!"
2: "It is certain."
3: "Reply hazy, try again."
4: "Ask again later."
5: "Better not tell you now."
6: "My sources say no."
7: "Outlook not so good."
8: "Signs point to yes.";
Display the result:
Log the randomly selected answer to the console.
Show the answer in analert().

*/

function magicBall() {
  let continueAsking = true;
  while (continueAsking) {
    let question = prompt("Ask a Magic 8-Ball a YES or NO question:");
    console.log("Question asked: " + question);
    let randomNumber = Math.floor(Math.random() * (9 - 1) + 1);
    let response;
    switch (randomNumber) {
      case 1:
        response = "Yes, definitely!";
        break;
      case 2:
        response = "It is certain.";
        break;
      case 3:
        response = "Reply hazy, try again.";
        break;
      case 4:
        response = "Ask again later.";
        break;
      case 5:
        response = "Better not tell you now.";
        break;
      case 6:
        response = "My sources say no.";
        break;
      case 7:
        response = "Outlook not so good.";
        break;
      case 8:
        response = "Signs point to yes.";
        break;
      default:
        response = "Error: Something went wrong.";
    }
    alert(response);
    console.log("Magic 8-Ball says: " + response);
    continueAsking = confirm("Do you want to ask another question?");
  }
}
magicBall();
