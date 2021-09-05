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
function setGrid(num){
    let field = document.getElementById('playground');
    let tile;
    for(var i = 1; i <= num ; i++ ){
        tile = document.createElement('div');
        field.appendChild(tile);
        tile.innerHTML = i;
        validTilesArr.push(i);
    }
}

// FUNZIONE GENERA BOMBE
function setBombs(min, max) {
    let bomb;
    for (var i = 0; i < numBombs;){
        bomb = Math.floor(Math.random() * (max - min + 1) ) + min;
        // vengono pushate solo le bombe valide ( numeri diversi)
        if (!bombsArr.includes(bomb)){
            bombsArr.push(bomb)
            i++;
        } 
    }
            
  }




// PROGRAMMA

// variabili principali
var numCelle = parseInt(prompt('Da quante celle vuoi sia formato il campo?'));
var numBombs = 16;



const bombsArr = []        //ARRAY BOMBE
const validTilesArr = []   //ARRAY CELLE DISPONIBILI
var clickedTiles = []      //ARRAY CELLE CLICCATE        
//

setGrid(numCelle)     //CREO CAMPO
setBombs(1,100)     //GENERO BOMBE


console.log(validTilesArr)
console.log(bombsArr)

// EVENTO CLICK

document.getElementById('playground').addEventListener('click',
function(event){

var clickOnTile = parseInt(event.target.innerHTML);

if ( bombsArr.includes(clickOnTile) == true ) {
    alert('BOOM! Game Over' + 'Score ' + clickedTiles.length)

} else if ( clickedTiles.includes(clickOnTile) ) {
    alert('seleziona una cella disponibile')

}  else {
    event.target.classList.add('click_bg_switch')
    clickedTiles.push(clickOnTile)

    if(clickedTiles.length == validTilesArr.length - numBombs){
        alert('HAI VINTO!' + 'Score ' + clickedTiles.length)
    }
    }
})












