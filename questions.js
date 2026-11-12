// Each teammate: append one object to this array. correctAnswer is zero-based.
// Use your own GitHub username for author. Keep each question's id unique.
const questions = [
  {
    id: "html-css-js-roles",
    author: "jp4890-coder",
    topic: "HTML, CSS, and JavaScript",
    question: "You are building a quiz. Which combination correctly describes each language's role?",
    choices: [
      "HTML checks answers, CSS stores scores, and JavaScript creates headings.",
      "HTML structures the content, CSS styles the page, and JavaScript responds to actions.",
      "HTML styles the buttons, CSS handles clicks, and JavaScript sets the page structure."
    ],
    correctAnswer: 1,
    explanation: "HTML gives the quiz its structure, CSS controls its appearance, and JavaScript handles behavior such as checking answers when a user submits the form."
  },
  {
    id: "javascript-event-listener",
    author: "xy2742-sys",
    topic: "JavaScript events",
    question: "When a user clicks a button, what does an event listener do?",
    choices: [
      "It waits for the specified event and runs a function when that event occurs.",
      "It changes the button into a form automatically.",
      "It prevents the browser from loading any JavaScript on the page."
    ],
    correctAnswer: 0,
    explanation: "An event listener registers a function to run in response to an event, such as a click, key press, or form submission."
  },
  {
    id: "quiz-progress-derived-state",
    author: "vic2521686226",
    topic: "Data, Variables, and State",
    question: "A quiz displays the percentage of questions answered. How can it keep that percentage accurate as the answered count changes?",
    choices: [
      "Calculate the percentage when the quiz starts and reuse that value.",
      "Store a separate percentage and increase it by one after each answer.",
      "Calculate (answered count / total questions) × 100 each time the progress display updates."
    ],
    correctAnswer: 2,
    explanation: "The percentage is derived from the answered count and the total number of questions. Recalculating it when the display updates uses the latest count. For example, 3 answers out of 4 questions gives 75%."
  }
];
