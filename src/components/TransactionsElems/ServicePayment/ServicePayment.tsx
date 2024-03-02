import { ReactSVG } from "react-svg";
import { Heading } from "../../Typography/Heading";
import { ServicePaymentElem } from "../ServicePaymentElem/ServicePaymentElem";
import "./ServicePayment.scss";

export const ServicePayment = () => {
  return (
    <div className="ServicePayment">
      <Heading headingText={"Оплата услуг"} headingType={"h2"} />

      <div className="elements_wrapper">
        <ReactSVG
          style={{ transform: "rotate(180deg)" }}
          src="/public/img/icons/slider-right.svg"
        />
        <ServicePaymentElem
          imgLink={"/img/icons/mobile.svg"}
          text={"Мобильные операторы"}
        />
        <ServicePaymentElem
          imgLink={"/img/icons/internet.svg"}
          text={"Мобильные операторы"}
        />
        <ServicePaymentElem
          imgLink={"/img/icons/tv.svg"}
          text={"Мобильные операторы"}
        />
        <ServicePaymentElem
          imgLink={"/img/icons/utilities.svg"}
          text={"Мобильные операторы"}
        />
        <ServicePaymentElem
          imgLink={"/img/icons/state-services.svg"}
          text={"Мобильные операторы"}
        />
        <ServicePaymentElem
          imgLink={"/img/icons/penalties.svg"}
          text={"Мобильные операторы"}
        />
        <ReactSVG src="/public/img/icons/slider-right.svg" />
      </div>
    </div>
  );
};
