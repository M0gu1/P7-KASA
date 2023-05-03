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
}

export default Slider