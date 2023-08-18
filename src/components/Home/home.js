import React from 'react';
import './home.scss'
import Youtube from "./YouTube/youtube";
const Home = () => {
    return (
        <div>
            <Youtube/>
import Hero from "./Hero/hero";
import Block from "./block/block";
import Exams from "./Exams/exams";
import Youtube from "./YouTube/youtube";
import Message from "./Message";
const Home = () => {
    return (
        <div>
            <Hero/>
            <Block/>
            <Exams/>
            <Youtube/>
        </div>
    );
};

export default Home;