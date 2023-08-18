import React from 'react';
import './abroad.scss'
import abroad from "../../../Image/abroad.png"
import {NavLink} from "react-router-dom";

const Abroad = () => {
    return (
        <div id='abroad'>
            <div className="container">
                <h2><span className='span'>Study</span> Abroad</h2>

                <div className="abroad">
                    <div className="abroad--right">

                        <div className="abroad--right__img">
                            <img src={abroad} alt=""/>
                        </div>
                    </div>
                    <div className="abroad--left">
                        <p>
                            <span className="abroad--left__p">Motion study</span> for International Education offers its
                            clients various study abroad opportunities – language courses, secondary, professional and
                            higher education, professional development programmes for teachers and specialists of
                            companies and organizations.
                        </p>
                        <div className="abroad--left__text">
                            <h4>Our partners include:</h4>
                            <h5>-Universities and higher education establishments.</h5>
                            <h5>-Private schools and colleges.</h5>
                            <h5>-State schools and colleges.</h5>
                            <h5>-World known language schools for adults.</h5>
                            <h5> -International language schools for 7-18 y.o. <br/> schoolchildren.</h5>
                            <h5>-Business schools</h5>
                            <h5>-Executive centres</h5>
                            <h5>-Summer camps</h5>
                            <h5>-Guardianship companies</h5>
                        </div>
                        <NavLink to={'/choose'}>
                            <button>Explore</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abroad;