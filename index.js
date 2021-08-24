const chalk = require('chalk');
const readlineSync = require("readline-sync")

let userName = readlineSync.question("Hi! What is your name? ")

console.log(chalk.magenta(("Welcome to the game " + chalk.blue(userName) + ". Are you really a true fan of the TV series Silicon Valley. Take the quiz and find out for yourself")))

let questionBank = [
  {
    question: 'What town is Erlich\'s Hacker House situated in?',
    answer: 'Palo Alto'
  },
  {
    question: 'Erlich and BigHead\'s VC firm name is' ,
    answer: 'Bachmanity Capital'
  },
  {
    question: 'What was Pied Piper\'s Weissman score for the compression algorithm TechCrunch Disrupt?',
    answer: '5.2'
  },
  {
    question: 'Peter Gregory\'s character is loosely based after?',
    answer: 'Peter Thiel'
  },
  {
    question: 'Dinesh\'s last name is' ,
    answer: 'Chugtai'
  }
]

performers = [
  {
  name: "Manasi",
  score: '4'
  },
  {
  name: "Abhishek",
  score: '3'
  },
  {
  name: "Ritwij",
  score: '2'
  }
]

correctCount = 0

function play_game(){

  for (i=0; i<questionBank.length; i++){
  let userAnswer = readlineSync.question(questionBank[i].question +  " \n")
  if (userAnswer.toUpperCase().replace(/\s+/g, '') == questionBank[i].answer.toUpperCase().replace(/\s+/g, '')) {
    correctCount += 1
    console.log(chalk.green("correct"))
  }
  else{
      console.log(chalk.red("wrong. The correct answer was " + questionBank[i].answer))
  }
  }

}

play_game()

console.log(chalk.cyan("You got", correctCount, "/5 correct"))


function displayTopPerformers(performers){
  console.log(chalk.yellow("Our top performs are "))
  for (i=0; i<3; i++) {
    console.log(chalk.yellow(i+1 + "." + performers[i].name))
  }
  console.log("Let me know if you beat them, so I can add your name. Until then!")
}

displayTopPerformers(performers);
