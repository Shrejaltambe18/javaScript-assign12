const max = 6;
const min = 1;

function roll() {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    const diceElement = document.getElementById("dice");
    if (randomNumber == 1) {
        diceElement.src = "./images/one.png";
    }
    else if (randomNumber == 2) {
        diceElement.src = "./images/two.png";
    }
    else if (randomNumber == 3) {
        diceElement.src = "./images/three.png";
    }
    else if (randomNumber == 4) {
        diceElement.src = "./images/four.png";
    }
    else if (randomNumber == 5) {
        diceElement.src = "./images/five.png";
    }
    else if (randomNumber == 6) {
        diceElement.src = "./images/six.png";
    }
}