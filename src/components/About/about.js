import React from 'react';
import './about.scss'
import about from '../../../src/Image/about.svg'
import Our from "./our/our";
import {useLanguage} from "../LanguageFac/LanguageContext";


const AboutUs = () => {


    const {language} = useLanguage()
    const translations = {
        EN :{
            about:'ABOUT US',
            best:'Best Education Platform',
            best2:'Apparently we had reached a great height in the atmosphere, for the sky was a dead black.',
            best3: 'By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.'


        },
        RU: {
            about:'О НАС',
            best:'Лучшее образование Платформа',
            best2:'Судя по всему, мы достигли большой высоты в атмосфере, поскольку небо было мертвенно-черным.',
            best3:'Благодаря той же иллюзии, которая поднимает морской горизонт до уровня зрителя на склоне холма, черное облако внизу расплывалось, и машина, казалось, плыла посередине.'
        }
    };
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about--images">
                        <div className="about--images__motion">
                            <img src={about} alt=""/>
                        </div>
                    </div>
                    <div className="about--title">
                        <h3>{translations[language].about}</h3>
                        <h1>{translations[language].best}</h1>
                        <h5>{translations[language].best2}</h5>
                        <p>{translations[language].best3}</p>
                    </div>
                </div>
            </div>
            <Our/>
        </div>
    );
};

export default AboutUs;