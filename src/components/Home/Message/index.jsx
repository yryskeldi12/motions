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
import {useLanguage} from "../../LanguageFac/LanguageContext";

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

  const {language} = useLanguage()

  const translations = {
    EN: {
      message: "Send a message",
      message2: "First Name",
      message3: "Last Name ",
      message4: "phone",
      message5: "email",
      message6: "Group or Company",
      message7: "How can we help?",
      submit: "Submit",
      open: "Open",
      info:"Contact Info"

    },
    RU: {
      message: "Отправить сообщение",
      message2: "Имя",
      message3: "Фамилия",
      message4: "телефон",
      message5: "электронная почта",
      message6: "Группа или Компания",
      message7: "Как мы можем помочь?",
      submit:"Подавать",
      open: 'Открыть',
      info:"Контактная информация"

    }
  }

  return (
    <div id="message">
      <div className="container">
        <div className="message">
          <div className="message--input">
            <h1>{translations[language].message}</h1>
            <div className="message--input__name">
              <input
                className="Name"
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder={translations[language].message2}
              />
              <input
                className="Last"
                onChange={(e) => setValue1(e.target.value)}
                type="text"
                placeholder={translations[language].message3}
              />
            </div>
            <div className="message--input__phone">
              <input
                className="phone"
                onChange={(e) => setValue2(e.target.value)}
                type="nmber"
                placeholder={translations[language].message4}
              />
              <input
                className="email"
                onChange={(e) => setValue3(e.target.value)}
                type="email  "
                placeholder={translations[language].message5}
              />
            </div>
            <div className="message--input__group">
              <input
                className="group"
                onChange={(e) => setValue4(e.target.value)}
                type="text"
                placeholder={translations[language].message6}
              />
            </div>
            <div className="message--input__help">
              <input
                className="help"
                onChange={(e) => setValue5(e.target.value)}
                type="text"
                placeholder={translations[language].message7}
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
                {translations[language].submit}
              </button>
              <button onClick={() => setDel(!del)}>{translations[language].open}</button>
            </center>
          </div>
          <div className="message--contact">
            <div className="message--contact__info">
              <h1>{translations[language].info}</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                  >
                    <path
                      d="M21.6332 0.718523C21.2205 1.14416 21.2205 1.84441 21.6332 2.28379L26.1728 6.96584C26.5855 7.40522 27.2778 7.40522 27.6905 6.96584C28.1032 6.5402 28.1032 5.83995 27.6905 5.41431L23.1508 0.718523C22.7381 0.292882 22.0326 0.292882 21.6332 0.718523ZM6.76287 22.3027C10.6102 26.2708 15.283 29.3326 19.1038 29.3326C20.8211 29.3326 22.3254 28.7148 23.5369 27.3417C24.2425 26.5316 24.6818 25.5842 24.6818 24.6506C24.6818 23.964 24.4289 23.305 23.8032 22.8382L19.7162 19.8449C19.0905 19.4056 18.5713 19.1859 18.092 19.1859C17.4929 19.1859 16.9471 19.5429 16.3347 20.1607L15.3895 21.1219C15.2431 21.2729 15.0567 21.3415 14.8836 21.3415C14.6839 21.3415 14.4843 21.2592 14.3511 21.1905C13.5257 20.7374 12.1146 19.4879 10.7966 18.1424C9.49198 16.7968 8.28052 15.3414 7.85451 14.4901C7.78795 14.3391 7.70807 14.1468 7.70807 13.9409C7.70807 13.7624 7.76132 13.5839 7.90776 13.4329L8.85297 12.4305C9.43873 11.7989 9.79817 11.2497 9.79817 10.6181C9.79817 10.1238 9.57185 9.58835 9.13253 8.94302L6.2703 4.78271C5.80435 4.12366 5.15203 3.83532 4.43314 3.83532C3.5545 3.83532 2.64923 4.24723 1.86378 5.02986C0.572447 6.30679 0 7.88578 0 9.62954C0 13.5702 2.91549 18.3483 6.76287 22.3027ZM20.3152 8.33888C21.0341 9.03913 22.179 9.05286 22.8846 8.31142C23.5902 7.58371 23.5902 6.4029 22.8846 5.67519C22.179 4.93375 21.0208 4.93375 20.3152 5.66146C19.5963 6.4029 19.5963 7.56998 20.3152 8.33888ZM15.5226 7.00704C15.1099 7.43268 15.1099 8.14666 15.5226 8.5723L20.0623 13.2681C20.475 13.6937 21.1672 13.6937 21.5799 13.2681C21.9926 12.8424 21.9926 12.1285 21.5799 11.7028L17.027 7.00704C16.6143 6.58139 15.9353 6.58139 15.5226 7.00704ZM14.2047 14.6137C14.9236 15.3551 16.0685 15.3551 16.7874 14.6137C17.5062 13.8722 17.5062 12.6914 16.7874 11.9774C16.0685 11.2223 14.9236 11.2223 14.2047 11.95C13.4991 12.6914 13.4991 13.8722 14.2047 14.6137Z"
                      fill="#D9D9D9"
                    />
                  </svg>
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
            <im g src={what} alt="" />
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
