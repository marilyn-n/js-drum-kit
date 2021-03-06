let conuntdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const time = document.querySelectorAll('[data-time]');

const timer = (seconds) => {
    // clear any existing timers
    clearInterval(conuntdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    conuntdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if its done
        if (secondsLeft < 0) {
            clearInterval(conuntdown);
            return;
        }
        // display to the dom
        displayTimeLeft(secondsLeft);
    }, 1000);

}

const displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainSeconds = seconds % 60;
    const display = `${minutes}:${remainSeconds}`
    document.title = display;
    timerDisplay.textContent = `${minutes}:${remainSeconds < 10 ? '0': ''}${remainSeconds}`

}

const displayEndTime = (timestamp) => {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const adjustHour = hour > 12 ? hour - 12 : hour;
    endTime.textContent = `Be back at ${adjustHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

[...time].map(item => item.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})