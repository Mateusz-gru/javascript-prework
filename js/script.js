// Odczytanie ruchu komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
    computerMove = 'papier';  
}
else if (randomNumber == 3){
    computerMove = 'nożyczki';
}

printMessage('Mój ruch to: ' + computerMove);

// Odczytanie ruchu gracza

HTML JSResult
EDIT ON
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
    playerMove = 'papier';
}
else if (playerInput == '3'){
    playerMove = 'nożyczki';
}
printMessage('Twój ruch to: ' + playerMove);
Run Pen 

Resources1×0.5×0.25×Rerun

// Wynik gry

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
else( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Nieznany ruch');
}
if( computerMove == 'kamień' && playerMove == 'nożyczki'){
  printMessage('Ty przegrywasz!');
}
else( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}
if( computerMove == 'papier' && playerMove == 'nożyczki'){
  printMessage('Ty wygrywasz!');
}
else( computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('Nieznany ruch');
}
if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty przegrywasz!');
}
else( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}
if( computerMove == 'nożyczki' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}
else( computerMove == 'nożyczki' && playerMove == 'nieznany ruch'){
  printMessage('Nieznany ruch');
}
if( computerMove == 'nożyczki' && playerMove == 'papier'){
  printMessage('Ty przegrywasz!');
}
else( computerMove == 'nożyczki' && playerMove == 'nożyczki'){
  printMessage('Remis!');
}