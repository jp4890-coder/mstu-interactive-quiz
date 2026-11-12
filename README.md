# Interactive Web Fundamentals

A collaborative HTML, CSS, and JavaScript quiz for MSTU 5003 / 5013.
Working topic: the concepts we learn while building interactive web experiences.
The group can refine this topic together.

## Current status

First turn: the starter page and one question are ready. Each teammate should add
at least one question in their own turn. Reach at least three questions before
the final review and publication. No teammate contributions are claimed here.

Open `index.html` in a browser. No installation or build step is required.

## Your turn on main

Accept the repository invitation, then clone the repository from its GitHub page.
Before every turn:

```sh
git switch main
git pull --ff-only origin main
```

Append one object to `questions.js`, using this shape (the answer index starts at 0):

```js
{
  id: "unique-question-id",
  author: "your-github-username",
  topic: "Events",
  question: "Write your question here",
  choices: ["Option A", "Option B", "Option C"],
  correctAnswer: 0,
  explanation: "Explain why option A is correct."
}
```

Separate objects with commas. Choose an unambiguous question and check its answer.
Possible syllabus topics: computational thinking, variables and state, conditionals,
loops, functions, events, arrays and objects, and responsive design.

Review and test in a browser: no selection, right and wrong answers, next question,
final score, restart, and keyboard navigation. Then:

```sh
git add questions.js
git commit -m "Add my quiz question"
git push origin main
```

Let the next teammate know it is their turn. If your push is rejected, pull and
resolve the changes with your group; do not force-push over a teammate's work.

## Final review and GitHub Pages

After everyone contributes, pull the latest main and review all questions together.
Confirm at least three questions and one contribution from every teammate.
The repository owner can publish under **Settings → Pages → Deploy from a branch**,
select **main** and **/ (root)**, then save. Share the URL GitHub shows after deployment.

## Activity features

- Questions, choices, correct answers, and explanations in an array of objects.
- Three event listeners: submit an answer, advance, restart.
- Functions, loops, and conditionals render questions and check answers.
- Answer explanations, live feedback, progress, final score, and restart.
- Native radio controls, keyboard support, visible focus, responsive layout.

## Sources and AI assistance

Topic selection follows the supplied Fall 2026 MSTU 5003 / 5013 syllabus, particularly
HTML/CSS, interactivity, and data structures. The first question tests a foundational
web concept; the syllabus is a topic guide, not a record of particular class examples.
Codex assisted with the starter implementation and first draft question. The group
should review the code and question, and document its own decisions and tests.
The syllabus itself is not included in this repository.
