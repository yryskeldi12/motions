import './App.scss';
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Study from "./components/Study/study";
import Contacts from "./components/Contacts/contacts";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Flag from "./components/Study/Abroad/Choose/Flag";
import Country from "./components/Study/Abroad/Choose/Country";
import Loading from "./components/loading/loading";
import English from "./components/Home/english/english";
import Do from "./components/Home/do/do";
import What from "./components/Home/what/what";
import Paper from "./components/Home/paper/paper";
import Tabs from "./components/Tabs/tabs";
import Choose from "./components/Study/Abroad/Choose";
import University from "./components/Home/university/university";

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
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/english" element={<English/>}/>
                    <Route path="/do" element={<Do/>}/>
                    <Route path="/what" element={<What/>}/>
                    <Route path="/paper" element={<Paper/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/study" element={<Study/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/choose" element={<Choose/>}/>
                    <Route path="/country" element={<Country/>}/>
                    <Route path="/tabs" element={<Tabs/>}/>
                </Routes>
                <Footer/>
            </div>
        </>
    );
}

export default App;
