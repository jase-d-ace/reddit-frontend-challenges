import { useState } from "react";
import { useSpring, animated } from "react-spring";

import "../challenges.css";

export default function AccordionItem(review) {
    const [isOpen, setIsOpen] = useState(false);

    // animation tutorial: https://owlcation.com/stem/Animated-Accordion-with-React-JS
    const openAnimation = useSpring({
        from: {
            opacity: "0",
            maxHeight: "0"
        },
        to: {
            opacity: isOpen ? "1" : "0",
            maxHeight: isOpen ? "4em" : "0"
        },
        config: {
            duration: "200"
        }
    })

    return (
        <div className="accordion-container">
            <div className="accordion">
                <div className="accordion-closed content" onClick={() => setIsOpen(!isOpen)}>
                    <strong>{review.game_title} - {review.review_title} </strong> 
                    <span className="more-button">{isOpen ? "Less" : "More"}</span>
                </div>
                <animated.div className="accordion-open content" style={openAnimation}>
                    <strong>{review.rating}/10</strong> - <span>{review.content}</span> 
                </animated.div>
            </div>
        </div>
    )
}