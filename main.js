const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    GameArea = document.querySelector('.GameArea'),
    car = document.createElement('div');
    
car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);


const keys = {
    w: false,
    s: false,
    d: false,
    a: false
};

const setting = {
    start: false,
    score: 0,
    speed: 3
};

function startGame() {
    start.classList.add('hide')
    setting.start = true;
    GameArea.appendChild(car);
    requestAnimationFrame(playGame);
};

function playGame() {
    console.log('Play Game!');
    if (setting.start) {
        requestAnimationFrame(playGame);
    }
};

function startRun(event) {
    event.preventDefault();
    keys[event.key] = true;
};

function stopRun(event) {
    event.preventDefault();
    keys[event.key] = false;
};

