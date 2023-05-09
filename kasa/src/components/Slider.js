import '../styles/components/_slider.scss';
import React, { useState } from 'react';
import dataSlider from '../data/data';
import BtnSLider from './BtnSLider';

function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        // si au click on ne se situe pas sur la dernière slide (data length= nb total de pictures par logement), on passe à la suivant
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        // si au click on se situe sur la dernière slide, on reset à 1 donc on revient à la première image
        else if (slideIndex === dataSlider.length) {
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
            setSlideIndex(dataSlider.length)
        }
    }

    return (
        <div className='container-slider'>
            {dataSlider.map((data, index) => {
                return (
                    <div key={data.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img
                            src={process.env.PUBLIC_URL + `data/${data.pictures}.jpg`}
                            alt="Apparence du logement"
                        />
                        {/* affichage des infos de data.js sur la page */}
                        <p>
                        { /* infos data.js à renseigner */}
                        </p>
                        {/* gestion de la pagination des images*/}
                        <div className='container-pagination'>
                            {Array.from({ length: dataSlider.length }).map((item, index) => (
                                <div
                                    className={slideIndex === index + 1 ? "pagination active" : "pagination"}
                                ></div>))}
                        </div>
                        {/* affichage des flèches */}
                        <BtnSLider moveSlide={previousSlide} direction={"previous"} />
                        <BtnSLider moveSlide={nextSlide} direction={"next"} />
                    </div>
                )
            })}
        </div>
    );
};
export default Slider

/* {data.title}
{data.location}
{data.tags}
{data.host}
{data.rating}
{data.description}
{data.equipments} */