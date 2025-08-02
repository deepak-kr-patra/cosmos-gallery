import {
    Routes,
    Route,
    useNavigate,
    useLocation,
} from "react-router-dom";

import ExploreContent from '../components/ExploreContent';
import PicOfTheDay from '../components/PicOfTheDay';
import useScreenWidth from '../zustand/useScreenWidth'
import { IoArrowBack } from "react-icons/io5";


const Explore = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const goBack = () => {
        if (pathname === '/explore') {
            navigate('/');
        } else if (pathname === '/explore/potd') {
            navigate('/explore');
        } else {
            navigate('/explore/potd');
        }
    }

    const { screenWidth } = useScreenWidth();

    const boxWidth = screenWidth > 1100 ? "w-[60%]" : screenWidth <= 1100 && screenWidth > 500 ? "w-[80%]" : "w-[90%]";
    const padding = screenWidth < 500 ? "p-4" : "p-6";

    return (
        <div className='h-full w-full bg-gray-400 rounded-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex items-center justify-center
        '>
            <div className={`relative ${boxWidth} h-[90%] flex flex-col items-center justify-center bg-[#1A103D] rounded-md ${padding}`}>
                <div className='absolute top-0 left-0 p-2'>
                    <button className='text-white text-[4.5vmin] back-button' onClick={goBack}><IoArrowBack className='bg-pink-300' /></button>
                </div>
                <Routes>
                    <Route path="/" element={<ExploreContent />} />
                    <Route path="potd/*" element={<PicOfTheDay />} />
                </Routes>
            </div>
        </div>
    )
}

export default Explore