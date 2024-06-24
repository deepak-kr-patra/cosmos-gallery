import React from 'react'
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import PotdContent from './PotdContent';
import PicSection from './PicSection';
import PicsFromCount from './PicsFromCount';
import PicsFromRange from './PicsFromRange';
import usePicsParameters from '../zustand/usePicsParameters';
import useScreenWidth from '../zustand/useScreenWidth';


const PicOfTheDay = () => {

    const { date, count, startDate, endDate } = usePicsParameters();
    const { screenWidth } = useScreenWidth();

    const sectionWidth = screenWidth >= 1200 ? "w-[80%]" : screenWidth < 650 ? "w-full" : "w-[90%]";

    return (
        <>
            <div className='w-full h-[10%] flex items-center justify-center'>
                <h3 className='text-white text-[5vmin]'>NASA Picture Of The Day</h3>
            </div>

            <div className={`${sectionWidth} h-[90%] flex flex-col items-center justify-center gap-4`}>
                <Routes>
                    <Route path="/" element={<PotdContent />} />
                    <Route path="pic/*" element={date ? <PicSection date={date} /> : <Navigate to="/explore/potd" />} />
                    <Route path="pics-from-count/*" element={count > 0 ? <PicsFromCount count={count} /> : <Navigate to="/explore/potd" />} />
                    <Route path="pics-from-range/*" element={startDate ? <PicsFromRange startDate={startDate} endDate={endDate} /> : <Navigate to="/explore/potd" />} />
                </Routes>
            </div>
        </>
    )
}

export default PicOfTheDay