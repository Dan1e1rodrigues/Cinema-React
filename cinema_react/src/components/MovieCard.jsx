import { Link } from "react-router-dom"

import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true}) => {
    return (
        // Já vai puxar as informações da API e fazer com que fique correto nome, imagem e descrição
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            {/* Para fazer com que apareça */}
            <p>
                <FaStar />{movie.vote_average}   
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    );
};

export default MovieCard