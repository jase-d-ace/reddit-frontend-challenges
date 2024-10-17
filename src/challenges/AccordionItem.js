export default function AccordionItem(review) {
    return (
        <div>
            <span>{review.game_title}</span>
            <span>{review.content}</span>
            <span>{review.rating}</span>
        </div>
    )
}