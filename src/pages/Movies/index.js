import { useParams } from "react-router-dom";

function Movies(){

    const { id } = useParams();

    return(
        <div>
            <h1>Movies Page</h1>
            <h4>Movie {id}</h4>
        </div>
    )
}

export default Movies;