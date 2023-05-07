import '../styles/components/_carrousel.scss';
import { useState } from 'react';

// A compléter pour gestion des slides !!
function Slider({ imageSlider }) {

    const [galleryState, galleryNext] = useState(0)

    const nextSlide = () => {
        galleryNext(galleryState + 1)
        if (galleryState === imageSlider.length - 1)
            galleryNext(0)
    }

    const prevSlide = () => {
        galleryNext(galleryState - 1)
        if (galleryState === 0)
            galleryNext(imageSlider.length - 1)
    }
    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}

export default Slider