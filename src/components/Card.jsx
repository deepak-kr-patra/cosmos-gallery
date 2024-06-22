import React from 'react'
import { Link } from "react-router-dom";
import useScreenWidth from '../zustand/useScreenWidth';


const Card = () => {

    const { screenWidth } = useScreenWidth();

    const flexDir = screenWidth < 550 ? "flex-col" : "";
    const justification = screenWidth < 550 ? "justify-start" : "justify-center";

    const itemsWidth = screenWidth < 550 ? "w-full" : "w-1/2";
    const itemsHeight = screenWidth < 550 ? "h-[70%]" : "h-full";
    const height = screenWidth < 550 ? "h-[95%]" : "h-[80%]";

    return (
        <div className={`w-full ${height} flex ${flexDir} items-center ${justification} bg-[#312165] rounded-md my-card`}>
            <div className={`${itemsWidth} ${itemsHeight} p-2`}>
                <img src="https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2022/11/Hubble-Pillars-of-Creation.jpg?resize=1500%2C1565&ssl=1" alt="Shoes" className="w-full h-full rounded-md object-cover" />
            </div>
            <div className={`${itemsWidth} flex-grow flex flex-col items-center justify-center gap-2 p-2`}>
                <h4 className='text-white section-info-text'>View Pic Of The Day</h4>
                <Link to="/explore/potd"><button className="btn rounded-3xl apod-button">click!</button></Link>
            </div>
        </div>
    )
}

export default Card