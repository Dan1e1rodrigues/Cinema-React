import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";

import './App.css'

function App() {
  return (
    <>
      <div className='App'>
          <Navbar />
            {/* <h2>Cinema dos Crias</h2>
            <p>Ester filmes</p> */}
          <Outlet/>
      </div>
    </>
  )
}

export default App
