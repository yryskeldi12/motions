import React, {useState} from 'react';
import './header.scss'
import motion from '../../Image/motion-logo.svg'
import {NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {RxHamburgerMenu} from "react-icons/rx"
import {GrClose} from  "react-icons/gr"
import {FaTelegramPlane} from  "react-icons/fa"
import {AiFillInstagram} from  "react-icons/ai"
import {FaPhoneVolume} from  "react-icons/fa"
import {CgMail} from  "react-icons/cg"
import {useLanguage} from "../LanguageFac/LanguageContext";


const Header = () => {
    const [modal, setModal] = useState(true)
    const [value, setValue] = useState("")
    const [burger , setBurger] = useState(false)
    const [color , setColor] = useState(1)
    const handleChane = (e) => setValue(e.target.value)

    const {language,changeLanguage} = useLanguage()

    const translations = {
        EN :{
            home: "Home",
            home2: "About Us",
            home3: "Study Abroad",
            home4: "Contacts",
        },
        RU: {
            home: "Главная",
            home2: "О нас",
            home3: "Учеба за границей",
            home4: "Контакты",
        }
    };
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}><img src={motion} alt=""/></NavLink>

                    <nav className="header--title">
                       <div onClick={() => setBurger(true)}> <NavLink to={"/"}><h3 className='h3'>{translations[language].home}</h3></NavLink></div>
                       <div onClick={() => setBurger(true)}> <NavLink to={"/about"}><h3 className='h3'>{translations[language].home2}</h3></NavLink></div>
                       <div onClick={() => setBurger(true)}> <NavLink to={"/study"}><h3 className='h3'>{translations[language].home3}</h3></NavLink></div>
                       <div onClick={() => setBurger(true)}> <NavLink to={"/contacts"}><h3 className='h3'>{translations[language].home4}</h3></NavLink></div>
                    </nav>



                    <div className="header--search">
                        <p><BsSearch onClick={() => setModal(!modal)}/></p>
                        <NavLink to="/country"> <input onChange={handleChane} type="search"
                                                       placeholder="Поиск.."/></NavLink>
                        <div className="header--search__option">
                            <select onChange={(ed) => {
                                changeLanguage(ed.target.value)
                            }} value={language}>
                                <option value="EN">
                                     EN
                                </option>
                                <option value="RU">
                                    RU
                                </option>
                            </select>
                        </div>
                        <div hidden={modal}>
                            <div className="header--search__includes">
                                <h1>La Trobe University</h1>
                                <h1>Solbrige University</h1>
                                <h1>DCU University</h1>
                                <h1>Cowan University</h1>
                            </div>
                        </div>
                    </div>
                    <div className='header--men'>
                        {burger ?  <RxHamburgerMenu onClick={() => setBurger(false)} style={{fontSize:'31px', zIndex:'50'}}/> : <GrClose onClick={() => setBurger(true)} style={{fontSize:'31px'}}/>}
                        <div style={{display:burger ? 'none' : 'block'}} className='header--men__div'>
                            <nav className="header--men__div--nav">
                                <NavLink to={"/"}><h4  className='h1'>Home</h4></NavLink>
                                <NavLink to={"/about"}><h4 className='h2'>About Us</h4></NavLink>
                                <NavLink to={"/study"}><h4 className='h3'>Study Abroad</h4></NavLink>
                                <NavLink to={"/contacts"}><h4  className='h4'>Contacts</h4></NavLink>
                                {/* <div style={{display:'flex' , justifyContent:'space-between' , width:'94px',marginTop:'10px',fontSize:'20px', marginLeft:'10px'}} > */}
                                <div className='header--men__div--nav__color' >
                                    <h5 style={{color:color === 1 ? 'black' : '#7E7B7B' , cursor:"pointer" , borderBottom:color === 1 ? '2px solid #5609BB' : ''}} onClick={() => setColor(1)}>EN</h5>
                                    <h5 style={{color:color === 2 ? 'black' : '#7E7B7B' , cursor:"pointer" , borderBottom:color === 2 ? '2px solid #5609BB' : ''}} onClick={() => setColor(2)}>RU</h5>
                                    <h5 style={{color:color === 3 ? 'black' : '#7E7B7B' , cursor:"pointer" , borderBottom:color === 3 ? '2px solid #5609BB' : ''}} onClick={() => setColor(3)}>KG</h5>
                                </div>
                                <div className='header--men__div--nav__icons'>
                                    <FaTelegramPlane/>
                                    <AiFillInstagram/>
                                    <FaPhoneVolume/>
                                    <CgMail className='header--men__div--nav__icons--lol'/>
                                </div>
                                



                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;