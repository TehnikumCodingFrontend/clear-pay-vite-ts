import { ReactSVG } from "react-svg";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img
        className="sidebar_logo"
        src="/img/icons/clear-pay-logo.svg"
        alt=""
      />
      <div className="nav_items_wrapper">
        <div className="nav_item">
          <ReactSVG className="nav_svg" src="/public/img/icons/profile.svg" />
          <span>Профиль</span>
        </div>
        <div className="nav_item">
          <ReactSVG
            className="nav_svg"
            src="/public/img/icons/convertion.svg"
          />
          <span>Обмен валюты</span>
        </div>
        <div className="nav_item">
          <ReactSVG className="nav_svg" src="/public/img/icons/transfers.svg" />
          <span>Переводы</span>
        </div>
        <div className="nav_item">
          <ReactSVG className="nav_svg" src="/public/img/icons/service.svg" />
          <span>Сервисы</span>
        </div>
        <div className="nav_item">
          <ReactSVG className="nav_svg" src="/public/img/icons/payment.svg" />
          <span>Платежи</span>
        </div>
        <div className="nav_item">
          <ReactSVG className="nav_svg" src="/public/img/icons/help.svg" />
          <span>Помощь</span>
        </div>
        <div className="nav_item">
          <ReactSVG className="nav_svg" src="/public/img/icons/exit.svg" />
          <span>Выход</span>
        </div>
      </div>
    </div>
  );
};
