// console.log("We are live")
let dakar = ['Port of Spain', 'Gitega', 'Dakar', 'Nouakchott'];
let freetown = ['Sao Tome', 'Freetown', 'Nicosia', 'Niamey'];
let banjul = ['Banjul', 'Ankara', 'Rabat', 'Victoria'];
let vientiane = ['Vientiane', 'Kuala Lumpur', 'Manama', 'Kuwait City'];
let yangon = ['Copenhagen', 'Castries', 'Yangon', 'Kingston'];
let kualaLumpur = ['Vaduz', 'Jakarta', 'Moscow', 'Kuala Lumpur'];
let stockholm = ['Paris', 'Stockholm', 'Tbilisi', 'Prague'];
let montevideo = ['Montevideo', 'Panama City', 'Caracas', 'Peking'];
let kigali = ['Kigali', 'Porto Novo', 'San Tome', 'Panama City'];
let sanMarino = ['Bucharest', 'San Marino', 'Manila', 'Podgorica'];
let suva = ['Ngerulmud', 'Panama City', 'Suva', 'Palikir'];
let kiev = ['Sarajevo', 'Taipei', 'Kiev', 'Skopje'];
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
/*
console.log(array);
shuffleChoice();
randomQuizSequence();
console.log(array);
*/

let pageNum =0;  //Page number index starting from 0
let points = 0;
let answerClicked = false;

let score = document.querySelector('.second'); 
let tracking = document.querySelector('.third');
let question = document.querySelector('.fourth');
let choice1 = document.querySelector('.fifth');
let choice2 = document.querySelector('.sixth');
let choice3 = document.querySelector('.seventh');
let choice4 = document.querySelector('.eighth');
let next = document.querySelector('p');
let selection = document.querySelector('#lower');

function loadNextQuestion(page) {
    tracking.textContent = ` ${page+1}/10`;  
    question.textContent = `What is the capital of ${array[page][0]}?`;
    choice1.textContent = array[page][2][0];
    choice2.textContent = array[page][2][1];
    choice3.textContent = array[page][2][2];
    choice4.textContent = array[page][2][3];   
    reset();     
}


shuffleChoice();
randomQuizSequence();
loadNextQuestion(pageNum);

selection.addEventListener('click', function(e) {
    // console.log(e.target.attributes[0].value);

    if (answerClicked == false) {    
        answerClicked = true;
        if(pageNum === 9) {
            next.textContent = 'END';
        }
        
        if (e.target.attributes[0].value == 'fifth cell') { 
            if (choice1.textContent == array[pageNum][1]) {
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

        if (e.target.attributes[0].value == 'sixth cell') {
            if (choice2.textContent == array[pageNum][1]) {
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

        if (e.target.attributes[0].value == 'seventh cell') {
            if (choice3.textContent == array[pageNum][1]) {
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

        if (e.target.attributes[0].value == 'eighth cell') {
            if (choice4.textContent == array[pageNum][1]) {
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
    else 
        console.log('Illegal click!');
})

function reset() {
    choice1.classList.remove('green');
    choice1.classList.remove('red');
    choice2.classList.remove('green');
    choice2.classList.remove('red');
    choice3.classList.remove('green');
    choice3.classList.remove('red');
    choice4.classList.remove('green');
    choice4.classList.remove('red');
    answerClicked = false;
}

next.addEventListener('click', function(e) {
    // console.log(answerClicked); 
    // next.innerHTML = 'END';
    // next.classList.add('hide');

    // score.textContent = `Score: ${points}`;
           
    if (answerClicked == false) {
        alert('Please select your answer')
    }
    else if (pageNum < 9) {        
        pageNum++;    
        loadNextQuestion(pageNum);
        // reset();
    }
    else {
        console.log(pageNum);
        next.textContent = 'END';
    }    
})