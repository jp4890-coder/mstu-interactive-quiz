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
    id: "html-label-input-association",
    author: "vic2521686226",
    topic: "HTML form labels",
    question: 'A form has <label for="email">Email address</label> and <input id="contact" name="email" type="email">. Which change makes clicking the label focus the input while keeping the field’s submission key?',
    choices: [
      'Change the label to for="contact".',
      'Change the input to name="contact".',
      'Add class="email" to the input.'
    ],
    correctAnswer: 0,
    explanation: "A label’s for attribute must match the input’s id. The name attribute sets the key used when the form is submitted."
  }
];
