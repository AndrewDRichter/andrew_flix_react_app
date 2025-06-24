import "./favorites.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const storedMovies = localStorage.getItem("@andrewflix");
        setMovies(JSON.parse(storedMovies) || []);
    }, [])

    return (
        <div className="favorites-section">
            <h1>My Favorite Movies</h1>

            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`} >See details</Link>
                                <button>Remove</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Favorites;