import { act, useState } from "react";
import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { winningCombinations } from "./components/winningCombinations";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const PLAYERS = {
  X : 'Player-1',
  O : 'Player-2'
}


function getCurrentActivePlayer(gameTurns){
  let current = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    current = 'O';
  }

  return current;
}

let winner = null;

export default function App() {
  const [playersName, setPlayersName] = useState(PLAYERS)

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = getCurrentActivePlayer(gameTurns);
  // const [
  //   activePlayer, setActivePlayer
  // ] = useState('X');

  // -> let activePlayer = 'X';

  let gameBoard = [...INITIAL_GAME_BOARD.map((row)=>[...row])];

    for (const pair of gameTurns){
        // console.log(pair);
        //thus, for every iteration, the object
        //contaning the square and the player symbol
        //gets passed on

        const { square, player } = pair;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    for (const combo of winningCombinations){
        const firstSquareSymbol = gameBoard[combo[0].row][combo[0].column]
        const secondSquareSymbol = gameBoard[combo[1].row][combo[1].column]
        const thirdSquareSymbol = gameBoard[combo[2].row][combo[2].column]

        if (firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            secondSquareSymbol === thirdSquareSymbol
        ){
            winner = playersName[firstSquareSymbol];
        }
    }

  if (gameTurns.length == 9){
    winner = 'draw';
  }

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer(
    //   (prevTurn) => prevTurn === 'X' ? 'O' : 'X'
    // );
    
    setGameTurns(prevTurns=>{
      
      // // console.log(prevTurns);

      // if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
      //   currentPlayer = 'O';
      // }

      // -> activePlayer = currentPlayer;


      const currentPlayer = activePlayer;

      const updatedTurns = [{square : {
                                      row: rowIndex,
                                      col: colIndex
                                      }, 
                              player : currentPlayer
                              }, 
    ...prevTurns];
    //here, we are looking to handle the selecting
    //turns in the 'App.js' file itself
    //Hence, the first element of the prevTurns array
    //contains the details of the last turn, and
    //the rest of the elements are the turns previous
    //to all

    // console.log(updatedTurns);

    return updatedTurns;
    }
  )
  }

  function handleRematch(){
    setGameTurns([]);
    winner = null;
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayersName((prevName)=> {
      return {...prevName,
        [symbol]: newName}
    }
  )
  }

  return (
    <main>
      <div id = "game-container">
        {/* PLAYERS */}
        <ol id = "players" className="highlight-player">
          
            
            <Players symbol = "X" 
                    name = {PLAYERS.X}
                  className = {activePlayer === 'X' 
                    ? "active" : null
                  }
                  onNameChange = {handlePlayerNameChange}
                  />
            <Players symbol = "O" name = {PLAYERS.O}
                  className = {activePlayer === 'O' 
                    ? "active" : null
                  }
                  onNameChange = {handlePlayerNameChange}
                  />
           
        </ol>
        {winner? <GameOver winner = {winner}
                  onRestart = {handleRematch}
        />
          :
          null}
        <GameBoard onSelect = {handleSelectSquare}
                board = {gameBoard}/>

        
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

