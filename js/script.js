// FUNKCJA

function getMoveName(argMoveId) {
if (argMoveId == 1) {
return 'kamień';
}
else if (argMoveId == 2) {
return 'papier';
} 
else if (argMoveId == 3) {
return 'nożyczki';
}

printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
  printMessage('Ty wygrywasz!');
}
else (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (argComputerMove == 'kamień' && argPlayerMove == 'nożyczki') {
  printMessage('Ty przegrywasz!');
}
else (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
  printMessage('Remis!');
}
if (argComputerMove == 'papier' && argPlayerMove == 'nożyczki') {
  printMessage('Ty wygrywasz!');
}
else (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (argComputerMove == 'papier' && argPlayerMove == 'kamień' ) {
  printMessage('Ty przegrywasz!');
}
else (argComputerMove == 'papier' && argPlayerMove == 'papier') {
  printMessage('Remis!');
}
if (argComputerMove == 'nożyczki' && argPlayerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
}
else( argComputerMove == 'nożyczki' && argPlayerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (argComputerMove == 'nożyczki' && argPlayerMove == 'papier') {
  printMessage('Ty przegrywasz!');
}
else (argComputerMove == 'nożyczki' && argPlayerMove == 'nożyczki') {
  printMessage('Remis!');
}
else if (argPlayerMove != 1 || argPlayerMove != 2 || argPlayerMove != 3 ) {
    printMessage('WPROWADZ LICZBE CAŁKOWITĄ W ZAKRESIE 1-3');
}
}
    
// Odczytanie ruchu komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if (randomNumber == 1) {
  computerMove = 'kamień';
}
else if (randomNumber == 2) {
    computerMove = 'papier';  
}
else if (randomNumber == 3) {
    computerMove = 'nożyczki';
}
*/

printMessage('Mój ruch to: ' + computerMove);

// Odczytanie ruchu gracza


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*
if (playerInput == '1') {
  playerMove = 'kamień';
}
else if (playerInput == '2') {
    playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove = 'nożyczki';
}
*/
printMessage('Twój ruch to: ' + argPlayerMoveplayer);

console.log('argComputerMove = ' + argComputerMove, 'argPlayerMove = ' + argPlayerMove)

// Wynik gry

console.log ('wynik to:' + displayResult);

printMessage('Wynik gry: ' + displayResult);
/*
function displayResult(argComputerMove, argPlayerMove) {
if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
  printMessage('Ty wygrywasz!');
}
else (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (argComputerMove == 'kamień' && argPlayerMove == 'nożyczki') {
  printMessage('Ty przegrywasz!');
}
else (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
  printMessage('Remis!');
}
if (argComputerMove == 'papier' && argPlayerMove == 'nożyczki') {
  printMessage('Ty wygrywasz!');
}
else (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (argComputerMove == 'papier' && argPlayerMove == 'kamień' ) {
  printMessage('Ty przegrywasz!');
}
else (argComputerMove == 'papier' && argPlayerMove == 'papier') {
  printMessage('Remis!');
}
if (argComputerMove == 'nożyczki' && argPlayerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
}
else( argComputerMove == 'nożyczki' && argPlayerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (argComputerMove == 'nożyczki' && argPlayerMove == 'papier') {
  printMessage('Ty przegrywasz!');
}
else (argComputerMove == 'nożyczki' && argPlayerMove == 'nożyczki') {
  printMessage('Remis!');
}
else if (argPlayerMove != 1 || argPlayerMove != 2 || argPlayerMove != 3 ) {
    printMessage('WPROWADZ LICZBE CAŁKOWITĄ W ZAKRESIE 1-3');
}
}
*/

console.log(displayResult);

/*
if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage('Ty wygrywasz!');
}
else (computerMove == 'kamień' && playerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (computerMove == 'kamień' && playerMove == 'nożyczki') {
  printMessage('Ty przegrywasz!');
}
else (computerMove == 'kamień' && playerMove == 'kamień') {
  printMessage('Remis!');
}
if (computerMove == 'papier' && playerMove == 'nożyczki') {
  printMessage('Ty wygrywasz!');
}
else (computerMove == 'papier' && playerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (computerMove == 'papier' && playerMove == 'kamień' ) {
  printMessage('Ty przegrywasz!');
}
else (computerMove == 'papier' && playerMove == 'papier') {
  printMessage('Remis!');
}
if (computerMove == 'nożyczki' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
}
else( computerMove == 'nożyczki' && playerMove == 'nieznany ruch') {
  printMessage('Nieznany ruch');
}
if (computerMove == 'nożyczki' && playerMove == 'papier') {
  printMessage('Ty przegrywasz!');
}
else (computerMove == 'nożyczki' && playerMove == 'nożyczki') {
  printMessage('Remis!');
}
*/
