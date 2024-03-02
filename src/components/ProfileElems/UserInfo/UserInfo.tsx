import { ReactSVG } from "react-svg";
import "./UserInfo.scss";

export const UserInfo = () => {
  return (
    <div className="UserInfo">
      <div className="header">
        <div className="avatar_wrapper">
          <div className="avatar_img">
            <img src="/img/users/usachev.jpeg" alt="avatar" />
          </div>
          <ReactSVG
            className="edit_avatar_img"
            src="/img/icons/edit-circle.svg"
          />
        </div>
        <div className="user_info_wrapper">
          <span className="username">Усачев Дмитрий</span>
          <span className="user_status">Пользователь</span>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_elems-wrapper">
          <span className="title">Фамилия:</span>
          <span className="description">Усачев</span>
        </div>
        <div className="bottom_elems-wrapper">
          <span className="title">Имя:</span>
          <span className="description">Дмитрий</span>
        </div>
        <div className="bottom_elems-wrapper">
          <span className="title">Номер:</span>
          <span className="description">+998(91)111-11-11</span>
        </div>
        <div className="bottom_elems-wrapper">
          <span className="title">E-mail:</span>
          <span className="description">dbank@gmail.com</span>
        </div>
        <div className="bottom_elems-wrapper">
          <span className="title">Страна:</span>
          <span className="description">Узбекистан</span>
        </div>
      </div>
    </div>
  );
};
