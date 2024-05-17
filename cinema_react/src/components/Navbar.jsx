import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav id="navbar">
        <h2>
            {/*Pegar o icone que eu achar mais da preferencia*/}
          <Link to="/"><BiCameraMovie />Cinema do DanDan</Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque um filme" />
            <button type="submit">
                <BiSearchAlt2/>
            </button>

            <button className="loginA">Login</button>
            <button>Cadastro</button>
        </form>

      </nav>
    );
};

export default Navbar