import React from 'react'
import usePicsParameters from '../../zustand/usePicsParameters';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const ViewPotdFromCount = ({ width }) => {

    const { setCount } = usePicsParameters();

    const setCountValue = () => {
        setCount(0);

        const value = document.getElementById('count').value;
        if (value < 1 || value > 100) {
            toast.error(`Enter a number from 1 to 100`);
            return;
        }
        setCount(value);
    }

    return (
        <div className={`${width} h-full flex flex-col items-center justify-center gap-3 bg-[#312165] rounded-md`}>
            <label htmlFor="count" className='text-white pl-2 section-info-text'>Choose number of pics (1 - 100)</label>
            <input type="number" placeholder="Type here" className="input h-[2.5rem] input-bordered w-1/2 max-w-xs my-input" id='count' />
            <Link to="/explore/potd/pics-from-count" onClick={() => setCountValue()}><button className="btn rounded-3xl apod-button">View Pictures</button></Link>
        </div>
    )
}

export default ViewPotdFromCount