import './App.scss';
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Study from "./components/Study/study";
import Contacts from "./components/Contacts/contacts";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Block from "./components/Home/block/block";
import Exams from "./components/Home/Exams/exams";
import Our from "./components/About/our/our";
import Do from "./components/Home/do/do";
import English from "./components/Home/english/english";
import Paper from "./components/Home/paper/paper";
import What from "./components/Home/what/what";
import Loading from "./components/loading/loading";


function App() {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
        }, 3100)
    }, [])

    return (
        <>

            <Loading load={load}/>


            <div className="App" style={{
                display: load ? 'none' : 'block'
            }}>
        <Header/>
        <Block/>
        <Exams/>
        <About/>
        <Our/>
        <Do/>
        <English/>
        <Paper/>
        <What/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
        <Footer/>
    </div>
            </>
  );
}

export default App;
