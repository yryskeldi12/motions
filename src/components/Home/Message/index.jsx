import React, { useState } from "react";
import "./index.scss";
// import post from "../../Image/Frame 239.svg";
import { LuMail } from "react-icons/lu";
import { FaTelegramPlane, FaPhoneVolume } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import what from "../../../Image/WhatsApp.svg";
import ins from "../../../Image/Instagram.svg";
import teleg from "../../../Image/Telegram.svg";
import face from "../../../Image/Facebook.svg";

const Message = () => {
  const [send, setSend] = useState(false);
  const [del, setDel] = useState(false);
  const [logo, setLogo] = useState(false);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const input = document.querySelector(".Name");
  const input1 = document.querySelector(".Last");
  const input2 = document.querySelector(".phone");
  const input3 = document.querySelector(".email");
  const input4 = document.querySelector(".group");
  const input5 = document.querySelector(".help");

  return (
    <div id="message">
      <div className="container">
        <div className="message">
          <div className="message--input">
            <h1>Send a message</h1>
            <div className="message--input__name">
              <input
                className="Name"
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="First Name"
              />
              <input
                className="Last"
                onChange={(e) => setValue1(e.target.value)}
                type="text"
                placeholder="Last Name "
              />
            </div>
            <div className="message--input__phone">
              <input
                className="phone"
                onChange={(e) => setValue2(e.target.value)}
                type="nmber"
                placeholder="phone"
              />
              <input
                className="email"
                onChange={(e) => setValue3(e.target.value)}
                type="email  "
                placeholder="email"
              />
            </div>
            <div className="message--input__group">
              <input
                className="group"
                onChange={(e) => setValue4(e.target.value)}
                type="text"
                placeholder="Group or Company"
              />
            </div>
            <div className="message--input__help">
              <input
                className="help"
                onChange={(e) => setValue5(e.target.value)}
                type="text"
                placeholder="How can we help?"
              />
            </div>
            <center style={{ display: "flex" }}>
              <button
                onClick={() => {
                  input.value = "";
                  input1.value = "";
                  input2.value = "";
                  input3.value = "";
                  input4.value = "";
                  input5.value = "";
                }}
              >
                Submit
              </button>
              <button onClick={() => setDel(!del)}>Open</button>
            </center>
          </div>
          <div className="message--contact">
            <div className="message--contact__info">
              <h1>Contact Info</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <h4>
                  <FaPhoneVolume />
                </h4>
                <h2>+996500554422</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <h4>
                  <LuMail />
                </h4>
                <h2>motionweb312@gmail.com</h2>
              </div>
            </div>
            <div className="message--contact__telegram">
              <h1>
                <FaTelegramPlane />
              </h1>

              <h1>
                <BsWhatsapp />
              </h1>
              <h1>
                <BsInstagram />
              </h1>
            </div>
            <div className="message--contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11695.027242872911!2d74.57926966418306!3d42.877976842874084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81f4a0a30a7%3A0xebed4865356709e4!2z0JrRi9GA0LPRi9C30YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINGE0LjQu9Cw0YDQvNC-0L3QuNGPINC40LwuINCiLiDQodCw0YLRi9C70LPQsNC90L7QstCw!5e0!3m2!1sru!2skg!4v1691909639412!5m2!1sru!2skg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="message--line ">
            <div onClick={() => setSend(!send)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <rect width="56" height="56" rx="28" fill="#E5EA00" />
                <path
                  d="M28.5771 31.0701C28.745 32.3354 28.3429 33.662 27.3706 34.6343L23.5819 38.423C21.9237 40.0811 19.2353 40.0811 17.5771 38.423C15.919 36.7648 15.919 34.0764 17.5771 32.4182L21.3658 28.6295C22.3381 27.6572 23.6647 27.255 24.93 27.423M27.4232 24.9297C27.2553 23.6644 27.6575 22.3379 28.6298 21.3656L32.4185 17.5769C34.0766 15.9187 36.765 15.9187 38.4232 17.5769C40.0814 19.235 40.0814 21.9235 38.4232 23.5816L34.6345 27.3703C33.6622 28.3426 32.3357 28.7448 31.0703 28.5768M24.93 31.0701L31.0703 24.9297"
                  stroke="#212121"
                  strokeWidth="1.3"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          style={{
            display: send ? "block" : "none",
          }}
          className="send"
        >
          <h1>send</h1>
          <p>Share this site with your friends</p>
          <div className="send--img">
            <img src={what} alt="" />
            <img src={ins} alt="" />
            <img src={face} alt="" />
            <img src={teleg} alt="" />
          </div>
          <center>
            <button onClick={() => setLogo(!logo)}>Done</button>
          </center>
        </div>
        <div style={{ display: logo ? "block" : "none" }} className="block1">
          <div className="message--contact__info">
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <h4>
                <FaPhoneVolume />
              </h4>
              <h2>+996500554422</h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <h4>
                <LuMail />
              </h4>
              <h2>motionweb312@gmail.com</h2>
            </div>
          </div>
        </div>

        <div style={{ display: del ? "block" : "none" }} className="valve">
          <h1>First Name: {value}</h1>
          <h1>Last Name: {value1}</h1>
          <h1>Phone:{value2}</h1>
          <h1>Email:{value3}</h1>
          <h1>Group or Company:{value4}</h1>
          <h1>How can we help?:{value5}</h1>
        </div>
      </div>
    </div>
  );
};

export default Message;
