import '../styles/components/_slider.scss';
import React, { useState } from 'react';
import BtnSLider from './BtnSLider';

// récupération des variables transmises via props
function Slider({ images }) {

    const [slideIndex, setSlideIndex] = useState(0)

    const nextSlide = () => {
        // si au click on ne se situe pas sur la dernière slide (data length= nb total de pictures par logement), on passe à la suivant
        if (slideIndex !== images.length - 1) {
            setSlideIndex(slideIndex + 1)
        }
        // si au click on se situe sur la dernière slide, on reset à 1 donc on revient à la première image
        else {
            setSlideIndex(0)
        }
    }

    const previousSlide = () => {
        // si au click on n'est pas sur la dernière image, on recule d'une 
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1)
        }
        // si au click on se situe sur la dernière slide, on revient à la première image 
        else {
            setSlideIndex(images.length - 1)
        }
    }

    return (
        <div className='container-slider'>
            <div className={slideIndex === slideIndex + 1 ? "slide active-anim" : "slide"}>
                <img
                    src={images[slideIndex]}
                    alt="Apparence du logement"
                />
            </div>

            {/*  gestion de la pagination des images */}
            <div className={images.length === 1 ? "hidding-pagination" : 'container-pagination'}>
                {slideIndex + 1}/{images.length}
            </div>
            {/* affichage des flèches */}
            <div className={images.length === 1 ? "hidding-buttons" : "container-arrows"}>
                <BtnSLider moveSlide={previousSlide} direction={"previous"} />
                <BtnSLider moveSlide={nextSlide} direction={"next"} />
            </div>
        </div >
    );
};
export default Slider