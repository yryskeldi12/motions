import React from 'react';
import './our.scss'
import miss from '../../../../src/Image/miss.svg'
import men from '../../../../src/Image/men.svg'
import women from '../../../../src/Image/women.svg'
import rahul from '../../../../src/Image/rahul.svg'
import g from '../../../../src/Image/g.svg'
import head from '../../../../src/Image/head.svg'
const Our = () => {
    return (
        <div id="our">
            <div className="container">
                <div className="our">
                    <div className="our--text">
                        <center>
                            <h1>Our Team</h1>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our;