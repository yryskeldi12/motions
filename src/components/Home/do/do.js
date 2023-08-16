import React from 'react';
import './do.scss'
import von from '../../../../src/Image/do.svg'
import {FaCheck} from "react-icons/fa";


const Do = () => {
    return (
        <div id="do">
            <div className="container">
                <div className="do">
                    <div className="do--title">
                        <h1>Cambridge English Exam</h1>
                        <div className="do--title__tome"></div>
                        <img src={von} alt=""/>
                        <h2>Who are the Cambridge English exams for?.</h2>
                        <p>The Cambridge English exams are strongly recommended for anyone who plans to work in international business or study and/or work overseas. Wherever life takes you, you will be able to prove your English level with your Cambridge Certificate
                        </p>
                        <h3>What do the Cambridge exams involve?</h3>
                        <h4>Official recognition</h4>
                        <p>Cambridge English Qualifications are accepted worldwide. They are a mark of excellence trusted by thousands of leading higher education institutions, governments and employers. With a Cambridge English Qualification, you'll open doors to a world of opportunities – literally!</p>
                        <p>When you pass the exam, you'll be awarded a certificate delivered by Cambridge Assessment English, the ESOL accreditation body of the University of Cambridge. Each year, more than 300,000 people from over 100 different countries choose to sit a Cambridge exam\.</p>
                        <h6>Depending on the level you are looking to achieve, you might choose from one of the following exam preparation courses:</h6>
                        <div style={{display: 'flex'}}>
                            <FaCheck/> <li>B2 FIRST (FCE)</li>
                        </div>
                        <div style={{display: 'flex'}}>
                            <FaCheck/> <li>C1 ADVANCEdD (CAE)</li>
                        </div>
                        <div style={{display: 'flex'}}>
                            <FaCheck/> <li>C2 PROFICIENCY (CPE)</li>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Do;