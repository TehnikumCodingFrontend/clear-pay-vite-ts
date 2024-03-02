import { ReactSVG } from "react-svg";
import "./TransactionUserElem.scss";

interface ITransactionUserElem {
  avatarText: string;
  username: string;
  userCard: string;
  date: string;
  time: string;
}

export const TransactionUserElem = ({
  avatarText,
  date,
  time,
  userCard,
  username,
}: ITransactionUserElem) => {
  return (
    <div className="TransactionUserElem">
      <div className="side">
        <div className="avatar">{avatarText}</div>
        <div className="info_block">
          <span className="primary_info">{username}</span>
          <span className="secondary_info">{userCard}</span>
        </div>
      </div>
      <div className="side">
        <div className="info_block">
          <span className="primary_info">{time}</span>
          <span className="secondary_info">{date}</span>
        </div>
        <ReactSVG src="/img/icons/transfers-modern.svg" />
      </div>
    </div>
  );
};
