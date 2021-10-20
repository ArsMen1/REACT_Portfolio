import React from "react";

const Contacts = () => {
  return (
    <div className="Contacts">
      <p> You can contact me by any method convenient for you:</p>
      <div className="Contacts__link">
        <div className="link phoneImg">
          <p className="phone">
            By&nbsp;phone{" "}
            <span className="phoneNumbers">
              +7&nbsp;(930)&nbsp;011&nbsp;70&nbsp;26
            </span>
          </p>
        </div>
        <div className="link telegramm">
          <a href="https://t.me/proffi01" target="_blank">
            <p>Telegramm</p>
          </a>
        </div>
        <div className="link instagramm">
          <a href="https://www.instagram.com/osipovarsen_/" target="_blank">
            <p>Instagramm</p>
          </a>
        </div>
        <div className="link Vk">
          <a href="https://vk.com/osipovarsen" target="_blank">
            <p>Vk</p>
          </a>
        </div>
        <div className="link Watsap">
          <a href="https://wa.me/+79624283873" target="_blank">
            <p>Watsap</p>
          </a>
        </div>
        <div className="link GitHub">
          <a href="https://github.com/ArsMen1" target="_blank">
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
