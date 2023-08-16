import React, {useState} from "react";
import "./hero.scss";
import heroSmImg1 from "../../../Image/Hero-3.png";
import heroSmImg2 from "../../../Image/Hero-6.png"
import heroLgImg1 from "../../../Image/Hero-5.png";
import heroLgImg2 from "../../../Image/Hero-4.png";
import heroContactImg1 from "../../../Image/Hero-1.png";
import heroContactImg2 from "../../../Image/Hero-2.png";
import {CiSearch} from "react-icons/ci";
import {NavLink} from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import video from  '../../../Image/video.webm'

const Hero = () => {
    const [searchContent, setSearchContent] = useState(false);

    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <NavLink className="hero-search" onClick={() => setSearchContent(true)}>
                        <CiSearch className="hero-search_icon"/>
                        <input type="text" placeholder="Поиск..."/>
                        {searchContent && (
                            <OutsideClickHandler
                                onOutsideClick={() => setSearchContent(false)}
                            >
                                <div id="search-wrap">
                                    <div className="search-content">
                                        <NavLink className="search-content_item">United States</NavLink>
                                        <NavLink className="search-content_item">Korea</NavLink>
                                        <NavLink className="search-content_item">Australia</NavLink>
                                        <NavLink className="search-content_item">Malaysia</NavLink>
                                        <NavLink className="search-content_item">Germany</NavLink>
                                    </div>
                                </div>
                            </OutsideClickHandler>
                        )}
                    </NavLink>
                    <div className="hero-desc">
                        <h3 className="hero-desc_subtitle">Explore the world</h3>
                        <h1 className="hero-desc_title">Study abroad with our help</h1>
                        <p>
                            Study at at the world's top universities and expand your horizons.
                            Get the highest quality education and achieve success abroad.
                        </p>
                            <video autoPlay loop muted src={video}></video>

                    </div>
                    <div className="hero-block">
                        <div className="hero-block_sm-img sm-1">
                            <img src={heroSmImg1} alt="" />
                        </div>
                        <div className="hero-block_lg-img lg-1">
                            <img src={heroLgImg1} alt="" />
                        </div>
                        <div className="hero-block_lg-img lg-2">
                            <img src={heroLgImg2} alt="" />
                        </div>
                        <div className="hero-block_sm-img sm-2">
                            <img src={heroSmImg2} alt="" />
                        </div>
                        <div className="hero-block_blur-top">
                            <div></div>
                        </div>
                        <div className="hero-block_blur-bottom">
                            <div></div>
                        </div>
                    </div>
                    <div className="hero-contact">
                        <div className="hero-contact_group">
                            <div className="hero-contact_group-bg">
                                <img src={heroContactImg1} alt="" />
                            </div>
                            <div className="hero-contact_group-desc">
                                <h5>NAME</h5>
                                <input type="text" placeholder="|Enter your name" />
                            </div>
                        </div>
                        <div className="hero-contact_group">
                            <div className="hero-contact_group-bg">
                                <img src={heroContactImg2} alt="" />
                            </div>
                            <div className="hero-contact_group-desc">
                                <h5>PHONE</h5>
                                <input type="text" placeholder="Enter your phone" />
                            </div>
                        </div>
                        <button className="hero-contact_btn">Сontact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
