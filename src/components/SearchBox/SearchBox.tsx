import './SearchBox.scss'
import { FormEventHandler } from "react";

type SearchBoxProps = {
    searchName: string;
    handleInput: FormEventHandler<HTMLInputElement>;
  }
  
  const SearchBox = ({ searchName, handleInput }: SearchBoxProps) => {
    return (
      <div className="searchByName">
        <input
          type="text"
          value={searchName}
          onChange={handleInput}
          className="searchByName__input"
          placeholder="Search by name"
        />
      </div>
    );
  }

  export default SearchBox