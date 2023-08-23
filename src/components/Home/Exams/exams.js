import React from 'react';
import './exams.scss'
import your from '../../../../src/Image/your.svg'
import need from '../../../../src/Image/need.svg'
import home from '../../../../src/Image/here.svg'
import oper from '../../../../src/Image/oper.svg'
import {NavLink} from "react-router-dom";
import iii from '../../../../src/Image/iiiiiiii.svg'
import bbb from '../../../../src/Image/bbb.svg'
import fff from '../../../../src/Image/fff.svg'
import {useLanguage} from "../../LanguageFac/LanguageContext";

const Exams = () => {
    const {language} = useLanguage()
    const translations = {
        EN :{
            name1: "Exams",
            en: "Exams are tests that assess a person's knowledge, skills, aptitude, or other qualifications in a specific subject or area of study. They are used to evaluate academic performance.",
            en2: "cambrige English exams",
            en3: "Your path to learning English, step by step.",
            en4: "Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and rewarding.Our qualifications are based on research into effectiveteaching and learning.",
            en5: "Discover more",
            en6: "aptis",
            en7: "Choose Aptis for your assessment needs",
            en8: "Aptis is a computer basedtest which provides fast results reliably marked by our exsaminest.",
            en9: "Here’s all you need to know about IELTS",
            en10: "IELTS (the International English Language Testing is the world’s most popular.",
            en11: "There are a variety of competitive exams besides.",
            en12: "But covering them is no big deal. Just study ncert books for these.",
        },
        RU: {
            name1: "Экзамены",
            en: "Экзамены — это тесты, которые оценивают знания, навыки, способности или другие квалификации человека по конкретному предмету или области обучения. Они используются для оценки успеваемости.",
            en2: "Кембриджские экзамены по английскому языку",
            en3: "Ваш путь к изучению английского языка шаг за шагом.",
            en4: "Cambridge English Qualifications — это углубленные экзамены.которые делают изучение английского языка приятным, эффективным и полезным.Наша квалификация основана на исследованиях эффективныхучить и учиться.",
            en5: "Открой для себя больше",
            en6: "аптис",
            en7: "Выберите Aptis для вашего потребности в оценке",
            en8: "Выберите Aptis для вашего потребности в оценке",
            en9: "Вот все, что вам нужно знать об IELTS",
            en10: "IELTS (Международное тестирование по английскому языку – самое популярное в мире.",
            en11: "Кроме того, проводятся различные конкурсные экзамены.",
            en12: "Но прикрывая их в этом нет ничего страшного. Просто изучите эти книги.",

        }
    };
    return (
        <div id="exams">
            <div className="container">
                <div className="exams">
                    <div className="exams--title">
                        <center>
                            <h1>{translations[language].name1}</h1>
                            <p>{translations[language].en}</p>
                        </center>
                    </div>
                    <div className="exams--text">
                        <div className="exams--text__name">
                            <img src={your} alt=""/>
                            <div className="exams--text__name--nom">
                                <h2>{translations[language].en2}</h2>
                                <h1>{translations[language].en3}</h1>
                                <p>{translations[language].en4}</p>
                            </div>

                            <NavLink to="/do"><h3>{translations[language].en5}</h3></NavLink>
                        </div>
                        <div className="exams--text__aptis">
                            <div className="exams--text__aptis--for">
                                <div className="exams--text__aptis--for__hello">
                                    <div className="exams--text__aptis--for__hello--img">
                                        <NavLink to="/what"> <img width={240} height={161} style={{margin: '0 -10px 0 5px'}} src={need} alt=""/></NavLink>
                                   <div className="exams--text__aptis--for__hello--img__bbb">
                                       <NavLink to="/what"><img src={bbb} alt=""/></NavLink>
                                   </div>
                                    </div>
                                    <div className="exams--text__aptis--for__hello--nomer">
                                        <button>{translations[language].en6}</button>
                                        <h1>{translations[language].en7}</h1>
                                        <p>{translations[language].en8}</p>
                                    </div>
                                </div>
                                <div className="exams--text__aptis--for__hello">
                                    <div className="exams--text__aptis--for__hello--is">
                                        <NavLink to="/english"><img width={190} height={161} style={{margin: '0 20px 0 25px'}} src={home} alt=""/></NavLink>
                                        <div className="exams--text__aptis--for__hello--is__iii">
                                           <NavLink to="./english"><img src={iii} alt=""/></NavLink>
                                        </div>
                                    </div>
                                    <div className="exams--text__aptis--for__hello--nomer">
                                        <button>IELTS</button>
                                        <h1>{translations[language].en9}</h1>
                                        <p>{translations[language].en10}
                                        </p>
                                    </div>
                                </div>
                                <div className="exams--text__aptis--for__hello">
                                    <div className="exams--text__aptis--for__hello--it">
                                        <NavLink to="/paper"><img  width={190} height={161} style={{margin: '0 20px 0 25px'}} src={oper} alt=""/></NavLink>
                                    <div className="exams--text__aptis--for__hello--it__fff">
                                       <NavLink to="/paper"> <img src={fff} alt=""/></NavLink>
                                    </div>
                                    </div>
                                    <div className="exams--text__aptis--for__hello--nomer">
                                        <button>other exams</button>
                                        <h1>{translations[language].en11}</h1>
                                        <p>{translations[language].en12}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exams;