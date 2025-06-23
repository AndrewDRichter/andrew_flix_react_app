import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

// MOVIES PATH: movie/now_playing
function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "f0988daea9b7e11f73bd9591c7ada249",
                    language: "pt-BR",
                    page: 1,
                },
                // headers: {
                //     Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                // }
            })

            setMovies(response.data.results.slice(0, 10))
        }

        loadMovies();
        setLoading(false);

    }, [])

    //https://media.themoviedb.org/t/p/w220_and_h330_face/frNkbclQpexf3aUzZrnixF3t5Hw.jpg


    if (loading) {
        return (
            <div className="loading">
                <h2>Loading movies...</h2>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="movies-listing">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://media.themoviedb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`} >Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;