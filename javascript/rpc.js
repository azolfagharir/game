var user_choice;
let computer_choice;
var result;
function randomchoice(){
    var random_choice = Math.random();
    if(random_choice <= 0.33){
        computer_choice = 'rock';
    }
    else if(random_choice > 0.33 && random_choice <= 0.66){
        computer_choice = 'paper';
    }
    else if(random_choice > 0.66){
        computer_choice = 'scissors';
    }
}

function play(user_choice){
    randomchoice(); // Call randomchoice() here
    if(user_choice === 'rock' && computer_choice === 'rock'){
        result = 'Tie';
    }
    else if(user_choice === 'rock' && computer_choice === 'paper'){
        result = 'you lost';

    }
    else if(user_choice === 'rock' && computer_choice === "scissors"){
        result  = "you won";
    }   

    else if(user_choice === 'paper' && computer_choice === 'paper'){
        result = 'Tie';
    }
    else if(user_choice === 'paper' && computer_choice === 'scissors'){
        result = "you lost";
    }
    else if(user_choice === 'paper' && computer_choice === 'rock'){
        result = 'you won';
    }
    else if(user_choice === 'scissors' && computer_choice === 'scissors'){
        result = 'Tie';
    }
    else if(user_choice === 'scissors' && computer_choice === 'rock'){
        result = 'you lost';
    }
    else if(user_choice === 'scissors' && computer_choice === 'paper'){
        result = 'you won';
    }
     document.getElementById("demo").innerHTML = result;
        
    
}