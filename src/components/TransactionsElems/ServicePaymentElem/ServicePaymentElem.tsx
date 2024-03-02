import { ReactSVG } from "react-svg";
import "./ServicePaymentElem.scss"

interface IServicePaymentElem {
  imgLink: string;
  text: string;
}

export const ServicePaymentElem = ({imgLink,text}: IServicePaymentElem) => {
  return (
    <div className="ServicePaymentElem">
      <ReactSVG src={imgLink}/>
      <span>{text}</span>
    </div>
  );
};
