# Spaceships Game

A feature-rich, arcade-style space shooter web game built with the **Phaser** framework and integrated with **Facebook Instant Games (FBInstant)**. 

## Features

- 🚀 **Arcade Action & Boss Fights:** Battle through multiple waves of alien enemies and face off against powerful boss encounters.
- 🛠️ **Hangar & Customization:** Features dedicated menu systems for managing ships, weapons, player profiles, and upgrades.
- 🌍 **Dynamic Environments:** Procedural or staged backgrounds spanning multiple planets and solar bodies.
- ⚡ **Power-ups & Economy:** Collect coins, health packs, and energy boosts during gameplay.
- 🌐 **Facebook Instant Games Ready:** Fully integrated with FBInstant SDK support, including local mocks for offline and standalone testing.
- 🎵 **Immersive Audio & Graphics:** Complete with custom sound effects (explosions, laser fire), background soundtracks, and spritesheets.

## Project Structure

```text
spaceships-game/
├── server.mjs             # Lightweight native Node.js static file server
└── public/                # Static assets and game code
    ├── index.html         # Main game entry point
    ├── fbapp-config.json  # Facebook Instant Games configuration
    ├── audio/             # Sound effects and background music
    ├── img/               # Sprites, ships, aliens, bosses, and background assets
    └── js/                # Game logic and source scripts
        ├── phaser.min.js  # Phaser game engine
        ├── fbinstant...   # Facebook Instant SDK mock for local development
        ├── aliens.js      # Alien behavior and spawning
        ├── boss.js        # Boss mechanics and AI
        ├── ship.js        # Player ship logic and controls
        ├── powerups.js    # Collectibles, coins, and health items
        └── menus/         # UI menus (Hangar, Info, Leaderboards, User profile)
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