import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./movie_detail.css";


// movie/{movie_id}
function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();
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
                    navigate("/", { replace: true })
                    return;
                })

            setMovie(response)
        }

        loadMovieData()


        return () => {
            console.log("componente desmontado")
        }

    }, [navigate, id])


    function moviesSave() {
        const myMovies = localStorage.getItem("@andrewflix");

        let savedMovies = JSON.parse(myMovies) || [];

        const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movie.id)

        if (hasMovie) {
            toast.warn("Este filme já foi salvo.")
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem("@andrewflix", JSON.stringify(savedMovies));
        toast.success("Filme salvo.")
    }


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

            <strong>Avaliação: {parseFloat(movie.vote_average).toFixed(2)} / 10</strong>

            <div className="buttons-area">
                <button onClick={moviesSave}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${movie.title} - Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Movie;