import React from 'react';
import './footer.scss'
import logo from '../../Image/motion-footer.svg'
import {AiFillYoutube} from "react-icons/ai";
import {BiLogoInstagramAlt, BiLogoTelegram} from "react-icons/bi";
import {useLanguage} from "../LanguageFac/LanguageContext";



const Footer = () => {

    const {language} = useLanguage()
    const translations = {
        EN :{
            home:'Home',
            about:'About us',
            study:'Study Abroad',
            contact:"Contacts"
        },
        RU: {
            home:'Дом',
            about:'О нас',
            study:'Учеба за границей',
            contact:"Контакты"
        }
    };

    return (
        <div id ="footer">
            <div className="container">

                <div className="footer">
                    <div className="footer--text">
                        <div><img src={logo} alt=""/></div>
                        <div style={{
                            display:'flex'

                        }}> <h3>{translations[language].home}</h3>
                            <h3>{translations[language].about}</h3>
                            <h3>{translations[language].study}</h3>
                            <h3>{translations[language].contact}</h3></div>
                        <div className="footer--icons">
                            <AiFillYoutube style={{width:"41", height:'27', margin:'0 10px 0 0'}}/>
                            <BiLogoTelegram style={{width:"41", height:'27', margin:'0 10px 0 0'}}/>
                            <BiLogoInstagramAlt style={{width:"41", height:'27', margin:'0'}}/>
                        </div>
                    </div>
                    <div className="footer--title">

                    </div>
                    <h1>c 2023 Motion Study LLC</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;