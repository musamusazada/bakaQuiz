const quizCard = document.querySelector(".quizCard");

const question_1 = document.createElement('div');
question_1.classList.add('question');
question_1.innerHTML = `<h3>You are gonna fight,choose your jutsu!</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_1_options" id="a1" value="1"> <label for="a1">Rasengan</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_1_options" id="a2" value="2"> <label for="a2">Primary Lotus</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_1_options" id="a3" value="3"> <label for="a3">Chidori</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_1_options" id="a4" value="4"> <label for="a4">Shadow Possession</label>
                        </div>
                        </div>
                        </form>

                        `;


const question_2 = document.createElement('div');
question_2.classList.add('question');
question_2.innerHTML = `<h3>What helps more to win a fight?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_2_options" id="b1" value="1"> <label for="b1">Friends</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_2_options" id="b2" value="2"> <label for="b2">Power</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_2_options" id="b3" value="3"> <label for="b3">Intelligence</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_2_options" id="b4" value="4"> <label for="b4">Strategy</label>
                        </div>
                        </div>
                        </form>

                        `;

const question_3 = document.createElement('div');
question_3.classList.add('question');
question_3.innerHTML = `<h3>Who is your sensei?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_3_options" id="c1" value="1"> <label for="c1">Jiraiya</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_3_options" id="c2" value="2"> <label for="c2">Gai</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_3_options" id="c3" value="3"> <label for="c3">Orochimaru</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_3_options" id="c4" value="4"> <label for="c4">Asuma</label>
                        </div>
                        </div>
                        </form>
                        `;


const question_4 = document.createElement('div');
question_4.classList.add('question');
question_4.innerHTML = `<h3>What would you eat?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_4_options" id="d1" value="1"> <label for="d1">Ramen</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_4_options" id="d2" value="2"> <label for="d2">Mackerel</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_4_options" id="d3" value="3"> <label for="d3">Onigiri</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_4_options" id="d4" value="4"> <label for="d4">Curry</label>
                        </div>
                        </div>
                        </form>
                        `;

const question_5 = document.createElement('div');
question_5.classList.add('question');
question_5.innerHTML = `<h3>What is you favorite color?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_5_options" id="e1" value="1"> <label for="e1">Orange</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_5_options" id="e2" value="2"> <label for="e2">Green</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_5_options" id="e3" value="3"> <label for="e3">Blue</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_5_options" id="e4" value="4"> <label for="e4">Gray</label>
                        </div>
                        </div>
                        </form>
                        `;

const question_6 = document.createElement('div');
question_6.classList.add('question');
question_6.innerHTML = `<h3>How your classmates describe you?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_6_options" id="f1" value="1"> <label for="f1">Funny</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_6_options" id="f2" value="2"> <label for="f2">Hardworking</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_6_options" id="f3" value="3"> <label for="f3">Cool</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_6_options" id="f4" value="4"> <label for="f4">Lazy</label>
                        </div>
                        </div>
                        </form>
                        `;

const question_7 = document.createElement('div');
question_7.classList.add('question');
question_7.innerHTML = `<h3>What is your eye color?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_7_options" id="g1" value="1"> <label for="g1">Blue</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_7_options" id="g2" value="2"> <label for="g2">Green</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_7_options" id="g3" value="3"> <label for="g3">Black</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_7_options" id="g4" value="4"> <label for="g4">Brown</label>
                        </div>
                        </div>
                        </form>
                        `;

const question_8 = document.createElement('div');
question_8.classList.add('question');
question_8.innerHTML = `<h3>Your favorite line?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_8_options" id="h1" value="1"> <label for="h1">Ore no Nindou Da</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_8_options" id="h2" value="2"> <label for="h2">Senshou no Powa</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_8_options" id="h3" value="3"> <label for="h3">Usuratonkachi</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_8_options" id="h4" value="4"> <label for="h4">Mendokusai</label>
                        </div>
                        </div>
                        </form>
                        `;


const question_9 = document.createElement('div');
question_9.classList.add('question');
question_9.innerHTML = `<h3>What do you do if your friend gets into fight at the bar?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_9_options" id="j1" value="1"> <label for="j1">Try to stop them</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_9_options" id="j2" value="2"> <label for="j2">Beat all of them</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_9_options" id="j3" value="3"> <label for="j3">I would be too drunk and fall asleep already</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_9_options" id="j4" value="4"> <label for="j4">I don\'t care. I\'m too lazy for that.</label>
                        </div>
                        </div>
                        </form>
                        `;

const question_10 = document.createElement('div');
question_10.classList.add('question');
question_10.innerHTML = `<h3>How many hours do you sleep in a day?</h3>
                        <form>
                        <div class="option__container">
                        <div class="option__item">
                        <input type="radio" name="q_10_options" id="k1" value="1"> <label for="k1">10-12 hours</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_10_options" id="k2" value="2"> <label for="k2">8-10 hours</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_10_options" id="k3" value="3"> <label for="k3">less than 8 hours</label>
                        </div>
                        <div class="option__item">
                        <input type="radio" name="q_10_options" id="k4" value="4"> <label for="k4">more than 12 hours</label>
                        </div>
                        </div>
                        </form>
                        <button id="result" onclick="result()">Find Who You Are!</button>
                        `;

const nextButton = document.createElement('button');
nextButton.classList.add('nextButton');
nextButton.innerText = "Next"
nextButton.onclick = nextQuestion;
const prevButton = document.createElement('button');
prevButton.classList.add('prevButton');
prevButton.innerText = "Previous"
prevButton.onclick = prevQuestion;

let counter = 0;
const questionArray = [question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10]


function openCard() {
    document.querySelectorAll(".quizMenuItem").forEach(item => item.style.display = 'none');
    document.querySelector(".quizCard").style.display = 'flex';
}


function onStart() {
    document.querySelector('.startButtonQuiz').remove();
    quizCard.appendChild(question_1);
    quizCard.appendChild(nextButton);
    quizCard.appendChild(prevButton);

}

function nextQuestion() {
    counter++;

    if (counter > 0 && counter < 10) {

        if (document.querySelector('div[class*=question]')) {
            document.querySelectorAll('div[class*=question]').forEach(item => item.style.display = 'none');
            quizCard.appendChild(questionArray[counter]);
            questionArray[counter].style.display = 'flex';

        }
    } else {
        counter = 9;
    }

}

function prevQuestion() {
    counter--;

    if (counter >= 0) {
        if (document.querySelector('div[class*=question]')) {
            document.querySelectorAll('div[class*=question]').forEach(item => item.style.display = 'none');
            quizCard.appendChild(questionArray[counter]);
            questionArray[counter].style.display = 'flex';
        }
    } else {
        counter = 0;
    }
}

let imgArray = ["./assets/img/UZUMAKI_NARUTO.png", "./assets/img/ROCK_LEE.png", "./assets/img/UCHIHA_SASUKE.png", "./assets/img/NARA_SHIKAMARU.png"]

function result() {
    let resultDiv = document.createElement("div");
    resultDiv.classList.add("result__page");


    let resultScore = 0;
    let valueArr = document.querySelectorAll('input[type="radio"]:checked');
    valueArr.forEach(item => resultScore += Number(item.value));
    if (document.querySelector('div[class*=question]')) {
        document.querySelectorAll('div[class*=question]').forEach(item => item.remove());
        quizCard.appendChild(resultDiv);
    }
    console.log(resultScore)
    if (resultScore >= 10 && resultScore <= 17) {

        resultDiv.innerHTML = ` <div class="img-box">
                                <img src="${imgArray[0]}">
                                </div>`;

    } else if (resultScore >= 18 && resultScore <= 25) {

        resultDiv.innerHTML = ` <div class="img-box">
                                <img src="${imgArray[1]}">
                                </div>`;

    } else if (resultScore >= 26 && resultScore <= 33) {

        resultDiv.innerHTML = ` <div class="img-box">
                                <img src="${imgArray[2]}">
                                </div>`;

    } else if (resultScore >= 34 && resultScore <= 40) {

        resultDiv.innerHTML = ` <div class="img-box">
                                <img src="${imgArray[3]}">
                                </div>`;

    } else {
        console.log('Dattebayo bakaaaaaa')
    }

}