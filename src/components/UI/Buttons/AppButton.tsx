import "./Buttons.scss";

interface IAppButton {
  buttonText: string;
  isDisabled: boolean;
  verticalPadding: string;
}

export const AppButton = ({
  buttonText,
  isDisabled,
  verticalPadding,
}: IAppButton) => {
  return (
    <button
      style={{ paddingTop: verticalPadding, paddingBottom: verticalPadding }}
      disabled={isDisabled}
      className="AppButton"
      type="button"
    >
      {buttonText}
    </button>
  );
};
