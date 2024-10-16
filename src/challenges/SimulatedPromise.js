import { useState } from 'react';
import { gamesList } from '../materials/gamesList';

export default function SimulatedPromise() {
    const [games, setGames] = useState([])
    const gamesPromise = new Promise((resolve, reject) => {
        resolve(gamesList)
    });
    gamesPromise.then(data => setGames(data))

    return (
        <div>
            <h1>promise challenge</h1>
            <h3>Create a promise that resolves a list of data to simulate an API call, and a component that displays its data.</h3>
            <div className="games-container">
                <ul>
                    {
                        games && 
                        games.map(game => <li>{game.title}</li>)
                    }
                </ul>
            </div>
        </div>
)
}