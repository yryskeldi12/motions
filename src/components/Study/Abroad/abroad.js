import React from 'react';
import './abroad.scss'
import abroad from "../../../Image/abroad.png"
import {NavLink} from "react-router-dom";
import {useLanguage} from "../../LanguageFac/LanguageContext";

const Abroad = () => {


    const {language} = useLanguage()
    const translations = {
        EN :{
            study:'Abroad',
            span:'Study',
            stydy2: "Motion study for International Education offers its clients various study abroad opportunities – language courses, secondary, professional and higher education, professional development programmes for teachers and specialists of companies and organizations.",
            study3: "Our partners include:",
            study4: "-Universities and higher education establishments.",
            study5: "-Private schools and colleges.",
            study6: "-State schools and colleges.",
            study7: "-World known language schools for adults.",
            study8: "-International language schools for 7-18 y.o. schoolchildren.",
            study9: "-Business schools",
            study10: "-Executive centres",
            study11: "-Summer camps",
            study12: "-Guardianship companies",
            btn: "Explore"

        },
        RU: {
            study:'За границей',
            span:'Изучать',
            stydy2: "Motion Study for International Education предлагает своим клиентам различные возможности обучения за рубежом – языковые курсы, среднее, профессиональное и высшее образование, программы повышения квалификации преподавателей и специалистов компаний и организаций.",
            study3: "Среди наших партнеров:",
            study4: "-Университеты и высшие учебные заведения.",
            study5: "- Частные школы и колледжи.",
            study6: "- Государственные школы и колледжи.",
            study7: "- Всемирно известные языковые школы для взрослых.",
            study8: "- Международные языковые школы для 7-18 лет. школьники.",
            study9: "- Бизнес-школы",
            study10: "- Исполнительные центры",
            study11: "-Летние лагеря",
            study12: "- Опекунские компании",
            btn: "Исследовать"
        }
    };


    return (
        <div id='abroad'>
            <div className="container">
                <h2><span className='span'>{translations[language].span}</span> {translations[language].study}</h2>

                <div className="abroad">
                    <div className="abroad--right">

                        <div className="abroad--right__img">
                            <img src={abroad} alt=""/>
                        </div>
                    </div>
                    <div className="abroad--left">
                        <p>
                            <span className="abroad--left__p">Motion study</span> {translations[language].stydy2}
                        </p>
                        <div className="abroad--left__text">
                            <h4>{translations[language].study3}</h4>
                            <h5>{translations[language].study4}</h5>
                            <h5>{translations[language].study5}</h5>
                            <h5>{translations[language].study6}</h5>
                            <h5>{translations[language].study7}</h5>
                            <h5>{translations[language].study8}</h5>
                            <h5>{translations[language].study9}</h5>
                            <h5>{translations[language].study10}</h5>
                            <h5>{translations[language].study11}</h5>
                            <h5>{translations[language].study12}</h5>
                        </div>
                        <NavLink to={'/choose'}>
                            <button>{translations[language].btn}</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abroad;