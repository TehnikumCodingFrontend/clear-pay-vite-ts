import { AppButton } from "../../UI/Buttons/AppButton";
import "./ExchangeCalculator.scss";

export const ExchangeCalculator = () => {
  return (
    <div className="ExchangeCalculator">
      <div className="inputs_wrapper">
        <label htmlFor="sell">
          <h2>Хочу продать</h2>
          <div>
            <input type="text" />
            <select name="" id="">
              <option value="usd">USD</option>
              <option value="uzs">UZS</option>
            </select>
          </div>
        </label>
        <label htmlFor="get">
          <h2>Получу</h2>
          <div>
            <input type="text" />
            <select name="" id="">
              <option value="usd">USD</option>
              <option value="uzs">UZS</option>
            </select>
          </div>
        </label>
      </div>
      <AppButton
        buttonText={"Рассчитать"}
        isDisabled={false}
        verticalPadding={"24px"}
      />
    </div>
  );
};
