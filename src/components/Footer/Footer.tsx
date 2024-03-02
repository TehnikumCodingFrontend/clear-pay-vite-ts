import { ReactSVG } from "react-svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="links_wrapper">
        <ReactSVG className="footer_logo" src="/img/icons/clear-pay-logo.svg" />
        <ul>
          <span>Служба поддержки:</span>
          <li>
            <a href="tel:+998911456456">+998 911 456 456</a>
          </li>
          <li>
            <a href="tel:+998911456456">+998 911 456 456</a>
          </li>
        </ul>
      </div>
      <div className="links_wrapper">
        <ul>
          <span>Главная</span>
          <li>
            <a href="#">Отправителям</a>
          </li>
          <li>
            <a href="#">Получателям</a>
          </li>
          <li>
            <a href="#">Реквизиты</a>
          </li>
          <li>
            <a href="#">Кошелек</a>
          </li>
        </ul>
      </div>
      <div className="links_wrapper">
        <ul>
          <span>Обмен валюты</span>
          <li>
            <a href="#">Курс валют</a>
          </li>
          <li>
            <a href="#">Калькулятор</a>
          </li>
          <li>
            <a href="#">Купля / Продажа</a>
          </li>
        </ul>
      </div>
      <div className="links_wrapper">
        <ul>
          <span>Переводы</span>
          <li>
            <a href="#">На карту</a>
          </li>
          <li>
            <a href="#">По номеру</a>
          </li>
          <li>
            <a href="#">Запрос средств</a>
          </li>
          <li>
            <a href="#">Сбор средств</a>
          </li>
        </ul>
      </div>
      <div className="links_wrapper">
        <ul>
          <span>Сервисы</span>
          <li>
            <a href="#">Онлайн сервисы</a>
          </li>
          <li>
            <a href="#">Страхование</a>
          </li>
          <li>
            <a href="#">Кредиты</a>
          </li>
        </ul>
      </div>
      <div className="links_wrapper">
        <ul>
          <span>Платежи</span>
          <li>
            <a href="#">Мобильная связь</a>
          </li>
          <li>
            <a href="#">Интернет</a>
          </li>
          <li>
            <a href="#">Коммунальные услуги</a>
          </li>
          <li>
            <a href="#">ТВ и связь</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
