# RTMViewer
A real-time monitoring dashboard designed for tracking electrical parameters and telemetry data from various remote wind parks (SCADA / RTM system). Built with vanilla JavaScript, HTML, and Bootstrap, served via a lightweight native Node.js HTTP server.
---
## Features

- **Real-Time Telemetry:** Continuously polls remote wind park REST APIs and WebSocket endpoints for live power data.
- **Comprehensive Electrical Metrics:** Visualizes Active Power ($P$), Reactive Power ($Q$), Power Factor ($\cos \varphi$), and Phase-to-Phase Voltages ($U_{ab}$, $U_{bc}$, $U_{ac}$).
- **Dynamic Status Indicators:** 
  - **Green/Success:** Normal operation.
  - **Yellow/Warning:** Zero or negative active power.
  - **Red/Danger:** Low voltage drops ($\le 20\text{kV}$), high reactive power, or connection failure.
- **Hybrid Connectivity:** Supports standard HTTP REST endpoints alongside real-time WebSocket connections (e.g., Hrabrovo station).
- **Zero Dependencies:** Pure vanilla JavaScript frontend paired with a minimal Node.js built-in HTTP server.
---
## Project Structure

```text
rtmviewer/
├── server.mjs         # Lightweight native Node.js static file server
├── public/            # Static assets and frontend application
│   ├── index.html     # Main monitoring dashboard & polling logic
│   ├── wind.jpg       # Background image asset
│   ├── css/           # Bootstrap CSS stylesheets
│   └── js/            # Bootstrap JavaScript bundles
└── README.md
```
---
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