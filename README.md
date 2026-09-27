# JavaScript & Web Projects Collection

A curated collection of legacy and modernized personal web applications, games, utilities, and portfolio sites built over the years using vanilla JavaScript, Python automation scripts, HTML5 Canvas, and the Phaser framework.

---

## Repository Structure & Projects

| Project Name | Description | Tech Stack | Quick Run Command |
| --- | --- | --- | --- |
| **`animations/`** | Declarative **SVG animation** samples demonstrating native SMIL animations, path morphing, timed sequences, and transformations. | HTML5, SVG (SMIL), Node.js | `node server.mjs` |
| **`dicesGame/`** | A browser-based implementation of the classic dice game **Craps** featuring HTML5 Canvas rendering and sound effects. | HTML5 Canvas, Vanilla JS, CSS | `node server.mjs` |
| **`FileUploader/`** | A modular jQuery plugin for multi-file drag-and-drop uploads with real-time progress tracking and dynamic file type icons. | jQuery, jQuery UI, HTML5 FormData | `npm install && npm run build && node server.mjs` |
| **`FixedSidebar/`** | A lightweight jQuery script/plugin for responsive multi-section layouts featuring sticky positioning and smooth anchor scrolling. | jQuery, HTML5, CSS3 | `npm start` |
| **`grids/`** | A lightweight CSS Grid layout experiment exploring named grid template areas (`header`, `main`, `sidebar`, `footer`). | HTML5, CSS3 Grid | `node server.mjs` |
| **`InteractiveGoogleMap/`** | A logistics moving calculator integrating Google Maps API, geocoding, and distance matrix quote estimations. | Google Maps API, jQuery, jQuery UI | `npm start` |
| **`questions-app/`** | A web-based quiz game spanning multiple knowledge categories equipped with live clocks and score tracking. | Vanilla JS, HTML5, CSS3 | `node server.mjs` |
| **`rtmviewer/`** | A real-time monitoring dashboard tracking electrical telemetry and power parameters from remote wind parks (SCADA / RTM). | Bootstrap, Vanilla JS, WebSockets | `node server.mjs` |
| **`SlidingPuzzle/`** | An interactive puzzle game where users slide image tiles across a grid to complete pictures, tracked via `localStorage`. | jQuery, jQuery UI, HTML5 | `npm start` |
| **`smetki-app/`** | A personal finance and budget calculator distributing income across savings, daily allowances, and credit estimates. | Vanilla JS, HTML5, CSS3 | `node server.mjs` |
| **`spaceships-game/`** | An arcade-style space shooter game with boss battles, ship upgrades, hangar menus, and Facebook Instant Games SDK mocks. | Phaser Engine, JavaScript, HTML5 | `node server.mjs` |

---
## Local Development
- All projects within this collection have been standardized to run on a minimal, zero-dependency native Node.js HTTP server (server.mjs) located in each project root.
- To run any project:Navigate into the specific project directory:
```bash
cd <project-folder>
```
Start the local static server:
```bash
node server.mjs
```
- Open your browser and access: http://localhost:3000
---
## License
This repository is open-source and available under the terms of the LICENSE.