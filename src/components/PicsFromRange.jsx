import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import PicSlide from './PicSlide';
import MaximizedPicture from './MaximizedPicture';
import useGetImagesFromRange from '../hooks/useGetImagesFromRange'


const PicsFromRange = () => {

    let startDate = localStorage.getItem("start-date") || null;
    let endDate = localStorage.getItem("end-date") || null;

    const navigate = useNavigate();
    useEffect(() => {
        if (!startDate) {
            navigate('/explore/potd');
        }
    }, [])

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
                                slideNumber={idx+1}
                                totalItems={imagesData.length}
                                singleImageData={singleImageData}
                            />
                        })}
                    </div>

                    {/* maximized pic, which is initially hidden */}
                    <MaximizedPicture />
                </>
            )}
        </>
    )
}

export default PicsFromRange