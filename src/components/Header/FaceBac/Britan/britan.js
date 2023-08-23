import React, {useState} from "react";
import './index.scss'
import {CiLocationOn} from "react-icons/ci"
import {NavLink} from "react-router-dom";
import {britan} from "../index";
import {useDispatch} from "react-redux";
import {getPrREC} from "../../../../Store/Reducers/Action";
import {useLanguage} from "../../../LanguageFac/LanguageContext";


const Britan = () => {
    const dispatch = useDispatch()

    const {language} = useLanguage()

    const translations = {
        EN: {
            muz: "Choose the country",
            muz2: "Secondary Education",
            muz3: "Specialization",
            muz4: "Сountries",
            muz5: "Secondary Education",
            muz6: "Higher Education",
            muz7: "language courses for youth",
            muz8: "chilren's language comps",
            muz9: "IT Technologies",
            muz10: "Bisiness",
            muz11: "Medicine",
            muz12: "International Relationships",
            muz13: "America",
            muz14: "Germany",
            muz15: "INDONESIA",
            muz16: "South Korea",
            muz17: "America",
            muz18: "Great Britain",
            muz19: "Austria",
            muz20: "Germany",
            muz21: "Holland",
            muz22: "Ireland",
            muz23: "Spain",
            muz24: "Italy",
            muz25: "Canada",
            muz26: "Cyprus",
            muz27: "China",
            muz28: "Latvia",
            muzic: "United States"
        },
        RU: {
            muz: "Выберите страну",
            muz2: "Среднее образование",
            muz3: "специализация",
            muz4: "Страны",
            muz5: "Среднее образование",
            muz6: "Высшее образование",
            muz7: "языковые курсы для молодежи",
            muz8: "детские языковые курсы",
            muz9: "ИТ-технологии",
            muz10: "Бизнес",
            muz11: "медицина",
            muz12: "Международные отношения",
            muz13: "Америка",
            muz14: "Германия",
            muz15: "ИНДОНЕЗИЯ",
            muz16: "Южная Корея",
            muz17: "Америка",
            muz18: "Великобритания",
            muz19: "Австрия",
            muz20: "Германия",
            muz21: "Голландия",
            muz22: "Ирландия",
            muz23: "Испания",
            muz24: "Италия",
            muz25: "Канада",
            muz26: "Кипр",
            muz27: "Китай",
            muz28: "Латвия",
            muzic: "Соединенные Штаты"
        }
    };

    return (
        <section id="britan">
            <div className="container">
                <h1>{translations[language].muzic}</h1>
                <div className="britan--selects">
                    <select name="" id="hello1">
                        <option value="#">{translations[language].muz2}</option>
                        <option value="#">{translations[language].muz5}</option>
                        <option value="#">{translations[language].muz6}</option>
                        <option value="#">{translations[language].muz7}</option>
                        <option value="#">{translations[language].muz8}</option>
                    </select>
                    <select name="" id="hello">
                        <option value="#">{translations[language].muz3}</option>
                        <option value="#">{translations[language].muz9}</option>
                        <option value="#">{translations[language].muz10}</option>
                        <option value="#">{translations[language].muz11}</option>
                        <option value="#">{translations[language].muz12}</option>
                        <option value="#">{translations[language].muz13}</option>
                    </select>
                    <select name="" id="hello2">
                        <option value="#">{translations[language].muz4}</option>
                        <option value="#">{translations[language].muz13}</option>
                        <option value="#">{translations[language].muz14}</option>
                        <option value="#">{translations[language].muz15}</option>
                        <option value="#">{translations[language].muz16}</option>
                    </select>
                </div>
                {
                    britan.map(el => (
                        <div className="britan" onClick={() => dispatch(getPrREC(el))}>
                            <img src={el.img} alt="img"/>
                            <div className="britan--one">
                                <h4>Name:</h4>
                                <NavLink to="/tabs"><h3>{el.name}</h3></NavLink>
                            </div>
                            <div className="britan--one">
                                <h4>Location <CiLocationOn/></h4>
                                <h5>{el.Location}</h5>
                            </div>
                            <div className="britan--one">
                                <h4>Age:</h4>
                                <h5>{el.age}</h5>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default Britan;