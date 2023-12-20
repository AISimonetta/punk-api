import './SearchBox.scss'
import { FormEventHandler } from "react";

type SearchBoxProps = {
    searchName: string;
    onChange: FormEventHandler<HTMLInputElement>;
}

const SearchBox = ({searchName , onChange}: SearchBoxProps) => {
    return (
    <div className="searchByName">
    <input
        type="text"
        value={searchName}
        onChange={onChange}
        className="searchByName__input"
        placeholder="Search by name"
    />
    </div>
    )
}

export default SearchBox