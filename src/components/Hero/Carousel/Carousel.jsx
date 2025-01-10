import React, { useState } from 'react'
import './Carousel.css'
// import image1 from '../../../assets/banner-test.png'
// import image2 from '../../../assets/banner-test2.png'
// import image4 from '../../../assets/banner-test4.jpg'
// import image3 from '../../../assets/banner-test3.png'

const images = [
    image1, image2, image4
]

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="carousel">
            <div className="carousel-inner">
                <div
                    className="carousel-slides"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="carousel-image"
                        />
                    ))}
                </div>
            </div>
            <button onClick={goToPrevious} className="carousel-button prev" aria-label="Previous image">
                &#10094;
            </button>
            <button onClick={goToNext} className="carousel-button next" aria-label="Next image">
                &#10095;
            </button>
        </div>
    )
}