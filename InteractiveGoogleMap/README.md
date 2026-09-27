# Interactive Google Map Widget (`InteractiveGoogleMap`)

A feature-rich **Google Maps & jQuery application** designed for logistics and moving services. It enables users to select pick-up and drop-off coordinates directly on an interactive map, reverse-geocode addresses, input cargo weight, and calculate real-time distance-based moving quotes.

---

## Architecture & Core Features

* 🗺️ **Dynamic Google Maps & HQ Integration (`google-map.js`):**
    * Initializes a custom-styled Google Maps interface centered around company headquarters with a dedicated HQ marker and interactive info window.
    * Captures precise map click coordinates to establish dynamic start and end journey points with custom drag-and-drop marker animations.


* 📍 **Geocoding & Location Management:**
    * Uses the **Google Maps Geocoder API** to reverse-geocode latitude and longitude pairs into human-readable formatted street addresses instantly when markers are placed or dragged.


* 📦 **Dynamic Quote & Cost Calculation Engine:**
    * Validates weight input fields with responsive timeout debouncing to unlock quote generation buttons.
    * Computes pricing breakdowns based on distance formulas, base mileage rates, and per-kilogram weight scaling factors.



---

## Project Structure

```text
InteractiveGoogleMap/
├── node_modules/           # External dependencies (jQuery, jQuery UI)
├── public/
│   ├── css/
│   │   └── google-map.css     # Responsive side panel, map layout, and typography styles
│   ├── img/
│   │   ├── hq.png             # Headquarters marker icon
│   │   └── start.png          # Start point marker icon
│   ├── index.html             # Main application viewport and side panel markup
│   └── js/
│       ├── vendor/
│       │   ├── jquery.min.js      # Core jQuery library
│       │   └── jquery-ui.min.js   # jQuery UI interactions
│       └── google-map.js      # Core mapping, geocoding, and quote calculation logic
├── package.json            # Project build scripts and dependencies
├── package-lock.json       # Locked dependency versions
├── README.md               # Project documentation
└── server.mjs              # Static Node.js server (ESM)

```

---

## Tech Stack & Dependencies

* **Frontend:** HTML5, CSS3, JavaScript (ES6+), **Google Maps JavaScript API**, **jQuery 3.6+**, **jQuery UI 1.14+**
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