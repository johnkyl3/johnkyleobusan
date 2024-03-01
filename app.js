let Questions = [
    {//1
    Question: "Which one is the first search engine in the Internet",
    Answer: [ 
        {text: "Google", correct: false},  
        {text: "Archie", correct: true},
        {text: "Altavista", correct: false},
        {text: "WAIS", correct: false},            
             ]
    },
    {//2
        Question: "Number of bit used by the IPv6 Address",
        Answer: [ 
            {text: "32 bit", correct: false},  
            {text: "64 bit", correct: false},
            {text: "128 bit", correct: true},
            {text: "256 bit", correct: false},            
                 ]
    },
    {//3
        Question: "First Computer Virus known as",
        Answer: [ 
            {text: "Rabbit", correct: false},  
            {text: "Creeper Virus", correct: true},
            {text: "Elk Cloner", correct: false},
            {text: "SCA Virus", correct: false},            
                 ]
    },
    {//4
        Question: "Which Programming Language is exclusively for Artificial Intelligence",
        Answer: [ 
            {text: "C", correct: false},  
            {text: "Java", correct: false},
            {text: "J2EE", correct: false},
            {text: "Prolog", correct: true},            
                 ]
    },
    {//5
        Question: "Firewall in Computer is used for?",
        Answer: [ 
            {text: "Security", correct: true},  
            {text: "Data Transmission", correct: false},
            {text: "Authentication", correct: false},
            {text: "Monitoring", correct: false},            
                 ]
    },
    {//6
        Question: "Which of the following is not an Operating System",
        Answer: [ 
            {text: "DOS", correct: false},  
            {text: "Mac", correct: false},
            {text: "C", correct: true},
            {text: "Linux", correct: false},            
                 ]
    },
    {//7
        Question: "Which of the following is not a Database Management Software",
        Answer: [ 
            {text: "MySQL", correct: false},  
            {text: "Oracle", correct: false},
            {text: "Sybase", correct: false},
            {text: "COBOL", correct: true},            
                 ]
    },
     {//8
        Question: "1024 bit is equal to how many byte",
        Answer: [ 
            {text: "1 byte", correct: false},  
            {text: "128 byte", correct: true},
            {text: "32 byte", correct: false},
            {text: "64 byte", correct: false},            
                 ]
    },
    {//9
        Question: "In computer world, Trojan refer to",
        Answer: [ 
            {text: "Virus", correct: false},  
            {text: "Malware", correct: true},
            {text: "Worn", correct: false},
            {text: "Spyware", correct: false},            
                 ]
    },
    {//10
        Question: "In computer world, Trojan refer to",
        Answer: [ 
            {text: "Virus", correct: false},  
            {text: "Malware", correct: true},
            {text: "Worn", correct: false},
            {text: "Spyware", correct: false},            
                 ]
    },

]

const QuestionsElement = document.getElementById("question");
const AnswerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0; 
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){

    resetState();
        //show question
    let currentQuestion = Questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    QuestionsElement.innerHTML = questionNumber + ". " + currentQuestion.Question;

        //show answer
    currentQuestion.Answer.forEach(Answer => {
        const button = document.createElement("button");
        button.innerHTML = Answer.text;
        button.classList.add("btn");
        AnswerButton.appendChild(button);

            //add correct
        if(Answer.correct){
            button.dataset.correct = Answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}
    //remove all the buttons
function  resetState(){
    nextButton.style.display = "none";
    while(AnswerButton.firstChild){
        AnswerButton.removeChild(AnswerButton.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }

        //disable the answer button after selecting answer
    Array.from(AnswerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < Questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

function  handleNextButton(){
    currentQuestionIndex ++
    if(currentQuestionIndex < Questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function  showScore(){
    resetState();
    QuestionsElement.innerHTML = `Your Score ${score}: out of ${Questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

    //display menu and playarea

    const playbutton = document.getElementById("buttonplay");
    const appMenu = document.querySelector(".appDisplay");
    const infoMenu = document.querySelector(".infoDisplay")

    playbutton.addEventListener('click', function (){
        appMenu.style.display = "block";
        infoMenu.style.display = "none";
    });

    const mainMenu = document.getElementById("mainMenu");

    mainMenu.addEventListener('click',function (){
        appMenu.style.display = "none";
        infoMenu.style.display = "flex";
        startQuiz();   
    });

    //How to play

    const guideDiv = document.querySelector(".guidehide")
    const helpbutton = document.getElementById("buttonhelp");
    helpbutton.addEventListener('click', function(){
        infoMenu.style.display = "none";
        guideDiv.style.display = "flex";      
    });


    const GuideBack = document.getElementById("back");

    GuideBack.addEventListener('click', function(){
        infoMenu.style.display = "flex";
        guideDiv.style.display = "none";    
    });

startQuiz();    