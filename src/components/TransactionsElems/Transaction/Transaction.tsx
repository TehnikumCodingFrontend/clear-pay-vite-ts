import { Heading } from "../../Typography/Heading";
import { AppInput } from "../../UI/AppInput/AppInput";
import { AppButton } from "../../UI/Buttons/AppButton";
import "./Transaction.scss";

export const Transaction = () => {
  return (
    <div className="Transaction">
      <Heading headingText={"Счет списания"} headingType={"h2"} />
      <AppInput
        inputLabel={""}
        inputPlaceholder={"Номер карты"}
        altText={"card-icon"}
        inputType={"number"}
        paddingVertical={"18px"}
        paddingHorizontal={"24px"}
        inputSvgLink="img/icons/Union.svg"
      />
      <AppInput
        inputLabel={""}
        inputPlaceholder={"Сумма перевода"}
        altText={"card-icon"}
        inputType={"number"}
        paddingVertical={"18px"}
        paddingHorizontal={"24px"}
        inputSvgLink="img/icons/cash.svg"
      />
      <a href="">Выбрать по номеру телефона</a>
      <Heading headingText={"Счет списания"} headingType={"h2"} />
      <AppInput
        inputLabel={""}
        inputPlaceholder={"Номер карты"}
        altText={"card-icon"}
        inputType={"number"}
        paddingVertical={"18px"}
        paddingHorizontal={"24px"}
        inputSvgLink="img/icons/Union.svg"
      />
      <a href="">Выбрать по номеру телефона</a>
      <AppButton
        buttonText={"Перевести"}
        isDisabled={true}
        verticalPadding={"16px"}
      />
    </div>
  );
};
