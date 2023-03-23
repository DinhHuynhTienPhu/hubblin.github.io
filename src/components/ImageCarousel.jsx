import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === images.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - 1;
            }
            return prevIndex - 1;
        });
    };
    const MINUTE_MS = 3000;

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNext();
    //     }, MINUTE_MS);

    //     return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    // }, [])
    return (
        <div className="carousel-container">
            <img style={{ maxWidth: '280px', maxHeight: '400px' }} className='carousel-image ' src={images[activeIndex]} alt="Carousel Item" />
        </div>
    );
};

export default ImageCarousel;
