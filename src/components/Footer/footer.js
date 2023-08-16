import React from 'react';
import './footer.scss'
import logo from '../../Image/motion-footer.svg'
import {AiFillYoutube} from "react-icons/ai";
import {BiLogoInstagramAlt, BiLogoTelegram} from "react-icons/bi";



const Footer = () => {
    return (
        <div id ="footer">
            <div className="container">

                <div className="footer">
                    <div className="footer--text">
                        <div><img src={logo} alt=""/></div>
                        <div style={{
                            display:'flex'

                        }}> <h3>Home</h3>
                            <h3>About us</h3>
                            <h3>Study Abroad</h3>
                            <h3>Contacts</h3></div>
                        <div className="footer--icons">
                            <AiFillYoutube style={{width:"41", height:'27', margin:'0 10px 0 0'}}/>
                            <BiLogoTelegram style={{width:"41", height:'27', margin:'0 10px 0 0'}}/>
                            <BiLogoInstagramAlt style={{width:"41", height:'27', margin:'0'}}/>
                        </div>
                    </div>
                    <div className="footer--title">

                    </div>
                    <h1>c 2023 Motion Study LLC</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;