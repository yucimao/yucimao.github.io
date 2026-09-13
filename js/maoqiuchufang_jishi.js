const timerEl = document.getElementById('timer');
const audio = document.getElementById('audio');
const buttons = document.querySelectorAll('.time-btn[data-second]');
const stopBtn = document.getElementById('stopBtn');
let timerId = null;

function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function startCount(totalSec) {
    clearInterval(timerId);
    audio.pause();
    audio.currentTime = 0;

    let remain = totalSec;
    timerEl.textContent = formatTime(remain);
    buttons.forEach(b => b.disabled = true);

    timerId = setInterval(() => {
        remain--;
        timerEl.textContent = formatTime(remain);
        if (remain <= 0) {
            clearInterval(timerId);
            timerEl.textContent = "时间到！";
            audio.play();
            buttons.forEach(b => b.disabled = false);
        }
    }, 1000);
}

function stopAll() {
    clearInterval(timerId);
    audio.pause();
    audio.currentTime = 0;
    timerEl.textContent = "00:00";
    buttons.forEach(b => b.disabled = false);
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const s = Number(btn.dataset.second);
        startCount(s);
    })
})
stopBtn.addEventListener('click', stopAll);