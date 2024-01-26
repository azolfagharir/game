

/*import swal from 'sweetalert';

swal("Hello world!");*/
var user_choice;
let computer_choice;
var result;
var sum = 0;

let score ={
    losses : 0,
    wins : 0,
    ties : 0
}
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
    if(sum < 11){
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
    scores();
    document.getElementById("demo").innerHTML = `you chose: ${user_choice} and computer chose: ${computer_choice} <br> <br> ${result} <br><br> wins:${score.wins} <br><br> losses:${score.losses} <br><br> Ties:${score.ties}`;
    sum = score.losses + score.wins + score.ties;
    }
   /* else if(){

    }*/
}
        
    function scores(){
        if(result === 'you won'){
            score.wins++;
        }
        else if(result==='you lost'){
            score.losses++;
        }
        else if(result === 'Tie'){
            score.ties++;
        }
    }


