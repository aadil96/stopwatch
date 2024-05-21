const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let minutesCounter = 0;
let secondsCounter = 0;
let interval;

stopBtn.disabled = true;
resetBtn.disabled = true;

// Toggle button action and change color accordingly
function switchBtn(btn, disabled = true) {
    btn.disabled = disabled;

    if (btn.disabled) {
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
    } else {
        btn.style.backgroundColor = "rgba(99, 102, 241, 1)";
        btn.style.color = "white";
    }
}

function startTimer() {
    switchBtn(startBtn);
    switchBtn(stopBtn, false);
    switchBtn(resetBtn, false);

    interval = setInterval(() => {
        secondsCounter++;
        if (secondsCounter === 60) {
            minutesCounter++;
            secondsCounter = 0;
        }

        minutesSpan.textContent = `${String(minutesCounter).padStart(2, 0)}`;
        secondsSpan.textContent = `${String(secondsCounter).padStart(2, 0)}`;
    }, 1000);
}

function pauseTimer() {
    switchBtn(stopBtn);
    switchBtn(startBtn, false);
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    switchBtn(startBtn, false);
    switchBtn(stopBtn);
    switchBtn(resetBtn);
    minutesCounter = 0;
    secondsCounter = 0;
    minutesSpan.textContent = "00";
    secondsSpan.textContent = "00";
}

startBtn.addEventListener("click", startTimer);

stopBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);
