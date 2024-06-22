import React from 'react'
import PicSlide from './PicSlide';
import useGetImagesFromCount from '../hooks/useGetImagesFromCount';
import MaximizedPicture from './MaximizedPicture';
import Loader from './Loader';


const PicsFromCount = ({ count }) => {

    const { loading, imagesData } = useGetImagesFromCount(count);
    console.log(imagesData);

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

export default PicsFromCount