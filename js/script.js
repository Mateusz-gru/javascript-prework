{
    const playGame = function(playerInput) {
        clearMessages ();
    

        const getMoveName = function(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nozyce';
            }
  
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
        }

        const displayResult = function(argComputerMove, argPlayerMove) {
            if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
                printMessage('Ty przegrywasz!');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
                printMessage('Ty wygrywasz!');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                printMessage('Ty przegrywasz!');
            } else if ( argComputerMove == argPlayerMove) {
                printMessage('Remis!');
            } else if ( argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            } else if ( argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
                printMessage('Ty przegrywasz!');
            }else if (argPlayerMove == 'nieznany ruch') {
                printMessage('nieznany ruch');
            }
        }

        // RUCH KOMPUTERA

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);
        /*
            if (randomNumber == 1) {
                computerMove = 'kamień';
            } else if (randomNumber == 2) {
                computerMove = 'papier';
            } else if (randomNumber == 3) {
                computerMove = 'nozyce';
            }
        */

        printMessage('Mój ruch to: ' + computerMove);
    
        // RUCH GRACZA
        /*
        let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

        console.log('Gracz wpisał: ' + playerInput);
        */

        const playerMove = getMoveName(playerInput);

        /*
            if (playerInput == '1') {
                playerMove = 'kamień';
            } else if (playerInput == '2') {
                playerMove = 'papier';
            } else if (playerInput == '3') {
                playerMove = 'nozyce';
            }
        */

        printMessage('Twój ruch to: ' + playerMove);
            console.log('argComputerMove = '+ computerMove, 'playerMove = ' + playerMove);


        // WYNIK GRY

        displayResult(computerMove, playerMove);

        /*
        function displayResult(argComputerMove, argPlayerMove) {
            if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
                printMessage('Ty przegrywasz!');
            } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
                printMessage('Remis!');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
                printMessage('Ty wygrywasz!');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                printMessage('Ty przegrywasz!');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
                printMessage('Remis!');
            } else if ( argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            } else if ( argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
                printMessage('Ty przegrywasz!');
            } else if ( argComputerMove == 'nozyce' && argPlayerMovee == 'nozyce') {
                printMessage('Remis!');
            } else if ( argComputerMove == 'nozyce' && argPlayerMove == 'nieznany ruch') {
                printMessage('nieznany ruch');
            } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
                printMessage('nieznany ruch');
            } else if ( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
                printMessage('nieznany ruch');
            }
            printMessage('WPROWADZ LICZBE CAŁKOWITĄ W ZAKRESIE 1-3')
        }
        */

        /*
        if ( computerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if ( computerMove == 'kamień' && argPlayerMove == 'nozyce') {
            printMessage('Ty przegrywasz!');
        } else if ( computerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
        } else if ( computerMove == 'papier' && argPlayerMove == 'nozyce') {
            printMessage('Ty wygrywasz!');
        } else if ( computerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Ty przegrywasz!');
        } else if ( computerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis!');
        } else if ( computerMove == 'nozyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if ( computerMove == 'nozyce' && argPlayerMove == 'papier') {
            printMessage('Ty przegrywasz!');
        } else if ( computerMove == 'nozyce' && argPlayerMovee == 'nozyce') {
            printMessage('Remis!');
        } else if ( computerMove == 'nozyce' && argPlayerMove == 'nieznany ruch') {
            printMessage('nieznany ruch');
        } else if ( computerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
            printMessage('nieznany ruch');
        } else if ( computerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
            printMessage('nieznany ruch');
        }
        printMessage('WPROWADZ LICZBE CAŁKOWITĄ W ZAKRESIE 1-3')
        */
    
    }
    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3);
    });

}
