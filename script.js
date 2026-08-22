const result_text = document.querySelector(".game-result-text")
const score_player = document.querySelector(".game-score-player")
const score_computer = document.querySelector(".game-score-computer")
const computer_choice = document.querySelector(".game-choice-computer")
const player_hand = document.querySelector(".game-player-hand")
const computer_hand = document.querySelector(".game-computer-hand")
const countdown = document.querySelector(".game-countdown")

function rock(){
    const random = Math.floor(Math.random() * 3)    // number of choices = number you multiply by.
    const player_choice = "rock"
    player_hand.textContent = "✊"
    set_countdown()
    setTimeout(
        function(){
            if (random == 0 && player_choice == "rock"){
                computer_hand.textContent = "✊"
                computer_choice.textContent = "Rock"
                result_text.textContent = "Draw"
            }
            else if(random == 1 && player_choice == "rock"){
                computer_hand.textContent = "✋"
                computer_choice.textContent = "Paper"
                result_text.textContent = "You Lose"
                score_computer.textContent = Number(score_computer.textContent) + 1
            }
            else{
                computer_hand.textContent = "✌️"
                computer_choice.textContent = "Scissors"
                result_text.textContent = "You win"
                score_player.textContent = Number(score_player.textContent) + 1
            }
        }, 2000
    )
}

function paper(){
    const random = Math.floor(Math.random() * 3)
    const player_choice = "paper"
    player_hand.textContent = "✋"
    set_countdown()
    setTimeout(
        function(){
            if (random == 1 && player_choice == "paper"){
                computer_hand.textContent = "✋"
                computer_choice.textContent = "Paper"
                result_text.textContent = "Draw"
            }
            else if(random == 2 && player_choice == "paper"){
                computer_hand.textContent = "✌️"
                computer_choice.textContent = "Scissors"
                result_text.textContent = "You Lose"
                score_computer.textContent = Number(score_computer.textContent) + 1
            }
            else{
                computer_hand.textContent = "✊"
                computer_choice.textContent = "Rock"
                result_text.textContent = "You win"
                score_player.textContent = Number(score_player.textContent) + 1
            }
        },2000
    )
}

function scissors(){
    const random = Math.floor(Math.random() * 3)
    const player_choice = "scissors"
    player_hand.textContent = "✌️"
    set_countdown()
    setTimeout(function(){
            if (random == 2 && player_choice == "scissors"){
                computer_hand.textContent = "✌️"
                computer_choice.textContent = "Scissors"
                result_text.textContent = "Draw"
            }
            else if(random == 0 && player_choice == "scissors"){
                computer_hand.textContent = "✊"
                computer_choice.textContent = "Rock"
                result_text.textContent = "You Lose"
                score_computer.textContent = Number(score_computer.textContent) + 1
            }
            else{
                computer_hand.textContent = "✋"
                computer_choice.textContent = "Paper"
                result_text.textContent = "You win"
                score_player.textContent = Number(score_player.textContent) + 1
            }
        }, 2000
    )
}

function set_countdown(){
    countdown.textContent = 3
    setTimeout(
        function(){
            countdown.textContent -= 1
        }, 1000
    )
    setTimeout(
        function(){
            countdown.textContent -= 1
        }, 2000
    )
}