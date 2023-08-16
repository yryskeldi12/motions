import React from 'react';
import './paper.scss'
import paper from '../../../../src/Image/paper.svg'

const Paper = () => {
    return (
        <div id="paper">
            <div className="container">
                <div className="paper">
                    <div className="paper--title">
                        <h1>Other exams</h1>
                        <div className="paper--title__tome"></div>
                        <img src={paper} alt=""/>
                        <h2>Paper Exams –Third party</h2>
                        <section>Our office is also willing to proctor paper exams on behalf of other schools or private institutions. Please keep the following in mind:
                        </section>
                        <div className="paper--title__lol">
                            <p>Send over any proctor agreements as quickly as possible to avoid delays. You can e-mail us at:</p>
                            <p>When scheduling an exam, please allow time for the exam to be mailed to us.</p>
                            <p>Some schools & institutions require the client (you) to pay for return shipping. Please bring an envelope & postage for us to use.</p>
                            <p>Consider the time needed to mail the exam (each way) and grade the exam when scheduling appointments on tight deadlines</p>
                        </div>

                        <h3>ID Requirements</h3>
                        <h6>Each school & institution is different, consequently ID requirements are set by the school we proctor for. We encourage you to reach out to your program to find out what form of ID you need.</h6>
                        <h4>Frequently Asked Questions</h4>
                        <h5>Where can I park?</h5>
                        <div className="what--title__list">
                            <p>Parking information including instructions on how to pay for parking can be found <a
                                style={{color: '#002AC0', textDecorationLine: 'underline'}} href="https://studentaffairs.unt.edu/testing-services/parking">[here]</a>.</p>
                        </div>
                        <h5>What do I need to bring?</h5>
                        <div className="what--title__list">
                            <p>You will need to bring proper identification (see above) and a good attitude! A small snack or water is also encouraged. We will have everything else you will need to take the test.</p>
                        </div>
                        <h5>How long is the exam?</h5>
                        <div className="what--title__list">
                            <p>The exam time is dependent on the exam itself. Every exam we do for others' schools is different and a UT High School test is certainly different from the University of Buffalo.</p>
                        </div>
                        <h5>Where will I store my personal belongings during the test?</h5>
                        <div className="what--title__list">
                            <p>You will be provided a secure locker for your personal belongings before testing begins</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paper;