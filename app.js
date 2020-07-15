// Hollywood Quiz App

// questions & answers
const questionBank = [
    {question: "What was the first feature-length animated movie ever released?",
    options: ["Cinderella", "Snow White and the Seven Dwarfs", "Bambi", "Beauty and the Beast"],
    answer: "Snow White and the Seven Dwarfs",
    img: "images/snowwhite.png",
    alt: "snow white and the 7 dwarfs"
    },
    {question: "In The Matrix, does Neo take the blue pill or the red pill?",
    options: ["Blue Pill", "Red Pill", "He said \'I need a glass of water please\'", "Neither"],
    answer: "Red Pill",
    img: "images/redpill.png",
    alt: "red pill"
    },
    {question: "For what movie did Tom Hanks score his first Academy Award nomination?",
    options: ["Big", "Forest Gump", "Philadelphia", "Sleepless in Seattle"],
    answer: "Big",
    img: "images/hanks.png",
    alt: "the movie big with tom hanks"
    },
    {question: "In what 1976 thriller does Robert De Niro famously say \“You talkin’ to me?\”",
    options: ["Goodfellas", "Casino", "Meet the Parents", "Taxi Driver"],
    answer: "Taxi Driver",
    img: "images/taxi.png",
    alt: "the movie taxi driver"
    },
    {question: "In Risky Business, what song did Tom Cruise famously lip-sync to in his underwear?",
    options: ["You Shook Me All Night Long by AC/DC", "Old Time Rock and Roll by Bob Seger", "Hotel California by Eagles", "Born to Be Wild by Steppenwolf"],
    answer: "Old Time Rock and Roll by Bob Seger",
    img: "images/risky.png",
    alt: "tom cruise singing old time rock and roll by bob seger"
    },
    {question: "In Apocalypse Now, Robert Duvall says, \“I love the smell of _____ in the morning.\”",
    options: ["Donuts", "Bacon", "Gun Powder", "Napalm"],
    answer: "Napalm",
    img: "images/napalm.png",
    alt: "robert duvall infront of napalm"
    },
    {question: "Joaquin Phoenix received his first Oscar nomination for playing Roman emperor Commodus in what 2000 Oscar-winning epic?",
    options: ["300", "The Fall of Rome", "Caesar", "Gladiator"],
    answer: "Gladiator",
    img: "images/gladiator.png",
    alt: "joaquin phoenix in the movie gladiator"
    },
    {question: "In the action thriller Speed, why is Annie (Sandra Bullock’s) driver’s license suspended?",
    options: ["Hit and Run", "Speeding", "DUI", "Broken tail light"],
    answer: "Speeding",
    img: "images/speed.png",
    alt: "the movie speed"
    },
    {question: "Which Alfred Hitchcock thriller is notorious for its shocking \“shower scene\”?",
    options: ["Psycho", "The Birds", "To Catch a Thief", "The Trouble with Harry"],
    answer: "Psycho",
    img: "images/psycho.png",
    alt: "the movie psycho"
    },
    {question: "What is the real name of Uma Thurman’s “The Bride” character from Kill Bill?",
    options: ["Nancy Botwin", "Daenerys Targaryen", "Maggie Simpson", "Beatrix Kiddo"],
    answer: "Beatrix Kiddo",
    img: "images/kiddo.png",
    alt: "the movie kill bill part 2"
    },
    {question: "Three of Jim Carrey’s blockbusters — The Mask, Dumb and Dumber and Ace Ventura: Pet Detective — were all released in what year?",
    options: ["1992", "1994", "1999", "2002"],
    answer: "1994",
    img: "images/carrey.png",
    alt: "3 will ferrell movies in 1994"
    },
    {question: "Which James Bond movie was the first for Pierce Brosnan as 007?",
    options: ["GoldenEye", "License to Kill", "Die Another Day", "Casino Royale"],
    answer: "GoldenEye",
    img: "images/goldeneye.png",
    alt: "pierce brosnan as james bond in goldeneye"
    },
    {question: "3 movies are tied with 11 Oscars.  Which movie is NOT part of that group?",
    options: ["Titanic (1997)", "Ben Hur (1959)", "Gone with the Wind (1939)", "The Lord of the Rings: The Return of the King (2003)"],
    answer: "Gone with the Wind (1939)",
    img: "images/wind.png",
    alt: "the movie gone with the wind"
    },
    {question: "Which actress went to high school with Snoop Dogg and admitted she bought cannabis from him?",
    options: ["Anne Hathaway", "Angelina Jolie", "Cameron Diaz", "Scarlett Johansson"],
    answer: "Cameron Diaz",
    img: "images/cameron.png",
    alt: "cameron diaz and snoop dogg"
    },
    {question: "Which famous comedian/actor looks like the drummer from the Red Hot Chili Peppers, Chad Smith?",
    options: ["Louis C.K.", "Dane Cook", "Jerry Seinfeld", "Will Ferrell"],
    answer: "Will Ferrell",
    img: "images/will-chad.png",
    alt: "will ferrell and chad smith"
    }
];

let currentQuestionNum = 0;
let incomingQuestion = [];
let incomingAnswer = "";
let incomingImg = "";
let incomingAlt = "";
let scoreBoardNum = 0;


// generateQuestion function
function generateQuestion(questionList){
    // grab next question in array and set question, answer and image variables
    incomingQuestion = questionList[currentQuestionNum];
    incomingAnswer = questionList[currentQuestionNum].answer;
    incomingImg = questionList[currentQuestionNum].img;
    let generateQuestionString = "";
    // generate new question with form tag and radio buttons as string
    generateQuestionString = `
        <form action="#">
        <h2 class="question">`+ incomingQuestion.question +`</h2>
        <div>
            <input type="radio" id="option1" name="hollywoodQues" value="`+ incomingQuestion.options[0] +`">
            <label for="option1">`+ incomingQuestion.options[0] +`</label>
        </div>
        <div>
            <input type="radio" id="option2" name="hollywoodQues" value="`+ incomingQuestion.options[1] +`">
            <label for="option2">`+ incomingQuestion.options[1] +`</label>
        </div>
        <div>
            <input type="radio" id="option3" name="hollywoodQues" value="`+ incomingQuestion.options[2] +`">
            <label for="option3">`+ incomingQuestion.options[2] +`</label>
        </div>
        <div>
            <input type="radio" id="option4" name="hollywoodQues" value="`+ incomingQuestion.options[3] +`">
            <label for="option4">`+ incomingQuestion.options[3] +`</label>
        </div>
        <button type="button" class="btn submitAnswerBtn">Submit</button>
        </form>`;
    // update currentQuestionNum
    currentQuestionNum += 1;
    // update question num display
    $('.questionNum').html(currentQuestionNum);
    // return new question form string
    return generateQuestionString;
};

// display question function
function showQuestion(){
    //create string
    const newQuestion = generateQuestion(questionBank);
    //insert string as html in questionBox
    $('.questionBox').html(newQuestion);
};

// function to update # of questions answer and score
function score(){
    console.log('score running');
    scoreBoardNum += 1;
    $('.scoreboard').html(scoreBoardNum);
};

// function for delivering right or wrong results
function questionResult(correctAnswer, replyString, scoreBool, color){
    let resultString = "";
    $('.questionBox').toggleClass('hidden');
    $('.answerBox').toggleClass('hidden');

    resultString = `
        <div class="answerDisplay">
            <h2 class="answerTitle `+ color +`">`+ replyString +`</h2>
            <p class="realAnswer">The correct answer is ` + correctAnswer +`</p>
            <img src="`+ incomingImg +`" alt="`+ incomingAlt +`">
            <div>
                <button class="btn nextQuestionBtn">Next</button>
            </div>
        </div>`;

    $('.answerBox').html(resultString);

    // call score function if answer is correct
    if(scoreBool){
        score();
    };
};

// function for checking if user answer is correct when submitted
function compareAnswer(){
    $('.questionBox').on('click', '.submitAnswerBtn', function(event){
        // grab value of user selection and set user answer to variable
        const userAnswer = $('input:checked').val();
        // compare user answer to correct answer
        if(userAnswer == null){
            // do not allow user to skip question
            alert('Please select an answer');
        } else if(userAnswer == incomingAnswer){
            // if user answer is right, hide questionBox, show answerBox, display correct answer text and question image, update score
            questionResult(incomingAnswer, 'You are correct!', true, "green");
        } else {
            // if user answer is wrong, hide questionBox, show answerBox, display wrong answer text and question image, update score
            questionResult(incomingAnswer, 'Sorry, that is incorrect', false, "red");
        };
    });
};

// function for moving to next question when next button clicked
function nextQuestion(){
    $('.answerBox').on('click', '.nextQuestionBtn', function(event){
        if(currentQuestionNum == 15){
            finalQuizResults();
        } else {
            // hide answerBox, show questionBox
            $('.answerBox').toggleClass('hidden');
            $('.questionBox').toggleClass('hidden');
            // call showQuestion
            showQuestion();
        };
    });
};

// function to generate html string for finalBox
function generateFinalScoreString(title, color, fscore, img, alt){
    let fullFinalString = "";
    fullFinalString = `
        <h2 class="finalTitle `+ color +`">`+ title +`</h2>
        <p class="finalScoreBox">`+ fscore +`</p>
        <img src="`+ img +`" alt="`+ alt +`">
        <div>
            <button class="btn restartBtn">Play Again?</button>
        </div>`;
    return fullFinalString;
};

// function to display final quiz results
function finalQuizResults(){
    // hide answerBox, show finalBox
    $('.answerBox').toggleClass('hidden');
    $('.finalBox').toggleClass('hidden');

    // calculate final score & create html string for final results
    let finalScore = ((scoreBoardNum/15) * 100).toFixed();
    let finalScoreString = "";
    if(finalScore >= 60){
        finalScoreString = generateFinalScoreString("Congratulations You Won!", "green", "You scored " + finalScore + "%", "images/gameover-winner.png", "man holding trophy on mountain");
    } else {
        finalScoreString = generateFinalScoreString("Sorry No Bueno!", "red", "You scored " + finalScore + "% whomp whomp", "images/gameover-lost.png", "cute baby crying");
    };
    
    // input finalScoreString into finalBox
    $('.finalBox').html(finalScoreString);
};

// function for restart game button
function restartGame(){
    console.log('restartGame running');
    $('.finalBox').on('click', '.restartBtn', function(event){
        location.reload();
    });
};

// on page load starter function
function startGame(){
    // listen for start button click
    $('main').on('click', '.startBtn', function(event){
        showQuestion();
        $('.starterBox').toggleClass('hidden');
        $('.questionBox').toggleClass('hidden');
    });
    
    compareAnswer();
    nextQuestion();
    restartGame();
};

$(startGame());
