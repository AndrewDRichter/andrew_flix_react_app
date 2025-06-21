import { useEffect, useState } from "react";
import api from '../../services/api';

// MOVIES PATH: movie/now_playing
function Home() {
    const { movies, setMovies } = useState([]);

    useEffect(() => {

        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    // api_key: "f0988daea9b7e11f73bd9591c7ada249",
                    language: "pt-BR",
                    page: 1,
                },
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })

            console.log(response.data.results)
        }

        loadMovies();

    }, [])

    return (
        <div className="home">
            <h1>Homepage</h1>
        </div>
    )
}

export default Home;