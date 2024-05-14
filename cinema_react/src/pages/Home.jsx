// Vai chamar a API que estou consumindo
import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
    console.log(moviesURL, apikey);

    return <div>Home</div>;
};

export default Home;