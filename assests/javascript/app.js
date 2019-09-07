var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswered = 0;

//create a timer that starts at 80sec and counts down to zero
function countDown() {
    alert("Outta Time!!!");
}
//At the 40sec mark alert the user with "40sec left"
function FortySecAlert() {
    alert("40 Sec left");
}
//When player clicks start button the game timers will begin and display the questions and answers
$("#startButton").click(function () {
    $(this).hide();
    for (let i = 0; i < questions.length; i++) {
        //console.log(questions[i].answers)
        var question = $("<div>").text(questions[i].question);
        $("#questions").append(question);

        // TODO: need another loop to iterate over answers.
        for (let j = 0; j < questions[i].answers.length; j++) {
            var answer = $("<div key=" + j + ">").text(questions[i].answers[j]);
            $("#questions").append(answer);
        }
    }
    setTimeout(countDown, 1000 * 80);
    setTimeout(FortySecAlert, 1000 * 40);
});

// Handler for when user clicks an answer DIV
$("div[key]").click(function () {

});

// 1. Write out questions...
// a. write out list of possible answers (3+)
// 2. user selects answer ... 
// a. 0, 1, 2 (position) / key

// example:
// "what is the capital of washington",
//   a. Houston (key = 0) <div key=0>Houston</div>
//   b. Seattle (key = 1) <div key=1>Seattle</div>
//   c. Olympia (key = 2) <div key=2>Olympia</div>

//list out 5 questions with 4 different answers to choose from. One being the correct answer and three being the wrong answer
var questions = [
  {

    question: "what is the capital of washington",
    answers: ["Houston", "Seattle", "Olympia"], //  questions[i].answers[j]
    indexOfCorrect: 2
},
{
    question:
        "According to U.N. data, it's the world's most populous city named for a person.",
    answers: ["Restrepo", "Santa Sofia", "Sao Paolo", "Pedro Carbo"],
    indexOfCorrect: "Sao Paolo"
},
{
    question:
        "Founded in 1821, it was named for its delivery time, the last mail delivery of the day.",
    answers: [
        "Friday Night Live",
        "Saturday Evening Post",
        "Weekend Post",
        "LA Times"
    ],
    indexOfCorrect: "Saturday Evening Post"
},
{
    question:
        "The 34 peaks of the roof of this city's airport represent mountains that are about 30 miles away.",
    answers: ["Los Angeles", "Denver", "Las Vegas", "Cheyenne"],
    indexOfCorrect: "Denver"
},
{
    question:
        "On March 10, 2003, this nation got control of the .af internet domain.",
    answers: ["Albania", "Algeria", "Afghanistan", "Angola"],
    indexOfCorrect: "Afghanistan"
}
];

//TODO:only let the player make one choice per question.
//TODO:if the player finishes marking all their answers tally up all the correct answers and display score
// if () {
//     correctAnswer++;
// } else {
//     incorrectAnswer++;
// };
//TODO:else if the timer reaches zero before the player finishes display "outta time!!!" then tally up all the correct answers and display score
//TODO:Ask player if they wish to play again. if yes restart game and if no do nothing
