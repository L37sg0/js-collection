# File Uploader Widget (FileUploader)

A modular, highly customizable jQuery plugin widget for handling multi-file uploads with modern drag-and-drop support, dynamic file type detection, individual and bulk removal, and real-time visual progress bars powered by jQuery UI.

---
## Architecture & Core Features
- 🧩 jQuery Plugin Architecture (uploader.js):
    - Implements an OOP-style jQuery plugin wrapper ($.fn.up) with configurable default options (strings, labels, table headers).
    - Supports chaining and customizable localizations/labels via options.
- 🖱️ Drag-and-Drop & File Selection:
    - Full support for HTML5 DataTransfer drag-and-drop events alongside traditional file input dialog selection (choose files).
    - Real-time extraction of file metadata (name, size in KB, and file extension for automatic icon matching).
- 📊 Progress Tracking & Asynchronous Uploads:
    - Integrates jQuery UI Progressbar instances for individual file upload streams.
    - Uses FormData and $.ajax with custom xhr.upload.onprogress event handlers for precise percentage updates.
    - Manages concurrent XHR requests with $.when.apply() to handle batch completion and cleanup.
---
## Project Structure
```txt

FileUploader/
├── public/
│   ├── css/
│   │   └── uploader.css        # Widget styling and layout rules
│   ├── img/
│   │   ├── doc.png, exe.png, html.png, pdf.png, zip.png, etc. # File type icons
│   │   └── ...
│   ├── index.html              # Demo page initializing the uploader plugin
│   └── js/
│       └── uploader.js         # Core jQuery plugin implementation
├── package.json                # Project manifest and npm dependencies
├── README.md                   # Project documentation
└── server.mjs                  # Node.js static file server (ESM)
```
---
## Tech Stack & Dependencies
- Frontend: HTML5, CSS3, JavaScript (ES6+), jQuery 3.6+, jQuery UI (Themes/Progressbar)
- Backend: Node.js (ESM)
- Communication: HTML5 FormData, AJAX XMLHttpRequestUpload
---
## Prerequisites

- Ensure you have Node.js installed on your machine.
---
## Running the Application

- Clone or place the project in your working directory.
- Install dependencies:
```bash
    npm install
    npm run build
```
- Start the server using Node.js:

```bash
    node server.mjs
```
- Open your web browser and navigate to: http://localhost:3000