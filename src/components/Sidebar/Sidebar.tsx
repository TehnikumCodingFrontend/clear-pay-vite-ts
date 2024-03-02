import { ReactSVG } from "react-svg";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ReactSVG className="sidebar_logo" src="/img/icons/clear-pay-logo.svg" />
      <ul>
        <li>
          <a href="#">
            <ReactSVG src="/img/icons/profile.svg" />
            <span>Профиль</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ReactSVG src="/img/icons/convertion.svg" />
            <span>Обмен валюты</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ReactSVG src="/img/icons/transfers.svg" />
            <span>Переводы</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ReactSVG src="/img/icons/service.svg" />
            <span>Сервисы</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ReactSVG src="/img/icons/payment.svg" />
            <span>Платежи</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ReactSVG src="/img/icons/help.svg" />
            <span>Помощь</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ReactSVG src="/img/icons/exit.svg" />
            <span>Выход</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
