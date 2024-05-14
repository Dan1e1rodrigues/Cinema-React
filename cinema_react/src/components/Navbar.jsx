import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav id="navbar">
        <h2>
            {/*Pegar o icone que eu achar mais da preferencia*/}
          <Link to="/"><BiCameraMovie />MovieDn</Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque um filme" />
            <button type="submit">
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
    );
};

export default Navbar