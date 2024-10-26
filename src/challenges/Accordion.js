import { Component } from "react";
import { gameReviews } from "../materials/gameReviews";
import AccordionItem from "./AccordionItem";

class Accordion extends Component {
    constructor() {
        super();
        this.state = {
            reviews: gameReviews
        }
    }

    render(){
        return (
            <div>
                <h1>Challenge:</h1>
                <h3>Create an accordion component in a React class component (not a functional component)</h3>
                <div>
                    {this.state.reviews.map((review, i) => <AccordionItem key={i} {...review} />)}
                </div>
            </div>
        )
    }
}

export default Accordion