import { FormEventHandler } from 'react';
import './FilterList.scss'

type FilterListProps = {
    handleInput: FormEventHandler<HTMLInputElement>;
  };
  
  const FilterList = ({ handleInput }: FilterListProps) => {
    return (
      <div>
        <div>
          <label htmlFor="highABV">High Alcohol / ABV%:</label>
          <input type="checkbox" name="highABV" id="highABV" onChange={handleInput} />
        </div>
  
        <div>
          <label htmlFor="classic">Classic Range:</label>
          <input type="checkbox" name="Classic" id="classic" onChange={handleInput} />
        </div>
  
        <div>
          <label htmlFor="highAcidity">High Acidity:</label>
          <input type="checkbox" name="HighAcidity" id="highAcidity" onChange={handleInput} />
        </div>
      </div>
    );
  };
  
  export default FilterList;