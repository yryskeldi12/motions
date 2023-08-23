import React from 'react';
import './youtube.scss'
import {useLanguage} from "../../LanguageFac/LanguageContext";


const Youtube = () => {
    const {language} = useLanguage()
    const translations = {
        EN: {
            yout: "video testimonials from our students",
        },
        RU: {
            yout: "Видеоотзывы наших учеников"
        }
    }
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Youtube = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

    };

    return (
    <div id="youtube">
            <div className="container">
                <h2>{translations[language].yout}</h2>
                <div className="youtube">
                <h2>Video testimonials from our students</h2>

                <Slider{...settings} className="youtube">
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5hhwccQRRb8"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tr2w1HQ4aSs"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_C2-NJulMfI"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/lPLA9WCtS0Q"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5ucdcU1tVh0"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </Slider>

            </div>
        </div>
    );
};

export default Youtube;