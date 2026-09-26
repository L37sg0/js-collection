# Grids (`grids`)

A lightweight CSS Grid layout experiment and prototype served via a minimal Node.js ESM server (`server.mjs`), designed to practice and explore CSS Grid areas, explicit column/row sizing, and gap properties.

---

## Architecture & Core Features

* 📐 **CSS Grid Layout:**
* Implements a custom 4-column, 3-row grid container (`.container`) utilizing named grid template areas (`header`, `main`, `sidebar`, and `footer`).
* Explores fractional and fixed sizing (`grid-template-columns`, `grid-template-rows`) alongside grid gaps.


* 🚀 **Static Node.js Server (`server.mjs`):**
* Serves the frontend assets directly from the `public/` directory using modern ECMAScript Modules.



---

## Project Structure

```text
grids/
├── public/
│   ├── index.html          # Main HTML markup containing the grid structure
│   └── style.css           # CSS stylesheet configuring grid areas and styling
├── README.md               # Project documentation
└── server.mjs              # Node.js static file server (ESM)

```

---

## Tech Stack & Libraries

* **Frontend:** HTML5, CSS3 (CSS Grid)
* **Backend:** Node.js (ESM)
## Prerequisites

Ensure you have Node.js installed on your machine.
---
## Running the Application

- Clone or place the project in your working directory.
- Start the server using Node.js:

```bash
node server.mjs
```
- Open your web browser and navigate to: http://localhost:3000