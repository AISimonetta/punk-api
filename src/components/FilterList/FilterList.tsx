import { FormEventHandler } from "react";
import "./FilterList.scss";

type FilterListProps = {
  handleInput: FormEventHandler<HTMLInputElement>;
  highABVFilter: boolean;
  classicFilter: boolean;
  highAcidityFilter: boolean;
};

const FilterList = ({
  handleInput,
  highABVFilter,
  classicFilter,
  highAcidityFilter,
}: FilterListProps) => {
  return (
    <div className="filterCheckboxes">
      <div className="input__checkbox">
        <label htmlFor="highABV">High Alcohol / ABV higher than 6.0%: </label>
        <input
          type="checkbox"
          name="highABVFilter"
          id="highABV"
          onChange={handleInput}
          checked={highABVFilter}
        />
      </div>

      <div>
        <label htmlFor="classic">Classic Range: </label>
        <input
          type="checkbox"
          name="classicFilter"
          id="classic"
          onChange={handleInput}
          checked={classicFilter}
        />
      </div>

      <div>
        <label htmlFor="highAcidity">High Acidity /PH higher than 4: </label>
        <input
          type="checkbox"
          name="highAcidityFilter"
          id="highAcidity"
          onChange={handleInput}
          checked={highAcidityFilter}
        />
      </div>
    </div>
  );
};

export default FilterList;
