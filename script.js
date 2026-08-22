const result_text = document.querySelector(".game-result-text")
const score_player = document.querySelector(".game-score-player")
const score_computer = document.querySelector(".game-score-computer")
const computer_choice = document.querySelector(".game-choice-computer")

function rock(){
    const random = Math.floor(Math.random() * 3)    // number of choices = number you multiply by.
    const player_choice = "rock"
    if (random == 0 && player_choice == "rock"){
        computer_choice.textContent = "Rock"
        result_text.textContent = "Draw"
    }
    else if(random == 1 && player_choice == "rock"){
        computer_choice.textContent = "Paper"
        result_text.textContent = "You Lose"
        score_computer.textContent = Number(score_computer.textContent) + 1
    }
    else{
        computer_choice.textContent = "Scissors"
        result_text.textContent = "You win"
        score_player.textContent = Number(score_player.textContent) + 1
    }
}

function paper(){
    const random = Math.floor(Math.random() * 3)
    const player_choice = "paper"
    if (random == 1 && player_choice == "paper"){
        computer_choice.textContent = "Paper"
        result_text.textContent = "Draw"
    }
    else if(random == 2 && player_choice == "paper"){
        computer_choice.textContent = "Scissors"
        result_text.textContent = "You Lose"
        score_computer.textContent = Number(score_computer.textContent) + 1
    }
    else{
        computer_choice.textContent = "Rock"
        result_text.textContent = "You win"
        score_player.textContent = Number(score_player.textContent) + 1
    }
}

function scissors(){
    const random = Math.floor(Math.random() * 3)
    const player_choice = "scissors"
    if (random == 2 && player_choice == "scissors"){
        computer_choice.textContent = "Scissors"
        result_text.textContent = "Draw"
    }
    else if(random == 0 && player_choice == "scissors"){
        computer_choice.textContent = "Rock"
        result_text.textContent = "You Lose"
        score_computer.textContent = Number(score_computer.textContent) + 1
    }
    else{
        computer_choice.textContent = "Paper"
        result_text.textContent = "You win"
        score_player.textContent = Number(score_player.textContent) + 1
    }
}
