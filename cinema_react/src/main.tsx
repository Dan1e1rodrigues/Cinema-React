import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import App from './App.tsx';
// Esta marcando erro de importação porém esta correto, esta funcionando
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

import Login from './components/Login';
import Signup from './components/Signup'; // Novo componente de cadastro

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />

          {/* Login & Cadastro */}
          {/* <Route path="login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);  
