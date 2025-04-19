# Tic Tac Toe Game

A modern, interactive Tic Tac Toe game built with React and Vite. This project features a clean user interface, player customization, game logging, and win detection.

## Features

- 🎮 Classic Tic Tac Toe gameplay
- 👥 Customizable player names
- 📝 Game move history logging
- 🏆 Win detection and game over screen
- 🔄 Rematch functionality
- 🎨 Modern and responsive UI

## Technologies Used

- React 18
- Vite
- CSS3
- JavaScript (ES6+)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd TicTacToe-React
```

3. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode

To run the project in development mode:
```bash
npm run dev
```
This will start the development server, typically at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── GameBoard.jsx      # Game board component
│   ├── GameOver.jsx       # Game over screen
│   ├── Log.jsx            # Game move history
│   ├── Players.jsx        # Player information
│   └── winningCombinations.jsx  # Win detection logic
├── App.jsx                # Main application component
├── index.jsx              # Application entry point
└── index.css              # Global styles
```

## How to Play

1. Start the game by running the development server
2. Enter player names (optional)
3. Players take turns placing their marks (X or O) on the 3x3 grid
4. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled without a winner, the game ends in a draw
6. Click "Rematch" to start a new game

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE). 