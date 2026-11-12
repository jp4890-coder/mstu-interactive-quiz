const form = document.querySelector('#quiz-form');
const choices = document.querySelector('#choices');
const feedback = document.querySelector('#feedback');
const next = document.querySelector('#next');
const restart = document.querySelector('#restart');
const check = document.querySelector('#check');
const question = document.querySelector('#question');
const progress = document.querySelector('#progress');
const meter = document.querySelector('#meter');
let index = 0;
let score = 0;
let answered = false;

function showQuestion() {
  answered = false;
  const current = questions[index];
  form.hidden = false;
  next.hidden = true;
  restart.hidden = true;
  check.disabled = false;
  feedback.textContent = '';
  progress.textContent = `Question ${index + 1} of ${questions.length} · ${current.topic}`;
  meter.max = questions.length;
  meter.value = index;
  question.textContent = current.question;
  choices.replaceChildren();
  current.choices.forEach((choice, choiceIndex) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = choiceIndex;
    const text = document.createElement('span');
    text.textContent = choice;
    label.append(input, text);
    choices.append(label);
  });
}

// Listener 1: checking an answer also works with keyboard form submission.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (answered) return;
  const selected = form.querySelector('input:checked');
  if (!selected) {
    feedback.textContent = 'Choose an answer first.';
    return;
  }
  answered = true;
  const current = questions[index];
  const correct = Number(selected.value) === current.correctAnswer;
  if (correct) score += 1;
  feedback.textContent = `${correct ? '✓ Correct!' : '↗ Keep learning! Correct answer: ' + current.choices[current.correctAnswer]} ${current.explanation}`;
  form.querySelectorAll('input').forEach(input => { input.disabled = true; });
  check.disabled = true;
  meter.value = index + 1;
  next.textContent = index === questions.length - 1 ? 'See results →' : 'Next question →';
  next.hidden = false;
  next.focus();
});

// Listener 2: advance once, then display a score based on the array's length.
next.addEventListener('click', () => {
  index += 1;
  if (index < questions.length) {
    showQuestion();
    choices.querySelector('input').focus();
  } else {
    form.hidden = true;
    next.hidden = true;
    progress.textContent = 'Quiz complete';
    feedback.textContent = `You scored ${score} out of ${questions.length}. ${score === questions.length ? 'Great work!' : 'Try again to practice what you learned.'}`;
    restart.hidden = false;
    restart.focus();
  }
});

// Listener 3: reset every piece of quiz state for a fresh attempt.
restart.addEventListener('click', () => {
  index = 0;
  score = 0;
  showQuestion();
  choices.querySelector('input').focus();
});

showQuestion();
