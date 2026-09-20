# Questions
A simple, lightweight web-based quiz game built with vanilla JavaScript, HTML, and CSS, served via a minimal native Node.js HTTP server.
---
## Features

- **Multiple Categories:** Test your knowledge across topics like Animals, Countries, Earth, People, Space, and the Sea.
- **Live Clock & Date:** Real-time watch script integrated into the UI.
- **Scoring System:** Earn points for correct answers and lose points for incorrect ones based on the built-in game rules.
- **Zero Dependencies:** No external frameworks or package dependencies required—runs on pure vanilla web tech and Node.js built-in modules.
---
## Project Structure

```text
questions-app/
├── server.mjs         # Lightweight native Node.js static file server
└── public/            # Static assets and game files
    ├── index.html     # Home page / Rules
    ├── quest.html     # Category selection menu
    ├── style.css      # Global styles
    ├── watch.js       # Live clock script
    ├── animals.html   # Category-specific quiz pages
    ├── animals.js     # Questions and game logic for categories
    └── ...            # Other HTML, JS, and image assets
```
---
## Rules

- Each question has three possible answers.
- Only one answer is correct per question.
- Every correct answer awards +2 points.
- Every incorrect answer deducts -1 point.
---
## Prerequisites

Make sure you have Node.js installed on your machine.
---
## Running the App

- Clone or place the project in your working directory.
- Start the server using Node.js:
```bash
node server.mjs
```