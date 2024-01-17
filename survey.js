//Modify the below example to:
//Ask the user the following questions:
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Questions:
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

//Answers:
const answers = {};

//Function so I can just plug the above data into the algo
const questionnaire = function(index) {
  rl.question(questions[index], (ans) => {
    answers[`Q${index + 1}`] = ans;

    //loop through each question if not last question
    if (index < questions.length - 1) {
      questionnaire(index + 1);
    } else {
      console.log("Results:");
      // looping through answers and logging
      for (const q of Object.keys(answers)) {
        console.log(`${q}: ${answers[q]}`);
      }
      
      //create paragraph
      const paragraph = `${answers.Q1} loves listening to ${answers.Q3} while ${answers.Q2}, devouring ${answers.Q5} for ${answers.Q4}, prefers ${answers.Q6} over any other sport, and is amazing at ${answers.Q7}.`;
      //log it
      console.log(paragraph);
      //closer
      rl.close();
    }
  });
};

questionnaire(0);