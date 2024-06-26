import React, { useEffect } from 'react'
import PicSlide from './PicSlide';
import useGetImagesFromRange from '../hooks/useGetImagesFromRange'
import MaximizedPicture from './MaximizedPicture';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';


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