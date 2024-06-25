import { useReducer, useState } from 'react'
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import './App.css'
import Explore from './pages/Explore'
import Home from './pages/Home'

import useScreenWidth from './zustand/useScreenWidth'
import { Toaster } from 'react-hot-toast';


function App() {

  const { setScreenWidth } = useScreenWidth();
  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
    forceUpdate();
  };

  // variable to check if explore page is visited or not
  const [visited, setVisited] = useState(false);

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setVisited={setVisited} />} />
          <Route path="explore/*" element={!visited ? <Navigate to={"/"} /> : <Explore />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App
