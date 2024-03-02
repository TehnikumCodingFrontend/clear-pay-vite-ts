import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { MonthlyStats } from "../../components/ProfileElems/MonthlyStats/MonthlyStats";
import { OperationsHistoryTable } from "../../components/ProfileElems/OperationsHistoryTable/OperationsHistoryTable";
import { UserInfo } from "../../components/ProfileElems/UserInfo/UserInfo";
import { UserCards } from "../../components/UserCards/UserCards";
import "./ProfilePage.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileContainer">
          <Header />

          <div className="container">
            <h1>Личный кабинет</h1>
            <div className="profileContent">
              <div className="profileContentLeft">
                <UserInfo />
                <UserCards />
              </div>
              <div className="profileContentRight">
                <MonthlyStats />
                <OperationsHistoryTable />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
