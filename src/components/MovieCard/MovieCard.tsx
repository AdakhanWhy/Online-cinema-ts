import { FC } from "react";
import { TState } from "../../types/reducerTypes";
import { useNavigate } from "react-router-dom";

const MovieCard: FC<TState> = (props) => {
  const navigate = useNavigate();

    return(
      <div className="movieCard" style={{backgroundImage: `url(${props.image})`}}>
        <p className="hoverDescription">{props.description}</p>
        <div>
          <h4>{props.title}</h4>
          <p>Рейтинг: {props.rating}</p>
          <p>Год: {props.year}</p>
          <button onClick={() => {
            navigate(`/movies/${props.id}`);
          }}>Watch now</button>
        </div>
      </div>
    )
}

export default MovieCard;