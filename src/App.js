import './App.scss';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Study from "./components/Study/study";
import Contacts from "./components/Contacts/contacts";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Message from './components/Home/Message';


function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
