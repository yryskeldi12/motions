import React from 'react';
import './our.scss'
import miss from '../../../../src/Image/miss.svg'
import men from '../../../../src/Image/men.svg'
import women from '../../../../src/Image/women.svg'
import rahul from '../../../../src/Image/rahul.svg'
import g from '../../../../src/Image/g.svg'
import head from '../../../../src/Image/head.svg'
import kk from '../../../../src/Image/kk.svg'
import oc from '../../../../src/Image/oc.svg'
import jh from '../../../../src/Image/jh.svg'
import kal from '../../../../src/Image/kal.svg'
import kug from '../../../../src/Image/kug.svg'
import zub from '../../../..//src/Image/zub.svg'
import {useLanguage} from "../../LanguageFac/LanguageContext";
const Our = () => {

    const {language} = useLanguage()
    const translations = {
        EN :{
            our:'Our Team'

        },
        RU: {
            our:'Наша команда'
        }
    };




    return (
        <div id="our">
            <div className="container">
                <div className="our">
                    <div className="our--text">
                        <center>
                            <h1>{translations[language].our}</h1>
                        </center>
                    </div>
                    <div className="our--title">
                        <div className="our--title__miss">
                            <div className="our--title__miss--mr">
                                <div className="our--title__miss--mr__fotos">
                                    <img src={miss} alt=""/>
                                    <h1>Miss.Anushin oont </h1>
                                    <p>CEO & co-Founder</p>
                                </div>
                                <div className="our--title__miss--mr__fotos">
                                    <img src={men} alt=""/>
                                    <h1>mr.Vishmas s.   </h1>
                                    <p>CTO & co-Founder</p>
                                </div>
                                <div className="our--title__miss--mr__fotos">
                                    <img src={women} alt=""/>
                                    <h1>Miss.Tanisha kaduu  </h1>
                                    <p>VP Of Technology</p>
                                </div>
                            </div>
                            <div className="our--title__miss--kl">
                                <div className="our--title__miss--mr__fotos">
                                    <img src={rahul} alt=""/>
                                    <h1>Mr.KL Rahul  </h1>
                                    <p>Head of design</p>
                                </div>
                                <div className="our--title__miss--mr__fotos">
                                    <img src={g} alt=""/>
                                    <h1>Miss.vashika g. </h1>
                                    <p>vP Of Finance</p>
                                </div>
                                <div className="our--title__miss--mr__fotos">
                                    <img src={head} alt=""/>
                                    <h1>Mr.Aryan Singh   </h1>
                                    <p>Head of Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="our--title__mister">
                            <div className="our--title__mister--mr">
                                <div className="our--title__mister--mr__fotos">
                                    <img src={kk} alt=""/>
                                    <h1>Miss.Anushin oont </h1>
                                    <p>CEO & co-Founder</p>
                                </div>
                                <div className="our--title__mister--mr__fotos">
                                    <img src={oc} alt=""/>
                                    <h1>mr.Vishmas s.   </h1>
                                    <p>CTO & co-Founder</p>
                                </div>
                                <div className="our--title__mister--mr__fotos">
                                    <img src={jh} alt=""/>
                                    <h1>Miss.Tanisha kaduu  </h1>
                                    <p>VP Of Technology</p>
                                </div>
                            </div>
                            <div className="our--title__mister--kl">
                                <div className="our--title__mister--kl__fotos">
                                    <img src={kal} alt=""/>
                                    <h1>Mr.KL Rahul  </h1>
                                    <p>Head of design</p>
                                </div>
                                <div className="our--title__mister--kl__fotos">
                                    <img src={kug} alt=""/>
                                    <h1>Miss.vashika g. </h1>
                                    <p>vP Of Finance</p>
                                </div>
                                <div className="our--title__mister--kl__fotos">
                                    <img src={zub} alt=""/>
                                    <h1>Mr.Aryan Singh   </h1>
                                    <p>Head of Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our;