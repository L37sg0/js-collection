# Fixed Sidebar Widget (FixedSidebar)

A lightweight jQuery plugin/script designed for creating responsive multi-section layout pages with an intelligent sticky/fixed sidebar (aside), smooth animated anchor scrolling, hash routing management, and responsive window resizing support.

---

## Architecture & Core Features

* **Sticky / Fixed Positioning (fixed-sidebar.js):**
    * Detects initial layout coordinates and converts the sidebar to position fixed dynamically upon the first page scroll.
    * Persists exact element dimensions and calculates offset coordinates precisely to prevent layout shifts.


* **Smooth Scrolling & Hash Management:**
    * Intercepts sidebar navigation clicks (aside a), prevents default jump behavior, and triggers smooth animated vertical page scrolling.
    * Synchronizes browser URL hashes (#partN) cleanly without abrupt window jumps.


* **Responsive Resize & Fluid Adaptation:**
    * Listens to window resize events, recalculating percentage widths and relative wrapper offsets to keep the fixed sidebar aligned within fluid grid structures.


* **Deep Linking Support:**
    * Automatically parses direct URLs containing anchor hashes (например #part2) on page load, resets scroll position, and smoothly navigates directly to the target section.



---

## Project Structure
```txt
FixedSidebar/
├── public/
│   ├── css/
│   │   └── fixed-sidebar.css  # Layout grid, floating elements, and styling rules
│   ├── index.html             # Demo container page with multi-section layout
│   └── js/
│       ├── vendor/
│       │   └── jquery.min.js  # Core jQuery library
│       └── fixed-sidebar.js   # Core fixed sidebar interactive logic
├── package.json            # Project configuration manifest
├── README.md               # Project documentation
└── server.mjs              # Static Node.js server (ESM)
```
---

## Tech Stack & Dependencies

* **Frontend:** HTML5, CSS3, JavaScript (ES6+), jQuery 3.6+
* **Backend:** Node.js (ESM Static Server)
---
## Prerequisites

- Ensure you have Node.js installed on your machine.

---
## Running the Application
- Clone or place the project in your working directory.
- Start the server using Node.js:

```bash
    npm run start
```
- Open your web browser and navigate to: http://localhost:3000