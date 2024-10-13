import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="Contacts">
      <p> You can contact me by any method convenient for you:</p>
      <div className="Contacts__link">
        <div className="link phoneImg">
          <p className="phone">
            By&nbsp;phone <br />
            <span className="phoneNumbers">
              +7&nbsp;(930)&nbsp;011&nbsp;70&nbsp;26
            </span>
          </p>
        </div>
        <div className="link telegramm">
          <Link href="https://t.me/main_Dev" target="_blank" rel="noreferrer">
            <p>Telegramm</p>
          </Link>
        </div>
        {/* <div className="link instagramm">
          <Link
            href="https://www.instagram.com/osipovarsen_/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Instagramm</p>
          </Link>
        </div> */}
        <div className="link Vk">
          <Link
            href="https://vk.com/osipovarsen"
            target="_blank"
            rel="noreferrer"
          >
            <p>Vk</p>
          </Link>
        </div>
        <div className="link Watsap">
          <Link
            href="https://wa.me/+79624283873"
            target="_blank"
            rel="noreferrer"
          >
            <p>Watsap</p>
          </Link>
        </div>
        {/* <div className="link GitHub">
          <Link
            href="https://github.com/ArsMen1"
            target="_blank"
            rel="noreferrer"
          >
            <p>GitHub</p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contacts;
