import { useReducer } from 'react'
import './App.css'
import Explore from './pages/Explore'
import Home from './pages/Home'
import useScreenWidth from './zustand/useScreenWidth'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';


function App() {

  const { setScreenWidth } = useScreenWidth();
  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
    forceUpdate();
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
