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
    return (
        <div id="youtube">
            <div className="container">
                <h2>{translations[language].yout}</h2>
                <div className="youtube">
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
                </div>
            </div>
        </div>
    );
};

export default Youtube;