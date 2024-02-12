import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./ProfilePage.scss"

export const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <Sidebar/>
      <Header/>
    </div>
  );
};
