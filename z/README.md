# WEB-115_FinalProject_Ho
Student: Yusuke Ho | Repo: `WEB-115_FinalProject_Ho`

---

## Overview

Copy of the Tetris game
No spreadsheet or third-party bracket site required.

---

## Features

- Recreate the Tetris Game
- All scores will be saved to `localStorage` — progress survives a page refresh.
---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | Randomely generate the order that the blocks will appear in. If statements determine whether a linecreated before removing and adding points to the score. |
| **Event Listeners** | Listens for arrow key click and trigger functions defined in the class.|
| **DOM Element Creation** | The entire grid is built dynamically with `createElement` and `appendChild`. Nothing is hardcoded in the HTML beyond the app shell. |
| **Classes & Subclasses** | A base `block` class holds the event listners, and methods like `moveR()` and `moveL()`. `L` extends `block` and implements the shape of the block. |

---

## DLC — Additional Topics

### Local Storage
saves scores to `localStorage`

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- `localStorage` for tournament persistence
- HTML Canvas for bracket rendering
- VS Code + GitHub
