# Smetki (Personal Finance Organizer)

A simple, lightweight web-based personal budget and finance calculator built with vanilla JavaScript, HTML, and CSS, served via a minimal native Node.js HTTP server.
---
## Features

- 💰 **Income & Expense Tracking:** Add multiple income sources and fixed costs dynamically to your monthly ledger.
- 📊 **Smart Financial Breakdown:** Automatically calculates your net balance after expenses and distributes funds:
  - **Savings:** Automatically sets aside savings (20% of net surplus).
  - **Daily Allowance:** Divides the remaining liquid funds into a daily budget (over a 30-day period).
  - **Credit Alert:** Automatically detects deficits and estimates required credit/borrowing amounts if expenses exceed income.
- **Zero Dependencies:** Pure frontend vanilla implementation powered by a native Node.js static file server.
---
## Project Structure

```text
smetki-app/
├── server.mjs         # Lightweight native Node.js static file server
└── public/            # Static assets and application code
    ├── index.html     # Main financial dashboard and input forms
    ├── smetki.js      # Budget calculation logic and DOM manipulation
    └── style.css      # UI layout and styling
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