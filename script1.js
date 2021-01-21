// console.log("We are live")
let dakar = ['Port of Spain', 'Gitega', 'Darkar', 'Nouakchott'];
let freetown = ['Sao Tome', 'Freetown', 'Nicosia', 'Niamey'];
let banjul = ['Banjul', 'Ankara', 'Rabat', 'Victoria'];
let vientiane = ['Vientiane', 'Kuala Lumpur', 'Manama', 'Kuwait City'];
let basseterre = ['Copenhagen', 'Castries', 'Basseterre', 'Kingston'];
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
["Saint Kitts and Nevis", "Basseterre", basseterre],
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
        for (let i=0; i<4; i++) {
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

console.log(array[9][2]);

shuffleChoice();
randomQuizSequence();
console.log(array[9][2]);