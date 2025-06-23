import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie_detail.css";


// movie/{movie_id}
function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMovieData() {
            const url = `movie/${id}`
            const response = await api.get(url, {
                params: {
                    api_key: "f0988daea9b7e11f73bd9591c7ada249",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setLoading(false);
                    return response.data
                })
                .catch(() => {
                    console.log("Movie not found.")
                })

            setMovie(response)
        }

        loadMovieData()


        return () => {
            console.log("componente desmontado")
        }

    }, [])

    if (loading) {
        return (
            <div className="movie-details">
                <h1>Carregando informações do filme</h1>
            </div>
        )
    }

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img src={`https://media.themoviedb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

            <h3>Sinopse</h3>
            <span>{movie.overview}</span>

            <strong>Avaliação: {movie.vote_average} / 10</strong>

            <div className="buttons-area">
                <button>Salvar</button>
                <button>
                    <a href="#">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Movie;