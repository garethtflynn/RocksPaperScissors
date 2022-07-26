var wins = 0;
var losses = 0;
var ties = 0;
var options = ['R', 'P', 'S'];

var play = function(){
    
    var userInput = (window.prompt ('Lets play Rocks (R), Paper (P), or Scissors (S)! Enter your choice below'));
     if (!userInput){
        return;
    }

    userInput = userInput.toUpperCase();
    
    var index = Math.floor(Math.random() * options.length);
    var computerInput = options[index];

    window.alert('The computer went with ' + computerInput);
    
    if (userInput === computerInput){
        ties ++;
        window.alert('You tied!');
    } else if ( 
        (userInput === 'R' && computerInput === 'S') ||
        (userInput === 'P' && computerInput === 'R') ||
        (userInput === 'S' && computerInput === 'P')
    ) {
        wins ++;
        window.alert('You won!');
    } else {
        losses ++
        window.alert('You lost! :(');
    }

    window.alert(
        'results:\nwins ' + wins + '\nlosses: ' + losses + '\nties' + ties
    );

    var goAgain = window.confirm('Want to play again?');

    if (goAgain){
        play();
    }      
};

play();