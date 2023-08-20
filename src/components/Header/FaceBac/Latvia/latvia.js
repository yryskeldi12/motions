import React from "react";
import './index.scss'
import {CiLocationOn} from "react-icons/ci"
import {NavLink} from "react-router-dom";
import {latvia} from "../index";


const Latvia = () => {
    return (
        <section id="latvia">
            <div className="container">
                <h1>United Stated</h1>
                <div className="latvia--selects">
                    <select name="" id="hello1">
                        <option value="#">Higher Education</option>
                        <option value="#">Secondary Education</option>
                        <option value="#">Higher Education</option>
                        <option value="#">language courses for youth</option>
                        <option value="#">chilren's language comps</option>
                    </select>
                    <select  name="" id="hello">
                        <option value="#">Specialization</option>
                        <option value="#">IT Technologies</option>
                        <option value="#">Bisiness</option>
                        <option value="#">Medicine</option>
                        <option value="#">International Relationships</option>
                        <option value="#">Tourism</option>
                    </select>
                    <select  name="" id="hello2">
                        <option value="#">Сountries</option>
                        <option value="#">America</option>
                        <option value="#">Germany</option>
                        <option value="#">INDONESIA</option>
                        <option value="#">South Korea</option>
                    </select>
                </div>
                {
                    latvia.map(el => (
                        <div className="latvia">
                            <img src={el.img} alt="img" />
                            <div className="latvia--one">
                                <h4>Name:</h4>
                                <NavLink to='/tabs'><h3>{el.name}</h3></NavLink>
                            </div>
                            <div className="latvia--one">
                                <h4>Location <CiLocationOn/></h4>
                                <h5>{el.Location}</h5>
                            </div>
                            <div className="latvia--one">
                                <h4>Age:</h4>
                                <h5>{el.age}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Latvia;