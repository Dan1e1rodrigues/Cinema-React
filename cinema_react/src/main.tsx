import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import App from './App.tsx';
// Esta marcando erro de importação porém esta correto, esta funcionando
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

// Login e cadastro
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

import './index.css';

// const Private = ({ Item }) => {
//   const { signed } = useAuth();

//   return signed > 0 ? <Item /> : <Signin />;
// };


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);  
