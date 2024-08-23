import React from 'react'
import usePicsParameters from '../../zustand/usePicsParameters';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import validDate from '../../utilities/validDate';


const ViewPotd = () => {

    const { setDate } = usePicsParameters();
    const navigate = useNavigate();

    const setDateValue = () => {
        setDate(null);

        const inputDate = document.getElementById('date').value;

        if (inputDate && !validDate(inputDate)) {
            toast.error("Enter date from 16-06-1995 to today");
            return;
        }

        setDate(inputDate);
        localStorage.setItem("date", inputDate);
        navigate('/explore/potd/pic');
    }

    return (
        <>
            <p className='text-white section-info-text'>Enter a date or view best pic of today</p>
            <label className="input h-[2.5rem] input-bordered flex items-center my-input">
                <input type="date" className="grow" id='date' />
            </label>
            <button className="btn rounded-3xl apod-button" onClick={() => setDateValue()}>View Pic Of The Day</button>
        </>
    )
}

export default ViewPotd