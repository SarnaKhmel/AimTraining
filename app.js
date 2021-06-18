const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeL = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

const colors = ['#7B241C', '#633974', '#1A5276', '#117864', '#F4D03F', '#FEFE00', '#FE0000']



startBtn.addEventListener('click', (event) => {

    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {

    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRanadomCicrcle()
    }
})



function startGame() {
    setInterval( decreaseTime, 1000)
    timeL.innerHTML = `00:${time}`
    createRanadomCicrcle()
    setTime(time)
}

function decreaseTime () {
    if(time === 0 ){
        finishGame()
    } else{
        let currentTime = --time;
        if (currentTime < 10) {
            currentTime = `0${currentTime}`
        }
        timeL.innerHTML = `00:${currentTime}`
        setTime(currentTime)
    }

    
}

function setTime(value){
    timeL.innerHTML = `00:${value}`
}

function finishGame() {
    // timeL.parentNode.remove()
    timeL.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your score: <span class="primary">${score}</span>.</h1>`
}

function createRanadomCicrcle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 100)
    const {width, height} = board.getBoundingClientRect()
    //console.log(qqq)
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    const color = getColor()
    circle.style.background = color;
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getColor(element) {
    return colors[Math.floor(Math.random() * colors.length)]
 }

 function winTheGame() {
        function kill() {
            const circle =  document.querySelector('.circle')
            if (circle){
                
                circle.click()
            }
        }
        setInterval(kill, 105)
 }