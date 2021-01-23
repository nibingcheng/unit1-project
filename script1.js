// console.log("We are live")
let dakar = ['Port of Spain', 'Gitega', 'Dakar', 'Nouakchott'];
let freetown = ['Sao Tome', 'Freetown', 'Nicosia', 'Ulaanbaatar'];
let banjul = ['Banjul', 'Ankara', 'Rabat', 'Victoria'];
let vientiane = ['Vientiane', 'Kuala Lumpur', 'Hanoi', 'Kuwait City'];
let yangon = ['Copenhagen', 'Castries', 'Yangon', 'Kingston'];
let kualaLumpur = ['Vaduz', 'Jakarta', 'Moscow', 'Kuala Lumpur'];
let stockholm = ['Paris', 'Stockholm', 'Tbilisi', 'Prague'];
let montevideo = ['Montevideo', 'Lima', 'Caracas', 'Peking'];
let kigali = ['Kigali', 'Porto Novo', 'Ottawa', 'Panama City'];
let sanMarino = ['Bucharest', 'San Marino', 'Manila', 'Turin'];
let suva = ['Ngerulmud', 'Penang', 'Suva', 'Palikir'];
let kiev = ['Sarajevo', 'Taipei', 'Kiev', 'Budapest'];
let valletta = ['Rome', 'Riga', 'Tokyo', 'Valletta'];
let bangkok = ['Male', 'Kuwait City', 'Rabat', 'Bangkok'];
let dhaka = ['Kabul', 'Singapore', 'Pyongyang', 'Dhaka'];

const array = [
["Senegal", "Dakar", dakar], 
["Sierra Leone", "Freetown", freetown],
["Gambia", "Banjul", banjul], 
["Laos", "Vientiane", vientiane],
["Myanmar", "Yangon", yangon],
["Malaysia", "Kuala Lumpur", kualaLumpur],
["Sweden", "Stockholm", stockholm],
["Uruguay", "Montevideo", montevideo],
["Rwanda", "Kigali", kigali],
["San Marino", "San Marino", sanMarino],
["Fiji", "Suva", suva],
["Ukraine", "Kiev", kiev],
["Malta", "Valletta", valletta],
["Thailand", "Bangkok", bangkok],
["Bangladesh", "Dhaka", dhaka]
];

let startTime = new Date();
let time = 0;  //time used from start to finish in seconds

function  shuffleChoice() {
    let removedItem;
    for (let j=0; j<array.length; j++) {    
        for (let i=0; i<array[j][2].length; i++) {
            removedItem = array[j][2].pop();
            array[j][2].splice(Math.floor(Math.random()*4),0,removedItem);
        }
    } 
}

function  randomQuizSequence() {
    let removedItem;        
    for (let i=0; i<array.length; i++) {
        removedItem = array.pop();
        array.splice(Math.floor(Math.random()*array.length),0,removedItem);
    }     
}

let pageNum =0;  //Page number index [starting from 0]
let points = 0;  //each correct answer earns 10 points
let answerClicked = false;
let str = sessionStorage.getItem('myStorage');

if (str != null) {
    pageNum = parseInt(str.split(",")[0]);
    points = parseInt(str.split(',')[1]);
}

let score = document.querySelector('.second'); 
let tracking = document.querySelector('.third');
let question = document.querySelector('.fourth');
let next = document.querySelector('p');
let selection = document.querySelector('#lower');

let choice = [];
for (let i=0; i<4; i++) {
    choice[i] = document.querySelector(`.${selection.children[i].classList[0]}`);
}
score.textContent = `Score: ${points}`;
function loadNextQuestion(page) {
    tracking.textContent = ` ${page+1}/10`;  
    question.textContent = `What is the capital of ${array[page][0]}?`;
    
    for (let i=0; i<4; i++) {
        choice[i].textContent = array[page][2][i];
    }
    reset();     
}

shuffleChoice();
randomQuizSequence();
loadNextQuestion(pageNum);

selection.addEventListener('click', function(e) {
    sessionStorage.setItem('myStorage', [pageNum, points]);   
    // allow only one click for each question    
    // console.log(e.target.attributes[0].value);   
    if (answerClicked == false) {    
        answerClicked = true;
        
        // check if the clicked is a winner      
        // console.log(e.target.attributes[0].value);
        // console.log(`${selection.children[1].classList}`);
        for (let j=0; j<4; j++) {
            if (e.target.attributes[0].value == `${selection.children[j].classList}`) { 
                if (choice[j].textContent == array[pageNum][1]) {
                    points += 10;
                    score.textContent = `Score: ${points}`;
                    e.target.classList.add('green');
                    console.log('Jackpot!');
                }
                else {
                    e.target.classList.add('red');
                    console.log('Wrong answer!');       
                }            
            }
        }
        // handle the final question of the quiz, click behavior and time based scoring
        if (pageNum === 9) {
            next.textContent = 'END';
            let finishTime = new Date();
            time = (finishTime.getTime() - startTime.getTime())/1000;
            if (time >= 60) {
                points = Math.round(points*(1-(time-60)/120));
                if (time >180) {
                    points = 0;
                }
            }
            alert(`Time used: ${Math.floor(time/60)} min ${Math.floor(time)%60} sec \nYour score: ${Math.floor(points)}`);
            // sessionStorage.removeItem('myStorage');
        }
    }      
    else {
        console.log('Illegal click!');
    }    
})
// When a new question loads, clear all text color from previous question's answer
function reset() {
    for (let k=0; k<4; k++) {
        choice[k].classList.remove('green');
        choice[k].classList.remove('red');
    }
    answerClicked = false;
}
// Handle the click when user wants to go to next question 
next.addEventListener('click', function(e) {           
    if (answerClicked == false) {
        alert('Please select your answer')
    }
    else if (pageNum < 9) {        
        pageNum++;    
        loadNextQuestion(pageNum);
        // reset();
    }
    else {
        next.textContent = 'END';
    }
    sessionStorage.setItem('myStorage', [pageNum, points]);    
})