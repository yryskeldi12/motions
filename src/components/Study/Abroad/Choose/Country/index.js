import React, {useState} from "react";
import "../Country/index.scss";
import {CiLocationOn} from "react-icons/ci";
import {data} from "../../../../Header/FaceBac";
import {Link, NavLink} from "react-router-dom";
import {getPrREC} from "../../../../../Store/Reducers/Action";
import {useDispatch} from "react-redux";
import america from "../../../../../Image/amertica.png";
import greatBritan from "../../../../../Image/greatBritan.svg";
import austria from "../../../../../Image/austria.svg";
import germany from "../../../../../Image/germany.svg";
import holland from "../../../../../Image/holland.svg";
import ireland from "../../../../../Image/ireland.svg";
import spain from "../../../../../Image/spain.svg";
import italy from "../../../../../Image/italy.svg";
import canada from "../../../../../Image/canada.svg";
import cyprus from "../../../../../Image/cyprus.svg";
import China from "../../../../../Image/China.svg";
import latvia from "../../../../../Image/latvia.svg";
import {useLanguage} from "../../../../LanguageFac/LanguageContext";

const Country = () => {
    const dispatch = useDispatch()

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = data.slice(startIndex, endIndex);
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

        <section id="country">
            <div className="container">
                <h1>{translations[language].muzic}</h1>

                <div className="country--selects">
                    <select>
                        <option value="#">{translations[language].muz2}</option>
                        <option value="#">{translations[language].muz5}</option>
                        <option value="#">{translations[language].muz6}</option>
                        <option value="#">{translations[language].muz7}</option>
                        <option value="#">{translations[language].muz8}</option>
                    </select>


                    <select name="" id="">
                        <option value="#">{translations[language].muz3}</option>
                        <option value="#">{translations[language].muz9}</option>
                        <option value="#">{translations[language].muz10}</option>
                        <option value="#">{translations[language].muz11}</option>
                        <option value="#">{translations[language].muz12}</option>
                        <option value="#">{}</option>
                    </select>
                    <div className="flag--select__options">
                        <select name="" id="">
                            <option value="#">{translations[language].muz4}</option>
                            <option value="#">{translations[language].muz13}</option>
                            <option value="#">{translations[language].muz14}</option>
                            <option value="#">{translations[language].muz15}</option>
                            <option value="#">{translations[language].muz16}</option>
                        </select>
                    </div>
                </div>
                {visibleData.map((el) => (
                    <div className="country" onClick={() => dispatch(getPrREC(el))}>
                        <img src={el.img} alt="img"/>
                        <div className="country--one">
                            <h4>Name:</h4>
                            <NavLink to="/tabs">
                                <h3>{el.name}</h3>
                            </NavLink>
                        </div>
                        <div className="country--one">
                            <h4>
                                Location <CiLocationOn/>
                            </h4>
                            <h5>{el.Location}</h5>
                        </div>
                        <div className="country--one">
                            <h4>Age:</h4>
                            <h5>{el.age}</h5>
                        </div>
                    </div>
                ))}
                <div className="pagination">
                    {Array.from({length: Math.ceil(data.length / itemsPerPage)}).map(
                        (item, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? "active" : ""}
                            >
                                {index + 1}
                            </button>
                        )
                    )}
                </div>
                <div className="pagination1">
                    <center>
                        <button
                            className="next-button"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={startIndex === 0}
                        >
                            Back
                        </button>
                        <button
                            className="next-button"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={endIndex >= data.length}
                        >
                            Next
                        </button>
                    </center>
                </div>
            </div>
        </section>
    );
};

export default Country;