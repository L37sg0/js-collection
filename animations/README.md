# Animations (`animations`)

A collection of experimental declarative **SVG animation** samples served via a minimal Node.js ESM static server, demonstrating native SMIL (Synchronized Multimedia Integration Language) animations, path morphing, timed sequences, and rotational transformations.

---

## Architecture & Core Features

* ✨ **Native SMIL Animation (`index.html`):**
* **Interactive Element Translation:** Features circles and rectangles responding to click events (`begin="click"`) using `` tags to shift coordinates (`cx`, `x`) dynamically.
* **Timed Sequences & Chaining:** Utilizes event-based offsets (e.g., `begin="right.begin+2s"`, `begin="circ.end-1.5s"`) to orchestrate multi-element choreography.
* **Complex Path Morphing & Rotational Patterns:** Employs `definitions with animated `d` attribute values and stroke width transitions, combined with radial` transformations (`transform="rotate(...)"`) to create complex geometric loader and visual effects.


* 🚀 **Static Node.js Server (`server.mjs`):**
* Serves the animation markup directly from the `public/` directory using modern ECMAScript Modules.



---

## Project Structure

```text
animations/
├── public/
│   └── index.html          # Main HTML document housing standalone SVG animation demos
├── README.md               # Project documentation
└── server.mjs              # Node.js static file server (ESM)

```

---

## Tech Stack & Libraries

* **Frontend:** HTML5, SVG (SMIL Animations)
* **Backend:** Node.js (ESM)
---
## Prerequisites

- Ensure you have Node.js installed on your machine.
---
## Running the Application

- Clone or place the project in your working directory.
- Start the server using Node.js:

```bash
node server.mjs
```
- Open your web browser and navigate to: http://localhost:3000