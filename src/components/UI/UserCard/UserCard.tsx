import { ReactSVG } from "react-svg";
import "./UserCard.scss";

export const UserCard = () => {
  return (
    <div className="UserCard">
      <img
        className="card_background"
        src="/img/icons/card-background-blue.png"
        alt="card-background"
      />
      <div className="card_header">
        <ReactSVG src="/img/icons/chip.svg" />
        <ReactSVG className="card_logo" src="/img/icons/visa.svg" />
      </div>
      <div className="card_mid">
        <span className="card_type">Корпоративная</span>
        <span className="card_balance">1 235 000 UZS</span>
      </div>
      <span className="is_main">Основная</span>
      <div className="card_bottom">
        <div className="card_holder_wrapper">
          <span className="info">Card Holder Name</span>
          <span className="owner_name">Усачев Дмитрий</span>
        </div>
        <div className="expiration_date_wrapper">
          <span className="info">Expiry Date</span>
          <span className="expiration_date">02/30</span>
        </div>
      </div>
    </div>
  );
};
