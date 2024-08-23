import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import './App.css'
import Explore from './pages/Explore'
import Home from './pages/Home'

import useScreenWidth from './zustand/useScreenWidth'
import { Toaster } from 'react-hot-toast';


function App() {

  const { setScreenWidth } = useScreenWidth();

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
  };

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="explore/*" element={<Explore />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App