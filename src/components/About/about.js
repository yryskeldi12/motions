import React from 'react';
import './about.scss'
import about from '../../../src/Image/about.svg'
// import Our from "./our";
const AboutUs = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about--images">
                        <div className="about--images__motion">
                            <img src={about} alt=""/>
                        </div>
                    </div>
                    <div className="about--title">
                        <h3>About Us</h3>
                        <h1>Best Education
                            Platform</h1>
                        <h5>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</h5>
                        <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.</p>
                    </div>
                </div>
            </div>
            {/*<Our/>*/}
        </div>
    );
};

export default AboutUs;