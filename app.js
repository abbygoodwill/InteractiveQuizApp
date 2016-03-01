var count = 6;
var quizItems = new Array();
var currentCount = 1;
var currentArrayCount = 0;
var questionsCorrect = 0;


quizItems[0] = new QuizItem(
	"The smallest unit of life that exhibits the characteristics of self-maintenance and self-replication is the: ",
	"cell",
	"body",
	"organ",
	"tissue",
	"cell",
	"The answer is: cell.",
	""
);

quizItems[1] = new QuizItem(
	"Prokaryotic cells have a chromosome of DNA, but it is not contained inside a _ ",
	"ribosome",
	"reticulum",
	"lysosome",
	"nucleus",
	"nucleus",
	"This answer is: nucleus",
	""
);

quizItems[2] = new QuizItem(
	"Prokaryotic cells are _ than eukaryotic cells.",
	"larger",
	"smaller",
	"same size",
	"more advanced",
	"smaller",
	"The answer is: smaller.",
	""
);

quizItems[3] = new QuizItem(
	"The genetic code for controlling all cellular processes is containted in _ ",
	"ribosomes",
	"lysosomes",
	"chromosomes",
	"cell membrances",
	"chromosomes",
	"This answer is: chromosomes.",
	""
);

quizItems[4] = new QuizItem(
	"Oblong, bricklike cells are most likely _ cells.",
	"onion epidermal",
	"human cheek",
	"Amoeba",
	"chromosome",
	"onion epidermal",
	"This answer is: onion epidermal.",
	""
);

quizItems[5] = new QuizItem(
	"If the field of view is 1720um across, and there are 5 cells in the view, how long is each cell: ",
	"1235um",
	"344um",
	"512um",
	"408um",
	"344um",
	"This answer is 344um",
	""
);

$(document).ready(function() {

	//alert(quizItems[0].question);
	displayNewQuestion(quizItems[0]);
	$('#submit').click(function() {
		setUserResponse(quizItems[currentArrayCount]);
		changeCorrectCount(quizItems[currentArrayCount]);
		changeGradeColorBack();
		highlightGrade();
		changeCount();
		changeArrayCount();
		changeQuestionNumber();
		displayNewQuestion(quizItems[currentArrayCount]);
		

	});




});

function QuizItem(question, answer1, answer2, answer3, answer4, realAnswer, response, userAnswer) {
	this.question   = question;
	this.answer1    = answer1;
	this.answer2    = answer2;
	this.answer3    = answer3;
	this.answer4    = answer4;
	this.realAnswer = realAnswer;
	this.response   = response;
	this.userAnswer = userAnswer;

}
function setUserResponse(quizItem) {
	quizItem.userAnswer = $("#selections input[type='radio']:checked").val();
	console.log('user selected: ' + quizItem.userAnswer);

}

function displayNewQuestion(quizItem) {
	$(".question").text(quizItem.question);
	$(".answer-1").text(quizItem.answer1);
	$(".answer-2").text(quizItem.answer2);
	$(".answer-3").text(quizItem.answer3);
	$(".answer-4").text(quizItem.answer4);
	$(".radio-1").val(quizItem.answer1);
	$(".radio-2").val(quizItem.answer2);
	$(".radio-3").val(quizItem.answer3);
	$(".radio-4").val(quizItem.answer4);

	

}

function changeCount() {
	currentCount++;

}

function changeArrayCount() {
	currentArrayCount++;
}

function changeCorrectCount(quizItem) {
	// QuizItem();
	var userAnswer = quizItem.userAnswer;
	var realAnswer = quizItem.realAnswer;
	console.log('user answer: ' + userAnswer);
	console.log('real answer: ' + realAnswer);

	if (realAnswer == userAnswer) {
		questionsCorrect++;
		console.log('questionsCorrect variable: ' + questionsCorrect);
	}
}

function highlightGrade() {
	grade = (questionsCorrect/currentCount) * 100;
	console.log('entering highlightGrade function');
	console.log('questionsCorrect: ' + questionsCorrect);
	console.log('currentcount: ' + currentCount);
	console.log('current grade is: ' + grade);

	if (grade >= 90) {
		// $(this).css('color', 'red');
		$('.gradeA').css('color', "yellow");
	} else if (grade >= 80) {
		$('.gradeB').css('color', "yellow");
	} else if (grade >=70) {
		$('.gradeC').css('color', "yellow");
	} else if (grade >= 60) {
		$('.gradeD').css('color', "yellow");
	} else {
		$('.gradeF').css('color', "yellow");
	}
}
function changeGradeColorBack() {
	$('.gradeA').css('color', "black");
	$('.gradeB').css('color', "black");
	$('.gradeC').css('color', "black");
	$('.gradeD').css('color', "black");
	$('.gradeF').css('color', "black");

}
function changeQuestionNumber() {

	$('.questionNumber').text(currentCount);
	console.log("changeQuestionNumber is being called here!")
	console.log(currentCount);

	if(currentCount == 6) {
		alert("You have finished the quiz.  Your final score is: " + grade);
	}

}
