//entry point of r/p/s
function game()
{
    let computerScore=null;
    let userScore=null;
    let count = 0;
    while(count < 5)
    {
        let computer = computerPlay();                          //call computer result function
        let user = prompt("Rock, paper or scisscors?");         //prompt user input
        user = user.toLowerCase();                              //convert user input to lowercase
        let winner = playRound(user, computer);                              //play round(compare selections)
        ++count;
        console.log(winner);
        if(winner==="computer")
        {
            computerScore++;
        }
        if(winner==="user")
        {
            userScore++;
        }
    }
    console.log(`user score: ${userScore} computerScore: ${computerScore}`);
} 

//determines computer's selection
//returns returns result
function computerPlay()
{
    let min = 0;        //min of range, inclusive
    let max = 2;        //max of range, inclusive
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;   //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
                                                                      // nontrivial random generator 

       switch(choice){
        case 0:
            choiceResult = "rock";
            break;
        case 1:
            choiceResult = "paper";
            break;
        case 2:
            choiceResult = "scissors";
            break;   
        }

    return choiceResult;
}



function playRound(playerSelection, computerSelection)
{
    let winner=null;
    if(playerSelection===computerSelection) //computer user same choice    
    {
       winner = "draw" //nothing
    }
    //player win scenario
    else if((playerSelection==="rock" && computerSelection==="scissors") || (playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="scissors" && computerSelection==="paper"))
    {
        winner = "user";
    }    
    else if((computerSelection==="rock" && playerSelection==="scissors") || (computerSelection==="paper" && playerSelection==="rock") || (computerSelection==="scissors" && playerSelection==="paper"))
    {
        winner = "computer";
    }    
    

    return winner;
}