import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { LastTransactions } from "../../components/TransactionsElems/LastTransactions/LastTransactions";
import { ServicePayment } from "../../components/TransactionsElems/ServicePayment/ServicePayment";
import { Transaction } from "../../components/TransactionsElems/Transaction/Transaction";
import "./TransactionsPage.scss";
export const TransactionsPage = () => {
  return (
    <div className="TransactionsPage Page">
      <div className="PageWrapper">
        <Sidebar />
        <div className="PageContainer">
          <Header />
          <div className="container">
            <div className="transactions_top_wrapper">
              <Transaction />
              <LastTransactions />
            </div>
            <div className="transactions_bottom_wrapper">
              <ServicePayment />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
