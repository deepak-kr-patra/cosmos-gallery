import { useEffect } from 'react'
import '../styling/home.css'
import { Link } from 'react-router-dom';


const Home = () => {

    useEffect(() => {
        const checkVisibility = () => {
            if (document.visibilityState === "visible") {
                document.querySelector(".rocket-image").classList.add('fly-rocket');
            }
        };

        document.addEventListener("visibilitychange", checkVisibility);
        checkVisibility();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showAlphabet');
                }
            });
        });

        const hiddenAlpha = document.querySelectorAll('.alphabet');
        hiddenAlpha.forEach((el) => observer.observe(el));

        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-intro-n-btn');
                }
            });
        });

        const hiddenItems = document.querySelectorAll('.intro-n-btn');
        hiddenItems.forEach((el) => observer2.observe(el));

        return () => document.removeEventListener('visibilitychange', checkVisibility);
    }, []);

    return (
        <div className='text-white w-full h-screen flex flex-col items-center justify-center'>
            <div className="w-full relative flex items-center justify-center overflow-hidden">
                <h1 className='text-[6vmin]'>
                    {"COSMOS GALLERY".split('').map((ch, idx) =>
                        <span key={idx} className='alphabet' style={{ transitionDelay: `${1200 + 50 * idx}ms` }}>{ch}</span>
                    )}
                </h1>
                <img src="/rocket.png" alt="rocket image" className='absolute rocket-image' />
            </div>

            <div className="max-w-mddd w-full flex flex-col items-center justify-center text-center p-4 gap-4">
                <p className="intro-n-btn home-text">The place for beautiful pictures of the cosmos.</p>
                <Link to="/explore" className='intro-n-btn'><button className="btn rounded-3xl apod-button">Explore</button></Link>
            </div>
        </div>
    )
}

export default Home