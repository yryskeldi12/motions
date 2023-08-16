import React, {useState} from 'react';
import './header.scss'
import motion from '../../Image/motion-logo.svg'
import {NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";

const Header = () => {
    const [modal, setModal] = useState(true)
    const [value, setValue] = useState("")
    const handleChane = (e) => setValue(e.target.value)

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}><img src={motion} alt=""/></NavLink>
                    <div className="header--title">
                        <NavLink to={"/"}><h3 className='h3'>Home</h3></NavLink>
                        <NavLink to={"/about"}><h3 className='h3'>About Us</h3></NavLink>
                        <NavLink to={"/study"}><h3 className='h3'>Study Abroad</h3></NavLink>
                        <NavLink to={"/contacts"}><h3 className='h3'>Contacts</h3></NavLink>
                    </div>
                    <div className="header--search">
                        <p><BsSearch onClick={() => setModal(!modal)}/></p>
                        <NavLink to="/country"> <input onChange={handleChane} type="search"  placeholder="Поиск.."/></NavLink>
                        <div className="header--search__option">
                            <select>
                                <option>
                                    EN
                                </option>
                                <option>
                                    RU
                                </option>
                            </select>
                        </div>
                        <div hidden={modal}>
                            <div className="header--search__includes">
                                <h1>Solbrige University</h1>
                                <h1>La Trobe University</h1>
                                <h1>Solbrige University</h1>
                                <h1>DCU University</h1>
                                <h1>Cowan University</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;