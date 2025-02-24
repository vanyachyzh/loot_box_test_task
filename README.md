[DEMO](https://loot-box-test-task.vercel.app/)

# Next.js Loot Box App!

This application demonstrates a loot box concept where users can open four unique loot boxes, each only once. Each loot box contains a random skin that can be obtained.

## How It Works

1.  The user is presented with four loot boxes on the main page.
2.  Clicking on a loot box opens it, and the user receives a random skin.
3.  Once a loot box is opened, it gest disabled and cannot be opened again.
4.  Each loot box can only be opened once.

## Technologies Used

*   Next.js
*   GSAP
*   TypeScript
*   Tailwind
*   Jest

## Installation

1.  Clone the repository: `git clone https://github.com/vanyachyzh/loot_box_test_task.git`
2.  Install dependencies: `npm install` or `yarn install`
3.  Run the development server: `npm run dev` or `yarn dev`

## Usage

1.  Open the page in your browser at `http://localhost:3000`.
2.  Click on a loot box to open it and receive a random skin.
3.  Note that each loot box can only be opened once.

## Done

* Roulette animation
* Skin-revealing animation
* Displaying a message “New item unlocked!”
* UI responsiveness 
* Accessibility best practices (e.g., keyboard interactions, ARIA attributes).
* Adding Redux state manager
* Writing some tests using Jest


## TODO 

* Box opening animation
* WebSocket simulation
* End-to-end tests using Cypress
* Write more relevant tests on Jest
* Adding a glowing effect on skin revealing
* Adding sound for box opening and roulette spinning


