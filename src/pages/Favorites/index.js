import "./favorites.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const storedMovies = localStorage.getItem("@andrewflix");
        setMovies(JSON.parse(storedMovies) || []);
    }, [])

    function removeMovie(id){
        let moviesFiltered = movies.filter((movie) => {
            return (movie.id !== id)
        })

        setMovies(moviesFiltered);
        localStorage.setItem("@andrewflix", JSON.stringify(moviesFiltered));
        toast("Filme desfavoritado!")
    }

    return (
        <div className="favorites-section">
            <h1>My Favorite Movies</h1>

            {movies.length === 0 && <span>Você ainda não favoritou nenhum filme.</span>}

            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`} >See details</Link>
                                <button onClick={() => removeMovie(movie.id)}>Remove</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Favorites;