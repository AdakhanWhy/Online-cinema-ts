import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { TState, TMSelector } from "../../types/reducerTypes";

type moviedetailsparams = {
    id: string
}

const MovieDetails: FC = () => {
    const {id} = useParams<moviedetailsparams>();
    const movies: TState[] = useSelector((state: TMSelector) => state.movieReducer.movies);
    const movie = movies.find(m => m.id === +id!);

    if(!movie){
        return <Navigate to={'/*'} replace />
    }

    return(
        <div className="movieDetails container">
            <div className="leftBlock">
                <iframe
                    style={{ width: "100%", height: "60vh", margin: "15px auto" }}
                    src={movie.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <div className="rightBlock">
                <h4>{movie.title}</h4>
                <p>{movie.description}</p>
            </div>
        </div>
    )
}

export default MovieDetails;