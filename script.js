let time = 25 * 60;

const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function createTask(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const left = document.createElement('div');
  left.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = taskText;

  checkbox.addEventListener('change', () => {
    span.classList.toggle('completed');
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(left);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();

  if (text === '') return;

  createTask(text);
  taskInput.value = '';
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});


const quotes = [
  'Discipline beats motivation.',
  'Focus on progress, not perfection.',
  'Consistency creates success.',
  'One hour of focus changes everything.',
  'Small steps every day win big.',
  'Deep work creates real results.'
];

const quoteText = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[random];
}

quoteBtn.addEventListener('click', generateQuote);

generateQuote();
