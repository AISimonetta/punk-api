import SearchBox from "../SearchBox/SearchBox";
import './Navbar.scss'
import FilterList from "../FilterList/FilterList";
import { FormEventHandler, MouseEventHandler } from "react";


type NavbarProps = {
  searchName: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  highABVFilter: boolean;
  classicFilter: boolean;
  highAcidityFilter: boolean;
  handleReset: MouseEventHandler<HTMLButtonElement>;
};

const Navbar = ({
searchName,
handleInput,
highABVFilter,
classicFilter,
highAcidityFilter,
handleReset,
}: NavbarProps) => {

  return (
    <div className="navbar__container">

      <div>
        <SearchBox searchName={searchName} handleInput={handleInput} />
      </div>

      <div>
        <FilterList
          handleInput={handleInput}
          highABVFilter={highABVFilter}
          classicFilter={classicFilter}
          highAcidityFilter={highAcidityFilter}
        />
      </div>

      <div>
        <button className="resetBtn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default Navbar;
