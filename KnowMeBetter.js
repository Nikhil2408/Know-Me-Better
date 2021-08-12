var readLineSync=require('readline-sync');
var chalk = require('chalk');
var userName=readLineSync.question("What's your name buddy? ");
console.log("WELCOME!! "+userName);

console.log();
var healthCheck=readLineSync.question("How are you? ");
if(healthCheck.toUpperCase()==="GOOD" || healthCheck.toUpperCase()==="I AM GOOD")
{
  console.log("Nice... :)");
}
else
{
  console.log("Don't worry. Everything will be fine!");
}

console.log();
console.log("Let's see how much do you know me. ");

var userScore=0;

var scoresList = 
[
  {
    name: "Nikhil",
    score: "5"
  }
];

var questions=
[
  {
    question: "Q1. What do I live? ",
    answer: "Agra"
  },
  {
    question:"Q2. What's my age? ",
    answer:"22"
  },
  {
    question: "Q3. In which company I am working? ",
    answer: "Accenture"
  },
  {
    question: "Q4. What's my current work location? ",
    answer: "Bangalore"
  },
  {
    question: "Q5. Am I a movies fan or TV series fan? ",
    answer: "TV series"
  }
];
  

function letsPlay(question, answer)
{
  var userAnswer=readLineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    userScore=userScore+1;
    console.log(chalk.green("Correct!!"));
  }
  else
  {
    console.log(chalk.red("Wrong!!"));
  }
}

console.log();
for(var i=0;i<questions.length;i++)
{
  letsPlay(questions[i].question, questions[i].answer);
  console.log();
}

console.log(chalk.bgCyan("Your score is "+userScore));

scoresList.push({name: userName, score: userScore});

console.log();
console.log("------------Scores List-------------")
for(var i=0;i<scoresList.length;i++)
{
  console.log(scoresList[i].name+" - "+scoresList[i].score);
}
