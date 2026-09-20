# JavaScript & Web Projects Collection

A curated collection of legacy and modernized personal web applications, games, utilities, and portfolio sites built over the years using vanilla JavaScript, Python automation scripts, HTML5 Canvas, and the Phaser framework.
---
## Repository Structure

The repository is organized into independent, self-contained web projects, each served via a minimal native Node.js HTTP server:

```text
js-collection/
├── dicesGame/            # HTML5 Canvas implementation of the classic Craps dice game with sound effects
├── l37sg0.github.io/     # Historical personal portfolio site featuring a Python-based CMS script
├── questions-app/        # Interactive multi-category quiz game with trivia modules
├── rtmviewer/            # Real-time IoT/SCADA monitoring dashboard for remote wind parks
├── smetki-app/           # Personal finance manager calculating daily allowances and savings targets
└── spaceships-game/      # Arcade-style space shooter built with Phaser and Facebook Instant Games SDK
```
---
## Projects Overview

- Dices Game (dicesGame/)
    - Description: A browser-based implementation of the classic dice game Craps.
    - Tech Stack: HTML5 Canvas, Vanilla JavaScript, CSS3.
    - Features: Custom 3D-styled dice rendering, audio feedback for roll actions, and strict adherence to official craps rules (first throw outcomes and follow-up points).
- Personal Portfolio (l37sg0.github.io/)
    - Description: A historical personal website and blog platform.
    - Tech Stack: HTML, CSS, JavaScript (AJAX/XHR), Python (Tkinter & HTTP server).
    - Features: Built alongside a desktop companion tool (article-writer.py) used to generate JSON-backed articles and manage local media assets.
- Questions App (questions-app/)
    - Description: A lightweight educational quiz application.
    - Tech Stack: Vanilla JavaScript, HTML5, CSS3.
    - Features: Multiple distinct topic categories (Animals, Countries, Earth, Space, etc.), automated score evaluation, and integrated UI clocks.
- RTMViewer (rtmviewer/)
    - Description: An industrial SCADA-style monitoring dashboard tracking remote hardware metrics.
    - Tech Stack: HTML5, Bootstrap 4, Vanilla JavaScript (Fetch API & WebSockets).
    - Features: Real-time telemetry tracking for wind parks, displaying active/reactive power, power factor ($\cos \varphi$), phase voltages, and dynamic visual status alerts.
- Smetki App (smetki-app/)
    - Description: A personal finance and budget planning organizer.
    - Tech Stack: Vanilla JavaScript, HTML5, CSS.
    - Features: Dynamic addition of income sources and fixed costs, automated savings distribution, and daily budget calculations.
- Spaceships Game (spaceships-game/)
    - Description: A full-featured arcade space shooter.
    - Tech Stack: Phaser Framework, JavaScript, HTML5.
    - Features: Multi-level alien waves, boss battles, hangar ship upgrades, power-ups, and Facebook Instant Games SDK integration with local testing mocks.
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