const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playThegame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playThegame = (human, machine) => {

    console.log('Humano: ' + human + " maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!&#128528"
        result.style.fontSize = "40px";
        result.style.color = "rgb(0,30,102)"
        if (window.innerWidth < 460) {
            result.style.fontSize = "20px"}
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "você ganhou!&#x1F601"
        result.style.fontSize = "40px"
        result.style.color = "rgb(204,170,0)"
        if (window.innerWidth < 768) {
            result.style.fontSize = "20px"}
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!&#128557"
        result.style.fontSize = "40px";
        result.style.color = "rgb(245,0,51)"
        if (window.innerWidth < 768) {
            result.style.fontSize = "20px"}
    }

}


// papel -> pedra ->tesoura



