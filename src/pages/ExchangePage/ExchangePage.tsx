import { EnrollmentAmount } from "../../components/ExchangeElems/EnrollmentAmount/EnrollmentAmount";
import { ExchangeCalculator } from "../../components/ExchangeElems/ExchangeCalculator/ExchangeCalculator";
import { ExchangeCard } from "../../components/ExchangeElems/ExchangeCard/ExchangeCard";
import { ExchangeRateTable } from "../../components/ExchangeElems/ExchangeRateTable/ExchangeRateTable";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Heading } from "../../components/Typography/Heading";
import "./ExchangePage.scss";

export const ExchangePage = () => {
  return (
    <div className="ExchangePage Page">
      <div className="ExchangeWrapper PageWrapper">
        <Sidebar />
        <div className="exchangeContainer PageContainer">
          <Header />
          <div className="container">
            <div className="content_top_wrapper">
              <div className="left">
                <Heading headingText={"Курс валют"} headingType={"h1"} />
                <ExchangeRateTable />
              </div>
              <div className="right">
                <Heading headingText={"Калькулятор"} headingType={"h1"} />
                <ExchangeCalculator />
              </div>
            </div>
            <div className="content_bottom_wrapper">
              <Heading
                headingText={"Купить или продать валюту"}
                headingType={"h1"}
              />
              <div className="components">
                <ExchangeCard headingText={"Счет списания"} />
                <ExchangeCard headingText={"Счет зачисления"} />
                <EnrollmentAmount />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
