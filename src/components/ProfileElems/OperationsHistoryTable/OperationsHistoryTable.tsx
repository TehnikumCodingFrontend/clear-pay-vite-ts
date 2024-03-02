import { OperationElem } from "./OperationElem";
import "./OperationsHistoryTable.scss";

export const OperationsHistoryTable = () => {
  return (
    <div className="OperationsHistoryTable">
      <h2>История проведенных операций</h2>
      <table>
        <tr>
          <th>Операция</th>
          <th>Дата</th>
          <th>Сумма (UZS)</th>
          <th>Статус</th>
        </tr>
        <OperationElem
          operationType={"Перевод"}
          operationDate={"26.10.2023"}
          operationSum={"200 000"}
          operationStatus={"success"}
        />
        <OperationElem
          operationType={"Зачисление"}
          operationDate={"15.12.2023"}
          operationSum={"2 000 000"}
          operationStatus={"in-process"}
        />
        <OperationElem
          operationType={"Зачисление"}
          operationDate={"18.02.2023"}
          operationSum={"500 000"}
          operationStatus={"canceled"}
        />
        <OperationElem
          operationType={"Оплата интернет"}
          operationDate={"05.05.2023"}
          operationSum={"250 000"}
          operationStatus={"success"}
        />
      </table>
      <div className="show_more">
        <span>Показать еще </span>
      </div>
    </div>
  );
};
