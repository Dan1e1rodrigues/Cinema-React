import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MovieGrid.css";

const Search = () => {
    const [searchParams] = useSearchParams();       

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apikey}&query=${query}`;
         
        getSearchedMovies(searchWithQueryURL);
    },[]);

    return (
        <div className="container">
        <h2 className="title">
            Resultado para:<span className="query-text">{query}</span>
        </h2>
        <div className="movies-container">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 &&
                topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    </div>     
    );
};

export default Search;