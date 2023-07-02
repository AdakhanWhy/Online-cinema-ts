import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard/MovieCard";
import { TState } from "../types/reducerTypes";
import { TMSelector } from "../types/reducerTypes";
import { FC } from "react";

const MoviesPage: FC = () => {
    const movies: TState[] = useSelector((state: TMSelector) => state.movieReducer.movies)

    return(
        <div className="moviespage container">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id} 
                    id={movie.id}
                    title={movie.title} 
                    description={movie.description}
                    image={movie.image} 
                    year={movie.year} 
                    rating={movie.rating} 
                    video={movie.video}
                />
            ))}
        </div>
    )
}

export default MoviesPage;