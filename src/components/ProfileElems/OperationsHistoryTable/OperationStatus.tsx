import { ReactSVG } from "react-svg";
import "./OperationsHistoryTable.scss";

interface IOperationStatus {
  status: "success" | "canceled" | "in-process";
}

export const OperationStatus = ({ status }: IOperationStatus) => {
  const renderOperationStatus = () => {
    switch (status) {
      case "success":
        return (
          <div className="operation-success">
            <ReactSVG
              className="status_icon"
              src="/public/img/icons/done.svg"
            />
            <span className="status_text">Выполнен</span>
          </div>
        );
      case "canceled":
        return (
          <div className="operation-canceled">
            <ReactSVG
              className="status_icon"
              src="/public/img/icons/cancel.svg"
            />
            <span className="status_text">Отмена</span>
          </div>
        );
      case "in-process":
        return (
          <div className="operation-inProcess">
            <ReactSVG
              className="status_icon"
              src="/public/img/icons/in-process.svg"
            />
            <span className="status_text">В процессе</span>
          </div>
        );
      default:
        return;
    }
  };

  return renderOperationStatus();
};
