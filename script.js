let time = 25 * 60;
  timerDisplay.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (timerRunning) return;

  timerRunning = true;

  interval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimer();
    } else {
      clearInterval(interval);
      timerRunning = false;
      alert("Session Complete! Take a break.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(interval);
  timerRunning = false;
  time = 25 * 60;
  updateTimer();
}

updateTimer();


function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (!taskText) return;

  const li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <button class="delete-btn">Delete</button>
  `;

  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}


const quotes = [
  "Small progress is still progress.",
  "Focus on the task, not the noise.",
  "Discipline beats motivation.",
  "One focused hour can change everything.",
  "Done is better than perfect.",
  "Consistency creates results."
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

newQuote();
