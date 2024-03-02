import { Heading } from "../../Typography/Heading";
import { TransactionUserElem } from "../../UI/TransactionUserElem/TransactionUserElem";
import "./LastTransactions.scss";
import { lastTransactionsData } from "./data";

export const LastTransactions = () => {
  return (
    <div className="LastTransactions">
      <Heading headingText={"Последние переводы"} headingType={"h2"} />
      {lastTransactionsData &&
        lastTransactionsData.map((elem) => (
          <TransactionUserElem
            avatarText={elem.avatarText}
            username={elem.username}
            userCard={elem.userCard}
            date={elem.date}
            time={elem.time}
          />
        ))}
        <a href="">Показать еще</a>
    </div>
  );
};
