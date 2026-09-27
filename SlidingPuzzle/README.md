# Sliding Puzzle Widget (`SlidingPuzzle`)

A interactive **jQuery & jQuery UI puzzle game** built as a sliding tile grid where players rearrange scattered image fragments onto a container board to complete the original picture, tracked with real-time timers and persistent local storage best times.

---

## Architecture & Core Features

* 🧩 **Dynamic Grid Generation (`sliding-puzzle.js`):**
    * Parses aspect ratios (`3:3`), computes individual piece dimensions dynamically based on base image width/height, and slices source images into absolute-positioned coordinate tiles using background positioning rules.
    * Eliminates the initial top-left piece to create a blank sliding slot.


* 🖱️ **Draggable Interaction & Axis Restriction:**
    * Utilizes **jQuery UI Draggable** with strict containment rules and alignment grids (`grid: [pieceW, pieceH]`).
    * Enforces orthogonal movement restrictions dynamically (pieces only slide horizontally or vertically into the adjacent empty cell).


* ⏱️ **Game State & Local Storage Tracking:**
    * Validates complete puzzle alignment upon drag completion events.
    * Records completion times and maintains personal best scores persistently using browser `localStorage`.



---

## Project Structure

```text
SlidingPuzzle/
├── node_modules/           # External dependencies (jQuery, jQuery UI)
├── public/
│   ├── css/
│   │   └── sliding-puzzle.css # Board container, figure grid, and UI element styles
│   ├── img/
│   │   ├── sliding.puzzle.girl.jpg # Alternate puzzle source image
│   │   └── space-girl-vera.jpg     # Default active puzzle source image
│   ├── index.html             # Game layout container markup
│   └── js/
│       └── sliding-puzzle.js  # Core game logic, slicing, shuffling, and win check
├── package.json            # Project build scripts and dependencies
├── README.md               # Project documentation
└── server.mjs              # Static Node.js server (ESM)

```

---


## Tech Stack & Dependencies

* **Frontend:** HTML5, CSS3, JavaScript (ES6+), **jQuery 3.6+**, **jQuery UI 1.14+**
* **Backend:** Node.js (ESM Static Server)
---
## Prerequisites

- Ensure you have Node.js installed on your machine.

---
## Running the Application

- Clone or place the project in your working directory.
- Start the server using Node.js:

```bash
npm start
```
- Open your web browser and navigate to: http://localhost:3000