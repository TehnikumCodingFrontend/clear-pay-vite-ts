import "./ExchangeCard.scss";
import { AppInput } from "../../UI/AppInput/AppInput";

interface IExchangeCard {
  headingText: string;
}

export const ExchangeCard = ({ headingText }: IExchangeCard) => {
  return (
    <div className="ExchangeCard">
      <h2>{headingText}</h2>
      <AppInput
        inputLabel={"Номер карты"}
        inputPlaceholder={"Номер карты"}
        altText={"union-icon"}
        inputType={"number"}
        paddingVertical={"18px"}
        paddingHorizontal={"20px"}
        inputSvgLink="/img/icons/Union.svg"
      />
      <div className="card_info_wrapper">
        <AppInput
          inputLabel={"Срок действия"}
          inputPlaceholder={"ММ / ГГ"}
          altText={"calendar-icon"}
          inputType={"number"}
          paddingVertical={"18px"}
          paddingHorizontal={"17px"}
          inputSvgLink="/img/icons/calendar.svg"
        />
        <AppInput
          inputLabel={"Название карты"}
          inputPlaceholder={"Название карты"}
          altText={"edit-icon"}
          inputType={"text"}
          paddingVertical={"18px"}
          paddingHorizontal={"20px"}
          inputSvgLink="/img/icons/edit.svg"
        />
      </div>
    </div>
  );
};
