import { ReactSVG } from "react-svg";
import "./AppInput.scss";

interface IAppInput {
  inputImgLink?: string;
  inputSvgLink?: string;
  inputLabel: string;
  inputPlaceholder: string;
  altText: string;
  inputType: string;

  paddingVertical: string;
  paddingHorizontal: string;
}

export const AppInput = ({
  inputImgLink,
  inputLabel,
  inputPlaceholder,
  inputSvgLink,
  altText,
  paddingVertical,
  paddingHorizontal,
  inputType
}: IAppInput) => {
  return (
    <label className="AppInput">
      {inputLabel && inputLabel}
      <div
        className="input_wrapper"
        style={{
          paddingTop: paddingVertical,
          paddingBottom: paddingVertical,
          paddingRight: paddingHorizontal,
          paddingLeft: paddingHorizontal,
        }}
      >
        <input placeholder={inputPlaceholder} type={inputType} />
        {inputSvgLink && <ReactSVG src={inputSvgLink} />}
        {inputImgLink && <img src={inputImgLink} alt={altText} />}
      </div>
    </label>
  );
};
