import { Link, useLocation } from 'react-router-dom';
import "./challenges.css"

export default function Nav () {
    const location = useLocation();
    return (
        <div className="navigation">
            <nav>
                <span><Link className={`nav-link ${location.pathname == "/" ? 'current' : ""}`} to="/">Home</Link> | </span>
                {
                    [{route: "terraform", label: "Terraform"}, {route: "recursive", label: "Recursive"}, {route: "debounce", label: "Debounce"}, {route: "pagination", label: "Pagination"}, {route: "promise", label: "Promise"}].map(route => (
                    <span>
                        <Link className={`nav-link ${location.pathname == `/${route.route}` ? 'current' : ''}`} key={route} to={`/${route.route}`}>{route.label}</Link> | 
                    </span>
                    ))
                }
                <Link className={`nav-link ${location.pathname == '/accordion' ? 'current' : ''}`} to="/accordion"> Accordion </Link>
            </nav>
        </div>
    )
}