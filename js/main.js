// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// FUNZIONE GENERA CAMPO DA GIOCO
function setGrid(num, field){
    for(var i = 1; i <= num ; i++){
        let tile = document.createElement('div');
        field.appendChild(tile)
        tile.innerHTML = [i]
    }
}

// FUNZIONE GENERA BOMBE
function setBombs(min, max) {
    let bomb = 0;
    for (var i = 0; i < numBombs;){
        bomb = Math.floor(Math.random() * (max - min + 1) ) + min;
        if (!bombs.includes(bomb)){
            bombs.push(bomb)
            i++;
        } 
    }
    
  }

// variabili principali
var numCelle = parseInt(prompt('Da quante celle vuoi sia formato il campo?'));
var playGround = document.getElementById('playground');
const numBombs = 16;
var bombs = [];




// PROGRAMMA

setGrid(numCelle, playGround)

playGround.addEventListener('click', 
function(event) {
    event.target.classList.toggle('click_bg_switch');
    alert(event.target.innerHTML);
}
)

setBombs(1, 100)

console.log(bombs)