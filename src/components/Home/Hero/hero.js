import React, {useState} from "react";
import "./hero.scss";
import heroSmImg1 from "../../../Image/Hero-3.png";
import heroSmImg2 from "../../../Image/Hero-6.png"
import heroLgImg1 from "../../../Image/Hero-5.png";
import heroLgImg2 from "../../../Image/Hero-4.png";
import heroContactImg1 from "../../../Image/Hero-1.png";
import heroContactImg2 from "../../../Image/Hero-2.png";
import {CiSearch} from "react-icons/ci";
import {NavLink} from "react-router-dom";
import video from  '../../../Image/video.webm'
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import {useLanguage} from "../../LanguageFac/LanguageContext";


const Hero = () => {
    const [searchContent, setSearchContent] = useState(false);
    const {language} = useLanguage()

    const translations = {
        EN :{
            title: "Explore the world",
            name: "Study abroad with our help",
            title1: "Study at the worlds top universities and expand your horizons. Get the highest quality education and achieve success abroad.",
            name1: "This Is Why We Are Best From Others",
            name2:'NAME',
            phone:'PHONE',
            enter:'|Enter your name',
            phone1:'Enter your phone',
            cont:'Сontact'
        },
        RU: {
            title: "Исследовать мир",
            name: "Обучение за границей с нашей помощью",
            title1: "Учитесь в лучших университетах мира и расширяйте свой кругозор. Получите высшее качественное образование и добейтесь успеха за границей.",
            name1: "Вот почему мы Лучшее от других",
            name2:'ИМЯ',
            phone:'ТЕЛЕФОН',
            enter:'|Введите свое имя',
            phone1:'Введите свой телефон',
            cont:'Контакты'

        }
    };
    return (

        <div id="hero">
            <div className="container">
                <div className="hero">
                    <NavLink className="hero-search" onClick={() => setSearchContent(true)}>
                        <CiSearch className="hero-search_icon"/>
                        <input type="text" placeholder="Поиск..."/>
                        {searchContent && (
                            <OutsideClickHandler
                                onOutsideClick={() => setSearchContent(false)}
                            >
                                <div id="search-wrap">
                                    <div className="search-content">
                                        <NavLink className="search-content_item">United States</NavLink>
                                        <NavLink className="search-content_item">Korea</NavLink>
                                        <NavLink className="search-content_item">Australia</NavLink>
                                        <NavLink className="search-content_item">Malaysia</NavLink>
                                        <NavLink className="search-content_item">Germany</NavLink>
                                    </div>
                                </div>
                            </OutsideClickHandler>
                        )}
                    </NavLink>
                    <div className="hero-desc">
                        <h3 className="hero-desc_subtitle">{translations[language].title}</h3>
                        <h1 className="hero-desc_title">{translations[language].name}</h1>
                        <p>{translations[language]?.title1}</p>
                            <video autoPlay loop muted src={video}></video>

                    </div>
                    <div className="hero-block">
                        <div className="hero-block_sm-img sm-1">
                            <img src={heroSmImg1} alt="" />
                        </div>
                        <div className="hero-block_lg-img lg-1">
                            <img src={heroLgImg1} alt="" />
                        </div>
                        <div className="hero-block_lg-img lg-2">
                            <img src={heroLgImg2} alt="" />
                        </div>
                        <div className="hero-block_sm-img sm-2">
                            <img src={heroSmImg2} alt="" />
                        </div>
                        <div className="hero-block_blur-top">
                            <div></div>
                        </div>
                        <div className="hero-block_blur-bottom">
                            <div></div>
                        </div>
                    </div>
                    <div className="hero-contact">
                        <div className="hero-contact_group">
                            <div className="hero-contact_group-bg">
                                <img src={heroContactImg1} alt="" />
                            </div>
                            <div className="hero-contact_group-desc">
                                <h5>{translations[language].name2}</h5>
                                <input type="text" placeholder={translations[language].enter} />
                            </div>
                        </div>
                        <div className="hero-contact_group">
                            <div className="hero-contact_group-bg">
                                <img src={heroContactImg2} alt="" />
                            </div>
                            <div className="hero-contact_group-desc">
                                <h5>{translations[language].phone}</h5>
                                <input type="text" placeholder={translations[language].phone1} />
                            </div>
                        </div>
                        <button className="hero-contact_btn">{translations[language].cont}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
