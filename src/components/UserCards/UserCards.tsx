import { AddCardButton } from "../UI/Buttons/AddCardButton";
import { UserCard } from "../UI/UserCard/UserCard";
import "./UserCards.scss"

export const UserCards = () => {
  return (
    <div className="UserCards">
      <h2>Мои карты</h2>
      <div className="user_cards_wrapper">
        <UserCard/>
        <UserCard/>
      </div>
      <AddCardButton/>
    </div>
  );
};
