import React from 'react';
import './block.scss'
import are from '../../../../src/Image/are.svg'
import book from '../../../../src/Image/book.png'
import prices from '../../../../src/Image/fer/Frame 71.png'
import cook from '../../../../src/Image/Frame 66/Frame 71.png'
import well from '../../../../src/Image/Frame 66/study4'

const Block = () => {
    return (
        <div id="block">
            <div className="container">
                <div className="block">
                    <div className="block--other">
                        <h1>This is why we are <br/>
                            best from others</h1>
                        <p>We provide full support at all stages of preparation, including assistance in filing documents and preparing for an interview. Contact us  and start your journey to higher education abroad!</p>
                        <div className="block--other__fot">
                            <img src={are} alt=""/>
                        </div>

                    </div>
                    <div className="block--time">
                        <div className="block--time__help">
                            <div className="block--time__help--over">
                                <div className="block--time__help--over__we">
                                    <img src={book} alt=""/>
                                    <h1>1000+ Partners</h1>
                                    <p>over 1000+ partners worldwide
                                        enter the best universities in the world</p>
                                </div>
                            </div>
                            <div className="block--time__help--over">
                                <div className="block--time__help--over__we">
                                    <img src={prices} alt=""/>
                                    <h1>Experts</h1>
                                    <p>We are experts in our field. help
                                        you reach new heights</p>
                                </div>
                            </div>
                        </div>
                        <div className="block--time__helps">
                            <div className="block--time__helps--overs">
                                <div className="block--time__helps--overs__he">
                                    <img src={cook} alt=""/>
                                    <h1>Time</h1>
                                    <p>we will help you save your time and nerves when applying to the best university.</p>
                                </div>
                            </div>
                            <div className="block--time__helps--overs">
                                <div className="block--time__helps--overs__he">
                                    <img src={well} alt=""/>
                                    <h1>Affordable prices</h1>
                                    <p>reasonable prices will always
                                        please you. sign up for a consultation</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;