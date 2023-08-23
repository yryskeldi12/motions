import React, { useState } from "react";
import "./header.scss";
import motion from "../../Image/motion-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

let arr = {
  text: [
    "America",
    "Great Britain",
    "Austria",
    "germany",
    "Holland",
    "Ireland",
    "Spain",
    "Italy",
    "Canada",
    "Cyprus",
    "China",
    "Latvia",
  ],
};

const Header = () => {
  const [modal, setModal] = useState(true);
  const [value, setValue] = useState("");
  const [burger, setBurger] = useState(true);
  const [color, setColor] = useState(1);
  // const [color1 , setColor1] = useState(false)
  const handleChane = (e) => setValue(e.target.value);

  console.log("burger", burger);
  // console.log('color1', color1);

  const filter = arr.text.filter((el) =>
    el.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <NavLink to={"/"}>
            <img src={motion} alt="" />
          </NavLink>

          <nav className="header--title">
            <div onClick={() => setBurger(true)}>
              {" "}
              <NavLink to={"/"}>
                <h3 className="h3">Home</h3>
              </NavLink>
            </div>
            <div onClick={() => setBurger(true)}>
              {" "}
              <NavLink to={"/about"}>
                <h3 className="h3">About Us</h3>
              </NavLink>
            </div>
            <div onClick={() => setBurger(true)}>
              {" "}
              <NavLink to={"/study"}>
                <h3 className="h3">Study Abroad</h3>
              </NavLink>
            </div>
            <div onClick={() => setBurger(true)}>
              {" "}
              <NavLink to={"/contacts"}>
                <h3 className="h3">Contacts</h3>
              </NavLink>
            </div>
          </nav>
           
          <div className="header--search">
            <p>
              <BsSearch onClick={() => setModal(!modal)} />
            </p>
            <NavLink to="/country">
              {" "}
              <input
                value={value}
                onChange={handleChane}
                type="search"
                placeholder="Поиск.."
              />
            </NavLink>
            <div className="header--search__option">
              <select>
                <option>EN</option>
                <option>RU</option>
              </select>
            </div>
            <div hidden={modal}>
              <div className="header--search__includes">
                {filter.map((el) => (
                  <div>{el}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="header--men">
            {burger ? (
              <RxHamburgerMenu
                onClick={() => setBurger(false)}
                style={{ fontSize: "31px", zIndex: "50" }}
              />
            ) : (
              <GrClose
                onClick={() => setBurger(true)}
                style={{ fontSize: "31px" }}
              />
            )}
            <div
              style={{ display: burger ? "none" : "block" }}
              className="header--men__div"
            >
              <nav className="header--men__div--nav">

              <NavLink to={"/"}>
                 <a onClick={() => setBurger(true)}  href="#"><h4 className="h1">Home</h4></a>
                </NavLink><br />
                <NavLink to={"/about"}>
                  <a onClick={() => setBurger(true)}  href="#"><h4 className="h2">About Us</h4></a>
                </NavLink><br />
                <NavLink to={"/study"}>
                <a onClick={() => setBurger(true)}  href="#"><h4 className="h3">Study Abroad</h4></a>
                </NavLink><br />
                <NavLink to={"/contacts"}>
                <a onClick={() => setBurger(true)}  href="#">
                  <h4 className="h4">Contacts</h4>
                  </a>
                  
                </NavLink>

                {/* <NavLink to={"/"}>
                  
                </NavLink>
                <NavLink to={"/about"}>
                  
                </NavLink>
                <NavLink to={"/study"}>
                  
                </NavLink>
                <NavLink to={"/contacts"}>
                  
                </NavLink> */}
                {/* <div style={{display:'flex' , justifyContent:'space-between' , width:'94px',marginTop:'10px',fontSize:'20px', marginLeft:'10px'}} > */}
                <div className="header--men__div--nav__navcolor">
                  <h5
                    style={{
                      color: color === 1 ? "black" : "#7E7B7B",
                      cursor: "pointer",
                      borderBottom: color === 1 ? "2px solid #5609BB" : "",
                    }}
                    onClick={() => setColor(1)}
                  >
                    EN
                  </h5>
                  <h5
                    style={{
                      color: color === 2 ? "black" : "#7E7B7B",
                      cursor: "pointer",
                      borderBottom: color === 2 ? "2px solid #5609BB" : "",
                    }}
                    onClick={() => setColor(2)}
                  >
                    RU
                  </h5>
                  <h5
                    style={{
                      color: color === 3 ? "black" : "#7E7B7B",
                      cursor: "pointer",
                      borderBottom: color === 3 ? "2px solid #5609BB" : "",
                    }}
                    onClick={() => setColor(3)}
                  >
                    KG
                  </h5>
                </div>
                <div className="header--men__div--nav__navicons">
                  <FaTelegramPlane />
                  <AiFillInstagram />
                  <FaPhoneVolume />
                  <CgMail className="header--mendiv--navicons--lol" />
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
