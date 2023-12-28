import { FormEventHandler } from "react";
import "./FilterList.scss";


type FilterListProps = {
  handleInput: FormEventHandler<HTMLInputElement>;
  highABVFilter: boolean;
  classicFilter: boolean;
  highAcidityFilter: boolean;
};


const FilterList = ({ handleInput, highABVFilter, classicFilter, highAcidityFilter  }: FilterListProps) => {
  return (
    <div>

      <div>
        <label htmlFor="highABV">High Alcohol / ABV%:</label>
        <input
            type="checkbox"
            name="highABVFilter"
            id="highABV"
            onChange={handleInput}
            checked={highABVFilter}
        />
      </div>

      <div>
        <label htmlFor="classic">Classic Range:</label>
        <input
            type="checkbox"
            name="classicFilter"
            id="classic"
            onChange={handleInput}
            checked={classicFilter}
        />
      </div>

      <div>
        <label htmlFor="highAcidity">High Acidity:</label>
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
