import { OperationStatus } from "./OperationStatus";

interface IOperationElem {
  operationType: string;
  operationDate: string;
  operationSum: string;
  operationStatus: "success" | "canceled" | "in-process";
}

export const OperationElem = ({
  operationDate,
  operationSum,
  operationType,
  operationStatus,
}: IOperationElem) => {
  return (
    <tr>
      <td>{operationType}</td>
      <td>{operationDate}</td>
      <td>{operationSum}</td>
      <td>
        <OperationStatus status={operationStatus} />
      </td>
    </tr>
  );
};
