[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Self-scoring Trivia

This is the front-end unit project of General Assembly's SEI course.

## Project Objective 

The goal is to create a browser rendered trivia game. The player needs to answer 10 
multiple-choice quiz questions as quickly and as accurately as possible.

## Game rules

Each game contains 10 randomly selection questions from a pool of 15 questions. Each question
has 4 choices for the player to select. The sequence of those 4 choices for each question 
is also randomized at the game start. Each correct answer will score 10 points. There is a
1-minute time limit after which the overall score will be reduced linearily until it reaches 
zero if the time used is greater than 3 minutes. 

## instructionss

The landing page is at https://nibingcheng.github.io/unit1-project/
Click the start button the game will begin. No software download and/or installation are needed. 

- After the game is started, there is a restart button at top left corner. At any time the user can 
  click it and abort the current game and start a new one.
  
- The score at top center is updated dynamically after an answer is selected and after the submit
  button is clicked.

- At the end of the game a pop-up window will show how much time the player had used and the overall 
  score with 100 being the highest possible.

- The top right corner shows the number of questions played. For example: 5/10 means 4 questions played
  and the currect question is number 5 out of 10 total.

- The submit button is used to refresh the score and pull in the next question.

- In the middle of the game even if the page is accidentally reloaded, the state of the game is tracked 
  and it won't start a new game.  

## Known issues

- If the page is reloaded before the games finishes, the time interval calculation will be incorrect. 
  Instead of showing time used from start to finish, it is the time between the last reload and game-end.