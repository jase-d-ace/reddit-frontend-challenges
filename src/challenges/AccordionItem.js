import { useState } from "react";

import "../challenges.css";

export default function AccordionItem(review) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-container">
            <div className="accordion">
                <div className="accordion-closed content" onClick={() => setIsOpen(!isOpen)}>
                    <strong>{review.game_title} - {review.review_title} </strong> 
                    <span className="more-button">{isOpen ? "Less" : "More"}</span>
                </div>
                {isOpen && <div className="accordion-open content">
                    <strong>{review.rating}/10</strong> - <span>{review.content}</span> 
                </div>}
            </div>
        </div>
    )
}