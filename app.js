var count = 6;
var quizItems = new Array();

quizItems[0] = new QuizItem(
	"The smallest unit of life that exhibits the characteristics of self-maintenance and self-replication is the: ",
	"cell",
	"body",
	"organ",
	"tissue",
	"cell",
	""
);

quizItems[1] = new QuizItem(
	"Prokaryotic cells have a chromosome of DNA, but it is not contained inside a _ ",
	"ribosome",
	"reticulum",
	"lysosome",
	"nucleus",
	"mitochondrion",
	""
);
quizItems[2] = new QuizItem(
	"Prokaryotic cells are _ than eukaryotic cells.",
	"larger",
	"smaller",
	"same size",
	"more advanced",
	"longer",
	""
);
quizItems[3] = new QuizItem(
	"The genetic code for controlling all cellular processes is containted in _ ",
	"ribosomes",
	"lysosomes",
	"chromosomes",
	"cell membrances",
	"mitochondria",
	""
);
quizItems[4] = new QuizItem(
	"Oblong, bricklike cells are most likely _ cells.",
	"onion epidermal",
	"human cheek",
	"Amoeba",
	"chromosome",
	"Euglena",
	""
);
quizItems[5] = new QuizItem(
	"If the field of view is 1720um across, and there are 5 cells in the view, how long is each cell: ",
	"1235um",
	"688um",
	"512um",
	"408um",
	"344um",
	""
);
$(document).ready(function() {

	//alert(quizItems[0].question);
	displayNewQuestion(quizItems[0]);
});

function QuizItem(question, answer1, answer2, answer3, answer4, realAnswer, userAnswer) {
	this.question   = question;
	this.answer1    = answer1;
	this.answer2    = answer2;
	this.answer3    = answer3;
	this.answer4    = answer4;
	this.realAnswer = realAnswer;
	this.userAnswer = userAnswer;
}

function displayNewQuestion(quizItem) {
	$(".test").append(quizItem.question);
	

}
