import React from 'react'
import PicSectionContent from './PicSectionContent';


const PicSlide = ({ singleImageData }) => {

    return (
        <div className="carousel-item w-full h-full flex flex-col gap-4">
            <PicSectionContent imageData={singleImageData} />
        </div>
    )
}

export default PicSlide