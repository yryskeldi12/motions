import './App.scss';
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Study from "./components/Study/study";
import Contacts from "./components/Contacts/contacts";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Country from "./components/Study/Abroad/Choose/Country";
import English from "./components/Home/english/english";
import Do from "./components/Home/do/do";
import What from "./components/Home/what/what";
import Paper from "./components/Home/paper/paper";
import Tabs from "./components/Tabs/tabs";
import Choose from "./components/Study/Abroad/Choose";
import Germany from "./components/Header/FaceBac/germany/germany";
import Austria from "./components/Header/FaceBac/Austria/Austria";
import Britan from "./components/Header/FaceBac/Britan/britan";
import Canada from "./components/Header/FaceBac/Canada/canada";
import China from "./components/Header/FaceBac/China/china";
import Cyrpus from "./components/Header/FaceBac/Cyrpus/cyrpus";
import Holland from "./components/Header/FaceBac/Holland/holland";
import Italy from "./components/Header/FaceBac/Italy/italy";
import Latvia from "./components/Header/FaceBac/Latvia/latvia";
import Spain from "./components/Header/FaceBac/Spain/spain";
import Ireland from "./components/Header/FaceBac/Ireland/ireland";
import Loading from "./components/loading/loading";
import {LanguageProvider} from "./components/LanguageFac/LanguageContext";


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

            {/*<Loading load={load}/>*/}


            <div className="App" style={{
                display: load ? 'none' : 'block'
            }}>
                <LanguageProvider>
                    <Header/>
                    {/*<Tabs/>*/}
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
                        <Route path="/germany" element={<Germany/>}/>
                        <Route path="/austria" element={<Austria/>}/>
                        <Route path="/britan" element={<Britan/>}/>
                        <Route path="/canada" element={<Canada/>}/>
                        <Route path="/china" element={<China/>}/>
                        <Route path="/holland" element={<Holland/>}/>
                        <Route path="/italy" element={<Italy/>}/>
                        <Route path="/latvia" element={<Latvia/>}/>
                        <Route path="/ireland" element={<Ireland/>}/>
                        <Route path="/spain" element={<Spain/>}/>
                        <Route path="/cyrpus" element={<Cyrpus/>}/>
                        <Route path="/tabs" element={<Tabs/>}/>
                    </Routes>
                    <Footer/>
                </LanguageProvider>
            </div>
        </>
    );
}

export default App;
