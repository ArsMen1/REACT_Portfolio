import React from "react";

const Contacts = () => {
  return (
    <div className="Contacts">
      <p> You can contact me by any method convenient for you:</p>
      <div className="Contacts__link">
        <div className="link">
          <p className="phone">
            By&nbsp;phone
            <p className="phoneNumbers">
              +7&nbsp;(930)&nbsp;011&nbsp;70&nbsp;26
            </p>
          </p>
        </div>
        <div className="link">
          <a href="https://t.me/proffi01" target="_blank">
            <p>Telegramm</p>
          </a>
        </div>
        <div className="link">
          <a href="https://www.instagram.com/osipovarsen_/" target="_blank">
            <p>Instagramm</p>
          </a>
        </div>
        <div className="link">
          <a href="https://vk.com/osipovarsen" target="_blank">
            <p>Vk</p>
          </a>
        </div>
        <div className="link">
          <a href="https://wa.me/+79624283873" target="_blank">
            <p>Watsap</p>
          </a>
        </div>
        <div className="link">
          <a href="https://github.com/ArsMen1" target="_blank">
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
