import GameState from "./GameState"

export default function GameOver({ gameState }) {
    switch(gameState) {
        default:
            return <></>
        case GameState.inProgress:
            return <></>
        case GameState.playerXWins:
            return <div className="game-over">Player X Wins!</div>
        case GameState.playerOWins:
            return <div className="game-over">Player O Wins!</div>
        case GameState.draws:
            return <div className="game-over">It's a Draw!</div>
    }
}