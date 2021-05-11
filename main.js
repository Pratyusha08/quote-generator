var quotes = [
	'I grew up in a house with Monica, okay. If you did not eat fast, you did not eat.',
	'We were on a break!',
	'How you doin\'?',
	'Yeah. It\'s like a cow\'s opinion. It just doesn\'t matter. It\'s moo.',
	'You can\'t fire me. I make your decisions and I say, \'I\'m not fired.\' Ha.',
	'I don\'t want my baby\'s first words to be \'How You Doing?\'',
	'Okay, no uterus, no opinion."',
	'...And yet, I never run into Beyonce.',
	'I deserve a real celebration and I am not gonna let some sweaty little man make me feel badly about it.',
	'Oh, I wish I could, but I do not want to.'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('output').innerHTML = quotes[randomNumber];
}