import React from "react";
import './index.scss'
import {CiLocationOn} from "react-icons/ci"
import {NavLink} from "react-router-dom";
import {holland} from "../index";
import {useDispatch} from "react-redux";
import {getPrREC} from "../../../../Store/Reducers/Action";


const Holland = () => {
    const dispatch = useDispatch()

    return (
        <section id="holland">
            <div className="container">
                <h1>United Stated</h1>
                <div className="holland--selects">
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
                    holland.map(el => (
                        <div className="holland" onClick={() => dispatch(getPrREC(el))}>
                            <img src={el.img} alt="img" />
                            <div className="holland--one">
                                <h4>Name:</h4>
                                <NavLink to="/tabs"><h3>{el.name}</h3></NavLink>
                            </div>
                            <div className="holland--one">
                                <h4>Location <CiLocationOn/></h4>
                                <h5>{el.Location}</h5>
                            </div>
                            <div className="holland--one">
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

export default Holland;