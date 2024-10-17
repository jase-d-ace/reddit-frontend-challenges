import { Link } from 'react-router-dom';

export default function Nav () {
    return (
        <nav>
            {
            ["", "recursive", "debounce", "pagination", "promise"].map(route => <Link key={route} to={`/${route}`}>{route == "" ? "home | " : `${route} | `}</Link>)
            }
            <Link to="/accordion">accordion </Link>
      </nav>
    )
}