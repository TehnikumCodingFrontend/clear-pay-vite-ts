import "./AppSelect.scss";

interface IAppSelect {
  firstOption: string;
  secondOption: string;
  thirdOption?: string;
  fifthOption?: string;
  verticalPadding: string;
  horizontalPadding: string;
  labelText: string;
}

export const AppSelect = ({
  fifthOption,
  firstOption,
  secondOption,
  thirdOption,
  verticalPadding,
  horizontalPadding,
  labelText,
}: IAppSelect) => {
  return (
    <div className="AppSelect">
      <span>{labelText}</span>
      <select
        style={{
          paddingBottom: verticalPadding,
          paddingTop: verticalPadding,
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
        }}
      >
        <option value={firstOption}>{firstOption}</option>
        <option value={secondOption}>{secondOption}</option>
        {thirdOption && <option value={thirdOption}>{thirdOption}</option>}
        {fifthOption && <option value={fifthOption}>{fifthOption}</option>}
      </select>
    </div>
  );
};
