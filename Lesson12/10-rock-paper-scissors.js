let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScoreElement();

        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            let result = '';

            if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                result = 'You lose.';
            } else if (computerMove === 'paper') {
                result = 'You win.';
            } else if (computerMove === 'scissors') {
                result = 'Tie.';
            }

            } else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                result = 'You win.';
            } else if (computerMove === 'paper') {
                result = 'Tie.';
            } else if (computerMove === 'scissors') {
                result = 'You lose.';
            }
            
            } else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
                result = 'Tie.';
            } else if (computerMove === 'paper') {
                result = 'You lose.';
            } else if (computerMove === 'scissors') {
                result = 'You win.';
            }
            }

            if (result === 'You win.') {
            score.wins += 1;
            } else if (result === 'You lose.') {
            score.losses += 1;
            } else if (result === 'Tie.') {
            score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;

            let X;

            if(playerMove === "rock"){
                X = '<img class="move-icon" src="./assets/rock-emoji.png" alt="">'
            }else if(playerMove === "paper"){
                X = '<img class="move-icon" src="./assets/paper-emoji.png">'
            }else{
                X = '<img class="move-icon"src="./assets/scissors-emoji.png">'
            }
            
            if(computerMove === "rock"){
                Y = '<img class="move-icon" src="./assets/rock-emoji.png" alt="">'
            }else if(computerMove === "paper"){
                Y = '<img class="move-icon" src="./assets/paper-emoji.png">'
            }else{
                Y = '<img class="move-icon" src="./assets/scissors-emoji.png">'
            }
            document.querySelector('.js-moves').innerHTML = `You ${X}  ${Y} Computer`;
        }

        function updateScoreElement() {
            document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function pickComputerMove() {
            const randomNumber = Math.random();

            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
            }

            return computerMove;
        }

        let isAutoPlayOn = false;
        let intervalId;

        function autoPlay(){

            const autoPlayButtonElement = document.querySelector(".js-auto-play");

            if(!isAutoPlayOn){
                intervalId = setInterval(
                function(){
                        const playerMove = pickComputerMove();
                        playGame(playerMove);
                    }, 1000);

                isAutoPlayOn = true;
                autoPlayButtonElement.innerHTML = "Stop Auto Play";
            }else{
                isAutoPlayOn = false;
                clearInterval(intervalId);
                autoPlayButtonElement.innerHTML = "Auto Play";
            }
        }