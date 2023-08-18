import React from 'react';
import './home.scss'
import Youtube from "./YouTube/youtube";
import Hero from "./Hero/hero";
import Block from "./block/block";
import Exams from "./Exams/exams";
import Message from "./Message";


const Home = () => {
    return (
        <div>
            <Hero/>
            <Block/>
            <Exams/>
            <Youtube/>
            <Message/>
        </div>
    );
};

export default Home;