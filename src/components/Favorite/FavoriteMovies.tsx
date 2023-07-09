import { useEffect, useState } from "react";
import { TState } from "../../types/reducerTypes";

const FavoriteMovies = () => {

    const [favoriteM, setFavoriteM] = useState<TState[]>([]);

    function getFavoriteMovies() {
        const favoriteMovies: TState[] = JSON.parse(localStorage.getItem('values') || '[]') as TState[];
        setFavoriteM(favoriteMovies)
    }

    function deleteMovie(id: number) {
        const newFavoriteMovies = favoriteM.filter(movie => movie.id !== id);
        localStorage.setItem('values', JSON.stringify(newFavoriteMovies));
        setFavoriteM(newFavoriteMovies);
    }

    useEffect(() => {
        getFavoriteMovies()
    }, [])

    return(
        <div>
            {favoriteM.map(m => (
                <div>
                    {m.title} {m.id}
                    <button onClick={() => deleteMovie(m.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default FavoriteMovies;