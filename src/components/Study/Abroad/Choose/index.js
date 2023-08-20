import React from "react";
import './index.scss'
import america from "../../../../Image/amertica.png";
import greatBritan from "../../../../Image/greatBritan.svg";
import austria from "../../../../Image/austria.svg";
import germany from "../../../../Image/germany.svg";
import holland from "../../../../Image/holland.svg";
import ireland from "../../../../Image/ireland.svg";
import spain from "../../../../Image/spain.svg";
import italy from "../../../../Image/italy.svg";
import canada from "../../../../Image/canada.svg";
import cyprus from "../../../../Image/cyprus.svg";
import China from "../../../../Image/China.svg";
import latvia from "../../../../Image/latvia.svg";
import { Link } from "react-router-dom";



const Flag = () => {
    return (
        <section id="flag">

            <div className="container">
                <h1>Choose the country</h1>
                <div className="flag">
                    <div className="flag--select">
                        <select>
                            <option value="#">Higher Education</option>
                            <option value="#">Secondary Education</option>
                            <option value="#">Higher Education</option>
                            <option value="#">language courses for youth</option>
                            <option value="#">chilren's language comps</option>
                        </select>


                        <select name="" id="">
                            <option value="#">Specialization</option>
                            <option value="#">IT Technologies</option>
                            <option value="#">Bisiness</option>
                            <option value="#">Medicine</option>
                            <option value="#">International Relationships</option>
                            <option value="#">Tourism</option>
                        </select>
                        <div className="flag--select__options">
                            <select name="" id="">
                                <option value="#">Сountries</option>
                                <option value="#">America</option>
                                <option value="#">Germany</option>
                                <option value="#">INDONESIA</option>
                                <option value="#">South Korea</option>
                            </select>
                        </div>
                    </div>
                    <div className="flag--block">
                        <Link to={"/country"}>
                            <div className="flag--block__one">
                                <img src={america} alt="img" />
                                <h2>America</h2>
                            </div>
                        </Link>

                        <Link to={"/britan"}>
                            <div className="flag--block__one">
                                <img src={greatBritan} alt="img" />
                                <h2>Great Britain</h2>
                            </div>
                        </Link>
                        <Link to={"/austria"}>
                            <div className="flag--block__one">
                                <img src={austria} alt="img" />
                                <h2>Austria</h2>
                            </div>
                        </Link>
                         <Link to={"/germany"}>
                            <div className="flag--block__one">
                                <img src={germany} alt="img" />
                                <h2>germany</h2>
                            </div>
                        </Link>
                        <Link to={"/holland"}>
                            <div className="flag--block__one">
                                <img src={holland} alt="img" />
                                <h2>Holland</h2>
                            </div>
                        </Link>
                        <Link to={"/ireland"}>
                            <div className="flag--block__one">
                                <img src={ireland} alt="img" />
                                <h2>Ireland</h2>
                            </div>
                        </Link>
                        <Link to={"/spain"}>
                            <div className="flag--block__one">
                                <img src={spain} alt="img" />
                                <h2>Spain</h2>
                            </div>
                        </Link>
                        <Link to={"/italy"}>
                            <div className="flag--block__one">
                                <img src={italy} alt="img" />
                                <h2>Italy</h2>
                            </div>
                        </Link>
                        <Link to={"/canada"}>
                            <div className="flag--block__one">
                                <img src={canada} alt="img" />
                                <h2>Canada</h2>
                            </div>
                        </Link>
                         <Link to={"/cyprus"}>
                            <div className="flag--block__one">
                                <img src={cyprus} alt="img" />
                                <h2>Cyprus</h2>
                            </div>
                        </Link>
                        <Link to={"/china"}>
                            <div className="flag--block__one">
                                <img src={China} alt="img" />
                                <h2>China</h2>
                            </div>
                        </Link>
                        <Link to={"/latvia"}>
                            <div className="flag--block__one">
                                <img src={latvia} alt="img" />
                                <h2>Latvia</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flag;