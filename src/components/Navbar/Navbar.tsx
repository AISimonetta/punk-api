import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";
import { FormEventHandler } from "react";


type NavbarProps = {
  searchName: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  highABVFilter: boolean;
  classicFilter: boolean;
  highAcidityFilter: boolean;
};


const Navbar = ({
searchName,
handleInput,
highABVFilter,
classicFilter,
highAcidityFilter,
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

    </div>
  );
};
export default Navbar;
