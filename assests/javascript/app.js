//TODO:create a timer that starts at 120sec and counts down to zero
    setTimeout(countDown,1000*3)
    function countDown(){
       // alert("ring ring im working");
    }
//TODO:list out 5 questions with 4 different answers to choose from. One being the correct answer and three being the wrong answer
    var questions = [
        {
            question: "what color is a polar bear", 
            answers: ["white","brown","black"],
            indexOfCorrect: 0
        },{
            question:"what is the capital of washington",
            answers:["Houston","Seattle","Olympia"],
            indexOfCorrect:2
        },{
            question:"WORLD CITIES: According to U.N. data, it's the world's most populous city named for a person.",
            answers:["Restrepo","Santa Sofia","Sao Paolo","Pedro Carbo"],
            indexOfCorrect:3
        },{
            question:"MAGAZINES: Founded in 1821, it was named for its delivery time, the last mail delivery of the day.",
            answers:["Friday Night Live","Saturday Evening Post","Weekend Post","LA Times"],
            indexOfCorrect:1
        },{
            question:"U.S. CITIES: The 34 peaks of the roof of this city's airport represent mountains that are about 30 miles away.",
            answers:["Los Angeles","Denver","Las Vegas","Cheyenne"],
            indexOfCorrect:1
        },{
            question: "THE INTERNET: On March 10, 2003, this nation got control of the .af internet domain.", 
            answers: ["Albania","Algeria","Afghanistan","Angola"],
            indexOfCorrect: 2
        },

    ];
    for (let i = 0; i < questions.length; i++) {
        
        console.log(questions[i].answers)
        var question = $("<div>").text(questions[i].question) 
        $("#questions").append(question);
        var answer = $("<div>").text(questions[i].answers)
        $("#answers").append(answer);

    }

//TODO:only let the player make one choice per question.
//TODO:
//TODO:
//TODO:at the 40sec mark alert the user with "40sec left"
//TODO:if the player finishes marking all their answers tally up all the correct answers and display score
//TODO:else if the timer reaches zero before the player finishes display "outta time!!!" then tally up all the correct answers and display score
//TODO:Ask player if they wish to play again. if yes restart game and if no do nothing