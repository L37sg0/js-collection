# Dices Game

A browser-based implementation of the classic dice game **Craps**, built using HTML5 Canvas, vanilla JavaScript, and CSS. The game features animated dice rendering, sound effects, and strict adherence to standard craps rules.
---
## Game Rules

- **First Throw:**
  - Rolling a **7** or **11** results in an immediate **Win**.
  - Rolling a **2**, **3**, or **12** (Craps) results in an immediate **Loss**.
  - Any other number (**4, 5, 6, 8, 9, 10**) becomes the player's **Point**, and follow-up throws are required.
- **Follow-Up Throws (Up to 3 turns max):**
  - Rolling a **7** results in a **Loss**.
  - Matching the player's **Point** results in a **Win**.
  - The game continues until a win/loss condition is met or turns run out.
---
## Features

- 🎲 **HTML5 Canvas Rendering:** Dynamically draws custom 3D-styled dice faces and pdots (1 through 6) using custom drawing routines.
- **Audio Integration:** Plays a rolling dice sound effect on each throw.
- **Responsive UI Elements:** Features custom styled buttons and dynamic score/status tracking directly on screen.
- **Zero Dependencies:** Pure frontend vanilla implementation running smoothly on any modern browser via a lightweight HTTP server.
---
## Project Structure

```text
dicesGame/
├── server.mjs         # Lightweight native Node.js static file server
├── public/            # Static assets and game code
│   ├── index.html     # Game canvas and UI layout
│   ├── img/
│   │   └── dices.jpg  # Background image asset
│   ├── js/
│   │   └── dices.js   # Game logic, rendering loop, and rules engine
│   └── sounds/
│       └── dice.WAV   # Dice rolling sound effect
├── rules.md           # Original game rules documentation
└── README.md
```
---
## Prerequisites

Make sure you have Node.js installed on your machine.

---
## Running the Application

- Clone or place the project in your working directory.
- Start the server using Node.js:

```bash
node server.mjs
```
- Open your web browser and navigate to: http://localhost:3000