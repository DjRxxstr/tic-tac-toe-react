import { useState } from "react";

// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]




export default function GameBoard({onSelect, board}){
    // let gameBoard = initialGameBoard;

    // for (const pair of turns){
    //     // console.log(pair);
    //     //thus, for every iter
    //     const { square, player } = pair;
    //     const { row, col } = square;

    //     gameBoard[row][col] = player;
    // }

    // for (combo of winningCombinations){
    //     const firstSquareSymbol = gameBoard[combo[0].row][combo[0].col]
    //     const secondSquareSymbol = gameBoard[combo[1].row][combo[1].col]
    //     const thirdSquareSymbol = gameBoard[combo[2].row][combo[2].col]

    //     if (!firstSquareSymbol &&
    //         firstSquareSymbol === secondSquareSymbol &&
    //         secondSquareSymbol === thirdSquareSymbol
    //     ){
            
    //     }


    // }

    // const [
    //     gameBoard,
    //     setGameBoard
    // ] = useState(initialGameBoard);

    // function handleGameBoard(rowIndex, colIndex){
        // setGameBoard(
        //     [
        //         [null, null, null],
        //         [null, null, null],
        //         [null, null, null]
        //     ]
        // )

        // (Here we want to update one element
        // based on the button clicked)
        // since it depends on previous state,

        // setGameBoard((previous) => {
        //     [
        //         [null, null, null],
        //         [null, null, null],
        //         [null, null, null]
        //     ]
        // }
            
        // )
    // function handleGameBoard(rowIndex, colIndex){
    //     setGameBoard((previous) => 
    //         {
    //         const copy = [...previous.map(
    //             innerArray => [...innerArray]
    //         )];

    //         copy[rowIndex][colIndex] = activePlayerSymbol;
    //         return copy;
    //         }
            
    //     );

    // onSelect();

    
    return(
        <ol id = "game-board">
            {board.map(
                (row, rowIndex) => 
                (
                <li key = {rowIndex}>
                    <ol>
                        {row.map(
                            (playerSymbol, colIndex) => (
                                <li key = {colIndex}>
                                    <button
                                    onClick={
                                        ()=>
                                        onSelect(
                                            rowIndex,
                                            colIndex
                                        )}
                                        
                                        disabled={
                                            playerSymbol? true:false
                                        }>
                                        {playerSymbol}
                                    </button>
                                </li>
                            )
                        )}
                    </ol>
                </li>
                )
            )}
        </ol>
    );
}