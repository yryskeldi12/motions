import React from 'react';
import './uninversity.scss'
import university from '../../../../src/Image/univer.svg'

const University = () => {
    return (
        <div id="university">
            <div className="container">
                <div className="university">
                    <div className="university--title">
                        <h1>Solbrige University</h1>
                        <img src={university} alt=""/>
                    </div>
                    <div className="university--text">
                        <div className="university--text__location">
                            <h1> <span>Location :</span>  Australia,Milan,Rim</h1>
                        </div>
                        <div className="university--text__date">
                            <h1><span>Date of foundation :</span>   1996</h1>
                        </div>
                        <div className="university--text__type">
                            <h1> <span>Type of programs  : </span>  Bachelor Course</h1>
                            <h2>Magistracy</h2>
                        </div>
                        <div className="university--text__spec">
                            <h1><span>Specialities : </span>  Fashion and Design</h1>
                            <h2>Jewerly design</h2>
                            <h2>Shoe design</h2>
                            <h2>Interior design</h2>
                            <h2>landscape design</h2>
                            <h2>Car design</h2>
                            <h2>Photography</h2>
                        </div>
                        <div className="university--text__language">
                            <h1><span>Language : </span>   english,Italian</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default University;