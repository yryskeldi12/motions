import React from 'react';
import './block.scss'
import are from '../../../../src/Image/are.svg'
import book from '../../../../src/Image/book.png'
import prices from '../../../../src/Image/fer/Frame 71.png'
import cook from '../../../../src/Image/Frame 66/Frame 71.png'
import well from '../../../../src/Image/Frame 66/study4'
import {useLanguage} from "../../LanguageFac/LanguageContext";

const Block = () => {
    const {language} = useLanguage()

    const translations = {
        EN :{
            name1: "This Is Why We Are Best From Others",
            title1: "We provide full support at all stages of preparation, including assistance in filing documents and preparing for an interview. Contact us and start your journey to higher education abroad!" ,
            name2: "1000+ Partners",
            title2: "Over 1000+ Partners Worldwide Enter The Best Universities In The World",
            time: "Time",
            time2: "We Will Help You Save Your Time And Nerves When Applying To The Best University.",
            experts: "Experts",
            experts2: "We are experts in our field. help you reach new heights",
            prices: "Affordable Prices",
            prices2: "reasonable prices will always please you. sign up for a consultation",

        },
        RU: {
            name1: "Вот почему мы Лучшее от других",
            title1: "Мы оказываем полную поддержку на всех этапах подготовки, включая помощь в подаче документов и подготовке к собеседованию. Свяжитесь с нами и начните свой путь к высшему образованию за рубежом!",
            name2: "1000+ Партнеров",
            title2: "Более 1000+ партнеров по всему миру поступают в лучшие университеты мира",
            time: "Время",
            time2: "Мы поможем вам сэкономить ваше время и нервы при поступлении в лучший вуз.",
            experts: "Эксперты",
            experts2: "Мы являемся экспертами в своей области. помочь вам достичь новых высот",
            prices: "Доступные цены",
            prices2: "доступные цены всегда вас порадуют. записаться на консультацию",
        }
    };
    return (
        <div id="block">
            <div className="container">
                <div className="block">
                    <div className="block--other">
                        <h1>{translations[language].name1}</h1>
                        <p>{translations[language].title1}</p>
                        <div className="block--other__fot">
                            <img src={are} alt=""/>
                        </div>

                    </div>
                    <div className="block--time">
                        <div className="block--time__help">
                            <div className="block--time__help--over">
                                <div className="block--time__help--over__we">
                                    <img src={book} alt=""/>
                                    <h1>{translations[language].name2}</h1>
                                    <p>{translations[language].title2}</p>
                                </div>
                            </div>
                            <div className="block--time__help--over">
                                <div className="block--time__help--over__we">
                                    <img src={prices} alt=""/>
                                    <h1>{translations[language].experts}</h1>
                                    <p>{translations[language].experts2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="block--time__helps">
                            <div className="block--time__helps--overs">
                                <div className="block--time__helps--overs__he">
                                    <img src={cook} alt=""/>
                                    <h1>{translations[language].time}</h1>
                                    <p>{translations[language].time2}</p>
                                </div>
                            </div>
                            <div className="block--time__helps--overs">
                                <div className="block--time__helps--overs__he">
                                    <img src={well} alt=""/>
                                    <h1>{translations[language].prices}</h1>
                                    <p>{translations[language].prices2}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;