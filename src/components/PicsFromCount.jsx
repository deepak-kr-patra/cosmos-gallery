import React, { useEffect } from 'react'
import PicSlide from './PicSlide';
import useGetImagesFromCount from '../hooks/useGetImagesFromCount';
import MaximizedPicture from './MaximizedPicture';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';


const PicsFromCount = () => {

    let count = localStorage.getItem("count") || 0;

    const navigate = useNavigate();
    useEffect(() => {
        if (count <= 0) {
            navigate('/explore/potd');
        }
    }, [])

    const { loading, imagesData } = useGetImagesFromCount(count);

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

export default PicsFromCount