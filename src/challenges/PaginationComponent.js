import { useState } from 'react';
import { gamesList } from '../materials/gamesList';
import GameCard from "./GameCard";
import '../challenges.css';

export default function PaginationComponent({ data=gamesList }) {
    const ELEMENTS_PER_PAGE = 10
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPages = Math.ceil(data.length / ELEMENTS_PER_PAGE)

    const displayedElements = (list) => {
        let rangeStart = currentPage * ELEMENTS_PER_PAGE 
        let end = rangeStart + ELEMENTS_PER_PAGE

        return (
            list.slice(rangeStart, end).map((game, i) => <li key={i}><GameCard {...game} /></li>)
        )
    }

    return (
        <div className="pagination">
            <h1>Challenge:</h1>
            <h3>Create a pagination component that fetches a list and displays X items at a time. It should have buttons to show the first and last pages, as well as buttons to move to the previous and next page.</h3>
            <div className="games-display">
                <ul>
                    { displayedElements(gamesList) }
                </ul>
            </div>
            <div className="pagination-controls">
                <button disabled={currentPage === 0} onClick={() => setCurrentPage(0)} className="page-first">first</button>
                <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)} className="page-back">back</button>
                {
                    [...Array(numberOfPages)].map((num, i) => <span className={currentPage === i ? "active" : ""} key={num}>{i+1} </span>)
                }
                <button disabled={currentPage === Math.floor(data.length / ELEMENTS_PER_PAGE)} onClick={() => setCurrentPage(currentPage + 1)} className="page-more">more</button>
                <button disabled={currentPage === Math.floor(data.length / ELEMENTS_PER_PAGE)} onClick={() => setCurrentPage(numberOfPages)} className="page-last">last</button>
            </div>
        </div>
    )
}