import { AppInput } from "../../UI/AppInput/AppInput";
import { AppSelect } from "../../UI/AppSelect/AppSelect";
import { AppButton } from "../../UI/Buttons/AppButton";
import "./EnrollmentAmount.scss";

export const EnrollmentAmount = () => {
  return (
    <div className="EnrollmentAmount">
      <div className="inputs_wrapper">
        <AppInput
          inputLabel={"Сумма зачисления"}
          inputPlaceholder={"1"}
          altText={"dollar-icon"}
          paddingVertical={"8px"}
          paddingHorizontal={"20px"}
          inputSvgLink="/public/img/icons/dollar.svg"
          inputType="number"
        />
        <AppSelect
          firstOption={"USD"}
          secondOption={"UZS"}
          verticalPadding={"8px"}
          horizontalPadding={"20px"}
          labelText="Валюта зачисления"
        />
      </div>

      <AppButton
        buttonText={"Перевести"}
        isDisabled={true}
        verticalPadding={"13px"}
      />
    </div>
  );
};
