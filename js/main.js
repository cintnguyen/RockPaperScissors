let botScore=0;
let playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
	let botsWeapon=getRandomWeapon();
	console.log(botsWeapon)
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsScissors(){
	let botsWeapon=getRandomWeapon();
	console.log(botsWeapon)
	checkWhoWon(botsWeapon, "scissors");

}
function playerThrowsPaper(){
	let botsWeapon=getRandomWeapon();
	console.log(botsWeapon)
	checkWhoWon(botsWeapon,"paper");
}


function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}


function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Too bad - It's a tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}


function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerText=botScore;
	displayCompleteMessage("Sorry, you're a loser ):");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerText=playerScore;
	displayCompleteMessage("YOU WON!")
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerText=msg;
}