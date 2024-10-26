export default function GameCard(game) {
    return (
        <div className="game-card">
            <div className="card-header">
                {game.title}
            </div>
            <div className="card-body">
                <span><strong>Genre: </strong> {game.genre}</span>
                <span><strong>Price: </strong> {game.price}</span>
                <span><strong>Console: </strong> {game.console}</span>
            </div>
        </div>
    )
}