import '../styles/components/_slider.scss';
import React, { useState } from 'react';
import BtnSLider from './BtnSLider';

// récupération des variables transmises via props
function Slider({ images }) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        // si au click on ne se situe pas sur la dernière slide (data length= nb total de pictures par logement), on passe à la suivant
        if (slideIndex !== images.length) {
            setSlideIndex(slideIndex + 1)
        }
        // si au click on se situe sur la dernière slide, on reset à 1 donc on revient à la première image
        else if (slideIndex === images.length) {
            setSlideIndex(1)
        }
    }

    const previousSlide = () => {
        // si au click on n'est pas sur la dernière image, on recule d'une
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        // si au click on se situe sur la dernière slide, on revient à la première image
        else if (slideIndex === 1) {
            setSlideIndex(images.length)
        }
    }

    return (
        <div className='container-slider'>
            {images.map((data, index) => (
                <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                    {console.log(data)}
                    <img
                        src={data}
                        alt="Apparence du logement"
                    />
                    {/* affichage des infos de data.js sur la page */}
                    <p>
                        { /* infos data.js à renseigner */}
                    </p>

                </div>
            ))}
            {/* gestion de la pagination des images*/}
            <div className='container-pagination'>
                {slideIndex}/{images.length}
            </div>
            {/* affichage des flèches */}
            <BtnSLider moveSlide={previousSlide} direction={"previous"} />
            <BtnSLider moveSlide={nextSlide} direction={"next"} />
        </div>
    );
};
export default Slider