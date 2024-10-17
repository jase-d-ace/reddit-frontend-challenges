import { useState } from "react";

export default function AccordionItem(review) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <strong>{review.game_title} - {review.review_title}</strong> <span onClick={() => setIsOpen(!isOpen)}>More</span>
            {isOpen && <div>
                <strong>{review.rating}</strong> - <span>{review.content}</span> 
            </div>}
        </div>
    )
}