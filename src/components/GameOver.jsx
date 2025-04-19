export default function GameOver({winner, onRestart}){
    return (
        <div id = 'game-over'>
            <h2>Game Over</h2>
            
            

            {(winner == 'draw') ? (
                <p>It's a DRAW !!</p>) 
                : (
                <p>{winner} has WON !!</p>
                )
                }
            <button onClick = {
                onRestart
            }>Rematch</button>
        </div>
    );
}