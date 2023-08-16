import React from 'react';
import './exams.scss'
import your from '../../../../src/Image/your.svg'
import need from '../../../../src/Image/need.svg'
import home from '../../../../src/Image/here.svg'
import oper from '../../../../src/Image/oper.svg'
import {NavLink} from "react-router-dom";
const Exams = () => {
    return (
        <div id="exams">
            <div className="container">
                <div className="exams">
                    <div className="exams--title">
                        <center>
                            <h1>exams</h1>
                            <p>
                                Exams are tests that assess a person's knowledge, skills, aptitude, or other qualifications in a specific subject or area of study. They are used to evaluate academic performance.
                            </p>
                        </center>
                    </div>
                    <div className="exams--text">
                        <div className="exams--text__name">
                            <img src={your} alt=""/>
                            <div className="exams--text__name--nom">
                                <h2>cambrige English exams</h2>
                                <h1>Your path to learning English, step by step.</h1>
                                <p>Cambridge English Qualifications are in-depth exams
                                    that make learning English enjoyable, effective and rewarding.
                                    Our qualifications are based on research into effective
                                    teaching and learning.</p>
                            </div>

                            <NavLink to="/do"><h3>Discover more</h3></NavLink>
                        </div>
                        <div className="exams--text__aptis">
                            <div className="exams--text__aptis--for">
                                <div className="exams--text__aptis--for__hello">
                                    <div className="exams--text__aptis--for__hello--img">
                                        <NavLink to="/what"> <img width={235} height={161} src={need} alt=""/></NavLink>
                                    </div>
                                    <div className="exams--text__aptis--for__hello--nomer">
                                        <button>aptis</button>
                                        <h1>Choose Aptis for your
                                            assessment needs</h1>
                                        <p>Aptis is a computer basedtest which provides fast
                                            results reliably marked by our exsaminest.
                                        </p>
                                    </div>
                                </div>
                                <div className="exams--text__aptis--for__hello">
                                    <div className="exams--text__aptis--for__hello--img">
                                        <NavLink to="/english"><img width={190} height={161} style={{margin: '0 20px 0 15px'}} src={home} alt=""/></NavLink>
                                    </div>
                                    <div className="exams--text__aptis--for__hello--nomer">
                                        <button>IELTS</button>
                                        <h1>Here’s all you need to know about IELTS</h1>
                                        <p>IELTS (the International English Language Testing
                                            is the world’s most popular.
                                        </p>
                                    </div>
                                </div>
                                <div className="exams--text__aptis--for__hello">
                                    <div className="exams--text__aptis--for__hello--img">
                                        <NavLink to="/paper"><img  width={190} height={161} style={{margin: '0 20px 0 15px'}} src={oper} alt=""/></NavLink>
                                    </div>
                                    <div className="exams--text__aptis--for__hello--nomer">
                                        <button>other exams</button>
                                        <h1>There are a variety of competitive exams besides.</h1>
                                        <p>But covering them
                                            is no big deal. Just study ncert books for these.
                                        </p>
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