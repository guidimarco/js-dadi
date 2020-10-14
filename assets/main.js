// DADO 1
var rollPlayer1 = Math.floor(Math.random() * 6) + 1;

document.getElementById("roll-player-1").innerHTML = rollPlayer1;

// DADO 2
var rollPlayer2 = Math.floor(Math.random() * 6) + 1;

document.getElementById("roll-player-2").innerHTML = rollPlayer2;

console.log("Giocatore 1: " + rollPlayer1);
console.log("Giocatore 2: " + rollPlayer2);

// RISULTATO
if (rollPlayer1 > rollPlayer2) {
    document.getElementById("result").innerHTML = "Ha vinto il giocatore 1!";
} else if (rollPlayer1 < rollPlayer2) {
    document.getElementById("result").innerHTML = "Ha vinto il giocatore 2!";
} else {
    document.getElementById("result").innerHTML = "Pari!";
}
