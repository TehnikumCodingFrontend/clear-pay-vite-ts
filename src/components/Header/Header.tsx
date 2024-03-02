import { ReactSVG } from "react-svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="Header">
      <div className="search_block">
        <ReactSVG
          className="search_block_img"
          src="/public/img/icons/search.svg"
        />
        <input className="search_block_input" type="text" placeholder="Поиск" />
      </div>
      <div className="user_profile">
        <select className="languageSelect">
          <option value="RU">RU</option>
          <option value="EN">EN</option>
          <option value="UZB">UZB</option>
        </select>
        <img className="avatar" src="/public/img/users/usachev.jpeg" alt="" />
        <span>Дмитрий Усачев</span>
      </div>
    </header>
  );
};
