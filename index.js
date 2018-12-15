function scuberGreetingForFeet(value) {

	if (value <= 400) {
		return 'This one is on me!';
	}
	else if (value > 2000 && value < 2500) {
		return 'I will gladly take your thirty bucks.';
	}
	else {
		return 'No can do.';
	}
}

function ternaryCheckCity(value){
	return value === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(howGenerous) {
	switch(howGenerous){
		case 'generous':
			return "Thank you so much.";
			break;

		case 'not as generous':
			return "Thank you.";
			break;

		default:
			return "Bye.";
	}
}
