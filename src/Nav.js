import { Link } from 'react-router-dom';
import "./challenges.css"

export default function Nav () {
    return (
        <div className="navigation">
            <nav>
                {
                    ["","terraform", "recursive", "debounce", "pagination", "promise"].map(route => <Link key={route} to={`/${route}`}>{route == "" ? "home | " : `${route} | `}</Link>)
                }
                <Link to="/accordion">accordion </Link>
            </nav>
        </div>
    )
}