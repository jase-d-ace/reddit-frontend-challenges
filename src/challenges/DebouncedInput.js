import { useState } from "react";
import { gamesList } from "../materials/gamesList";

export default function DebouncedInput() {
    const [results, setResults] = useState([])
    
    const debounce = (query, interval) => {
        setTimeout(() => {
            setResults(gamesList.filter(game => game.title.toLowerCase().includes(query.toLowerCase())))
        }, interval)
    }
    return (
        <div>
            <h1>Challenge:</h1>
            <h3>Create a debounce function on an input field that displays a list of filtered items matching the input, updating on an interval passed into the debounce function.</h3>
            <div>
                <input name="debounced-game-input" onChange={e => debounce(e.target.value, 500)} type="text" />
            </div>
            <div>
                <ul>
                    {results &&
                    results.map(result => <li>{result.title}</li>)}
                </ul>
            </div>
        </div>
    )
}