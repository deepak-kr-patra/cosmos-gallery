import React, { useEffect } from 'react'
import ImageSectionContent from './media_type_sections/ImageSectionContent';
import VideoSectionContent from './media_type_sections/VideoSectionContent';
import useScreenWidth from '../zustand/useScreenWidth'


const PicSectionContent = ({ imageData }) => {

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        let explanationBoxes = document.querySelectorAll('.explanationBox');

        explanationBoxes.forEach(explanationBox => {
            explanationBox.classList.remove('show-scrollbar');

            if (explanationBox.scrollHeight > explanationBox.clientHeight) {
                explanationBox.classList.add('show-scrollbar');
            } else {
                explanationBox.classList.remove('show-scrollbar');
            }
        });

    }, [screenWidth]);

    const flexDir = screenWidth < 450 ? "flex-col gap-2" : "";

    return (
        <>
            <div className='w-full flex flex-col items-center justify-center bg-[#312165] rounded-md p-4 gap-2'>
                <div className='w-full'>
                    <h4 className='text-white image-title'>{imageData.title}</h4>
                </div>

                <div className={`w-full hh-[22vmax] flex ${flexDir} items-center justify-center`}>
                    {imageData.media_type === 'image' ? (
                        <ImageSectionContent imageData={imageData} />
                    ) : (
                        <VideoSectionContent imageData={imageData} />
                    )}
                </div>
            </div>

            <div className='w-full overflow-y-scroll explanationBox'>
                <p className='text-white image-explanation pr-2 text-justify'>{imageData.explanation}</p>
            </div>

            <div className='w-full mt-auto flex items-center justify-center p-1'>
                {imageData.copyright ? (
                    <p className='text-white image-info-text'>Copyright &copy; {imageData.copyright}</p>
                ) : (
                    <p className='text-white image-info-text'>This file is copyright free</p>
                )}
            </div>
        </>
    )
}

export default PicSectionContent


// <div className='w-full h-[65%] flex flex-col items-center justify-center bg-[#312165] rounded-md p-2'>
//                 <div className='w-1/2 h-[76.5%] flex items-center justify-center'>
//                     <img src={imageData.url} alt="image" className='h-full rounded-md object-cover cursor-pointer' onClick={() => showMaximizedPic()} />
//                 </div>
//                 <div className='w-full h-[13.5%] flex items-center justify-center pxvvv-4'>
//                     <h4 className='text-white image-title bg-blackkkkkk'>{imageData.title}</h4>
//                 </div>
//                 <div className='w-full h-[10%] flex items-center justify-between px-4'>
//                     <p className='text-white image-date'>Date : {formatDate(imageData.date)}</p>
//                     <div className='flex items-center justify-center gap-4'>
//                         <button className='btn rounded-3xl apod-button' onClick={() => showMaximizedPic()}>Full Size Pic</button>
//                         <button className='btn rounded-3xl apod-button'>View HD Pic</button>
//                     </div>
//                 </div>
//             </div>