const questions = [{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the first book of the Old Testament?","correct_answer":"Genesis","incorrect_answers":["Exodus","Leviticus","Numbers"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Area 51 is located in which US state?","correct_answer":"Nevada","incorrect_answers":["Arizona","New Mexico","Utah"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the largest organ of the human body?","correct_answer":"Skin","incorrect_answers":["Heart","large Intestine","Liver"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What alcoholic drink is made from molasses?","correct_answer":"Rum","incorrect_answers":["Gin","Vodka","Whisky"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which sign of the zodiac comes between Virgo and Scorpio?","correct_answer":"Libra","incorrect_answers":["Gemini","Taurus","Capricorn"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"If you are caught Goldbricking, what are you doing wrong?","correct_answer":"Slacking","incorrect_answers":["Smoking","Stealing","Cheating"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the name of NASA's most famous space telescope?","correct_answer":"Hubble Space Telescope","incorrect_answers":["Big Eye","Death Star","Millenium Falcon"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"The Canadian $1 coin is colloquially known as a what?","correct_answer":"Loonie","incorrect_answers":["Boolie","Foolie","Moodie"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"The drug cartel run by Pablo Escobar originated in which South American city?","correct_answer":"Medelliacute","incorrect_answers":["Bogota cute;","Quito","Cali"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"In aerodynamics, which force pushes an object upwards?","correct_answer":"Lift","incorrect_answers":["Drag","Weight","Thrust"]}];

const startButton = document.getElementById('startButton')
const refreshButton = document.getElementById('refreshButton')
const questionContainer = document.getElementById('questionContainer')
const questionText = document.getElementById('question')
const answerButtons = document.getElementById('answerButtons')
const pageText = document.getElementById('page')

var randomQuestions, currentIndex

startButton.addEventListener('click', StartQuiz)
const questionAmount = questions.length
let correctAmount = 0

function StartQuiz(){
    console.log(questions.length)
    startButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentIndex
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion(){
    resetScreen()
    if (currentIndex == null){
        currentIndex = 0;
    }
    else{
        currentIndex = currentIndex+1
    }
    pageText.innerText = (currentIndex+1) + "/" + questionAmount
    showQuestion(randomQuestions[currentIndex])
}

function showQuestion(question){
    questionText.innerText = randomQuestions[currentIndex].question
    let showed = 0
    let correctIndex = Math.floor(Math.random() * 4);
    for (let i = 0; i < 4; i++){
        const button = document.createElement('button')
        if (i == correctIndex){
            showed = 1;
            button.innerText = question.correct_answer
        }
        else{
            button.innerText = question.incorrect_answers[i-showed]
        }
        button.classList.add('button')
        answerButtons.appendChild(button)
        button.addEventListener('click', selectAnswer)
    }
}

function addCorect(){
    
}

function selectAnswer(e){
    if(e.target.innerText == randomQuestions[currentIndex].correct_answer){
        console.log("Correct")
        correctAmount = correctAmount+1
    }
    else{
        console.log("Incorrect")
    }

    if (currentIndex+1 != questionAmount){
        nextQuestion()
    }
    else{
        finalScreen()
    }
    
}

function resetScreen(){
    while (answerButtons.firstChild){
        answerButtons.removeChild (answerButtons.firstChild)
    }
}

//Question text is reused for final message
function finalScreen(){
    resetScreen()
    questionText.classList.add('removeBorder')
    pageText.classList.add('hide')
    questionText.innerText = "Congratulations, you answered " + correctAmount + "/" + questionAmount + " questions correcty."
    refreshButton.classList.remove('hide')
}