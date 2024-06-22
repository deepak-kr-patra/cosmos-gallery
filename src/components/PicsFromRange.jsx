import React from 'react'
import PicSlide from './PicSlide';
import useGetImagesFromRange from '../hooks/useGetImagesFromRange'
import MaximizedPicture from './MaximizedPicture';
import Loader from './Loader';


const PicsFromRange = ({ startDate, endDate }) => {

    const { loading, imagesData } = useGetImagesFromRange(startDate, endDate);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="w-full h-full carousel gap-2">
                        {imagesData.map((singleImageData, idx) => {
                            return <PicSlide
                                key={idx}
                                singleImageData={singleImageData}
                            />
                        })}
                    </div>

                    {/* maximized pic */}
                    <MaximizedPicture />
                </>
            )}
        </>
    )
}

export default PicsFromRange